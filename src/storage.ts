import type { DailyProgress, Recording, Settings } from "./types";
import type { FavoriteExpression, MaterialProgress } from "./materialTypes";
import { validRecording } from "./domain";
const DB_NAME = "cet6-speak-daily";
let opening: Promise<IDBDatabase> | undefined;
export function database(): Promise<IDBDatabase> {
  if (!opening)
    opening = new Promise((resolve, reject) => {
      if (!globalThis.indexedDB) {
        reject(
          new Error(
            "此浏览器无法使用 IndexedDB，本地数据不能保存。请使用普通浏览模式重试。",
          ),
        );
        return;
      }
      const request = indexedDB.open(DB_NAME, 2);
      request.onupgradeneeded = () => {
        const db = request.result;
        for (const name of ["progress", "recordings", "settings"])
          if (!db.objectStoreNames.contains(name))
            db.createObjectStore(name, { keyPath: "id" });
        if (!db.objectStoreNames.contains("materialProgress"))
          db.createObjectStore("materialProgress", { keyPath: "materialId" });
        if (!db.objectStoreNames.contains("favoriteExpressions"))
          db.createObjectStore("favoriteExpressions", { keyPath: "id" });
      };
      request.onsuccess = () => {
        request.result.onversionchange = () => {
          request.result.close();
          opening = undefined;
        };
        resolve(request.result);
      };
      request.onerror = () => {
        opening = undefined;
        reject(request.error || new Error("无法打开本地数据库"));
      };
      request.onblocked = () => {
        opening = undefined;
        reject(new Error("本地数据库被其他页面占用，请关闭其他标签页重试。"));
      };
    });
  return opening;
}
function committed(tx: IDBTransaction): Promise<void> {
  return new Promise((resolve, reject) => {
    tx.oncomplete = () => resolve();
    tx.onabort = () =>
      reject(tx.error || new Error("本地保存失败，可能存储空间不足。"));
    tx.onerror = () => reject(tx.error || new Error("本地保存失败"));
  });
}
function result<T>(request: IDBRequest<T>): Promise<T> {
  return new Promise((resolve, reject) => {
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}
const attemptFrom = (
  r: Recording,
): NonNullable<DailyProgress["recordingAttempts"]>[number] => ({
  questionId: r.questionId,
  taskType: r.taskType,
  createdAt: r.createdAt,
  duration: r.duration,
});
async function recordingHistory(
  tx: IDBTransaction,
  progress: DailyProgress,
): Promise<NonNullable<DailyProgress["recordingAttempts"]>> {
  const stored = await result<DailyProgress | undefined>(
    tx.objectStore("progress").get(progress.id),
  );
  const attempts = stored?.recordingAttempts ?? progress.recordingAttempts;
  if (attempts !== undefined) return attempts;
  const recordings = await result<Recording[]>(
    tx.objectStore("recordings").getAll(),
  );
  return recordings.filter((r) => r.sessionId === progress.id).map(attemptFrom);
}
async function list<T>(store: string): Promise<T[]> {
  const db = await database();
  return new Promise((resolve, reject) => {
    const req = db.transaction(store).objectStore(store).getAll();
    req.onsuccess = () => resolve(req.result as T[]);
    req.onerror = () => reject(req.error);
  });
}
export const loadProgress = () => list<DailyProgress>("progress");
export const loadRecordings = () => list<Recording>("recordings");
export const loadMaterialProgress = () => list<MaterialProgress>("materialProgress");
export const loadFavoriteExpressions = () => list<FavoriteExpression>("favoriteExpressions");

export async function saveMaterialProgress(progress: MaterialProgress): Promise<void> {
  const db = await database();
  const tx = db.transaction("materialProgress", "readwrite");
  const done = committed(tx);
  tx.objectStore("materialProgress").put(progress);
  await done;
}

export async function saveFavoriteExpression(expression: FavoriteExpression): Promise<void> {
  const db = await database();
  const tx = db.transaction("favoriteExpressions", "readwrite");
  const done = committed(tx);
  tx.objectStore("favoriteExpressions").put(expression);
  await done;
}

export async function removeFavoriteExpression(id: string): Promise<void> {
  const db = await database();
  const tx = db.transaction("favoriteExpressions", "readwrite");
  const done = committed(tx);
  tx.objectStore("favoriteExpressions").delete(id);
  await done;
}
export async function saveProgress(p: DailyProgress): Promise<void> {
  const db = await database();
  const tx = db.transaction("progress", "readwrite");
  const done = committed(tx);
  tx.objectStore("progress").put(p);
  await done;
}
export async function loadSettings(): Promise<Settings | undefined> {
  return (await list<Settings>("settings"))[0];
}
export async function saveSettings(settings: Settings): Promise<void> {
  const db = await database();
  const tx = db.transaction("settings", "readwrite");
  const done = committed(tx);
  tx.objectStore("settings").put(settings);
  await done;
}
export async function saveRecording(
  recording: Recording,
  progress: DailyProgress,
): Promise<DailyProgress> {
  if (!validRecording(recording))
    throw new Error("录音无效，请至少录制一秒后重试。");
  if (
    recording.sessionId !== progress.id ||
    recording.dayId !== progress.dayId ||
    recording.date !== progress.date
  )
    throw new Error("录音与训练记录不匹配");
  const db = await database();
  const tx = db.transaction(["recordings", "progress"], "readwrite");
  const done = committed(tx);
  try {
    const attempts = await recordingHistory(tx, progress);
    const next = {
      ...progress,
      completedQuestionIds: [
        ...new Set([...progress.completedQuestionIds, recording.questionId]),
      ],
      recordingAttempts: [...attempts, attemptFrom(recording)],
    };
    tx.objectStore("recordings").put(recording);
    tx.objectStore("progress").put(next);
    await done;
    return next;
  } catch (error) {
    try {
      tx.abort();
    } catch {
      /* An already aborted transaction has no changes to roll back. */
    }
    await done.catch(() => {});
    throw error;
  }
}
export async function deleteRecording(
  recording: Recording,
  progress: DailyProgress,
): Promise<DailyProgress> {
  const db = await database();
  const tx = db.transaction(["recordings", "progress"], "readwrite");
  const done = committed(tx);
  try {
    const recordingAttempts = await recordingHistory(tx, progress);
    const next =
      progress.status === "completed"
        ? { ...progress, recordingAttempts }
        : {
            ...progress,
            recordingAttempts,
            completedQuestionIds: progress.completedQuestionIds.filter(
              (id) => id !== recording.questionId,
            ),
            referencesViewed: false,
          };
    tx.objectStore("recordings").delete(recording.id);
    tx.objectStore("progress").put(next);
    await done;
    return next;
  } catch (error) {
    try {
      tx.abort();
    } catch {
      /* An already aborted transaction has no changes to roll back. */
    }
    await done.catch(() => {});
    throw error;
  }
}
