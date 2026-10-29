import { IDBFactory } from "fake-indexeddb";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import type { FavoriteExpression, MaterialProgress } from "./materialTypes";

const name = "cet6-speak-daily";
const progress: MaterialProgress = {
  materialId: "artificial-intelligence-and-jobs",
  status: "learning",
  mastery: 40,
  masteredChunkIds: ["chunk-1", "chunk-2", "chunk-3"],
  currentChunkId: "chunk-4",
  currentStage: 3,
  lastStudiedAt: "2026-10-29T09:00:00Z",
  studyCount: 2,
  updatedAt: "2026-10-29T09:00:00Z",
};
const expression: FavoriteExpression = {
  id: "ai-jobs-expression-1",
  materialId: progress.materialId,
  expression: "the real challenge is whether...",
  category: "科技与人工智能",
  sourceTitle: "Artificial Intelligence and Jobs",
  createdAt: "2026-10-29T09:00:00Z",
};
const connections: IDBDatabase[] = [];

beforeEach(() => {
  vi.resetModules();
  vi.stubGlobal("indexedDB", new IDBFactory());
});
afterEach(() => {
  for (const db of connections.splice(0)) db.close();
  vi.unstubAllGlobals();
});

async function storage() {
  const module = await import("./storage");
  connections.push(await module.database());
  return module;
}

async function seedLegacyDatabase() {
  const oldProgress = {
    id: "daily-2026-10-28", date: "2026-10-28", dayId: "day01", mode: "daily",
    status: "completed", completedAt: "2026-10-28T09:00:00Z",
    inputViewed: true, referencesViewed: true, step: 7,
    completedQuestionIds: ["d01-q1", "d01-q2"],
    reflection: { checks: ["今天整体比之前更顺"], note: "历史复盘保留", updatedAt: "2026-10-28T09:00:00Z" },
    recordingAttempts: [{ questionId: "d01-q1", taskType: "quick", duration: 30.5, createdAt: "2026-10-28T08:00:00Z" }],
  };
  const recording = {
    id: "daily-2026-10-28:d01-q1", sessionId: oldProgress.id, date: oldProgress.date,
    dayId: "day01", questionId: "d01-q1", taskType: "quick", createdAt: "2026-10-28T08:00:00Z",
    duration: 30.5, mimeType: "audio/webm", audio: new Blob([new Uint8Array([0, 31, 255, 127])], { type: "audio/webm" }),
  };
  const settings = { id: "settings", version: 1, startedOn: "2026-10-18", futureProperty: "keep me" };
  await new Promise<void>((resolve, reject) => {
    const request = indexedDB.open(name, 1);
    request.onupgradeneeded = () => {
      for (const store of ["progress", "recordings", "settings", "legacyOther"])
        request.result.createObjectStore(store, { keyPath: "id" });
    };
    request.onerror = () => reject(request.error);
    request.onsuccess = () => {
      const db = request.result;
      const transaction = db.transaction(["progress", "recordings", "settings", "legacyOther"], "readwrite");
      transaction.objectStore("progress").put(oldProgress);
      transaction.objectStore("recordings").put(recording);
      transaction.objectStore("settings").put(settings);
      transaction.objectStore("legacyOther").put({ id: "unrelated", value: "do not touch" });
      transaction.oncomplete = () => { db.close(); resolve(); };
      transaction.onerror = () => { db.close(); reject(transaction.error); };
    };
  });
  return { oldProgress, recording, settings };
}

describe("additive IndexedDB v1 to v2 migration", () => {
  it("preserves completed training, audio bytes, settings and unknown old stores", async () => {
    const legacy = await seedLegacyDatabase();
    const module = await storage();
    const db = await module.database();
    expect(db.version).toBe(2);
    expect([...db.objectStoreNames]).toEqual([
      "favoriteExpressions", "legacyOther", "materialProgress", "progress", "recordings", "settings",
    ]);
    expect(await module.loadProgress()).toEqual([legacy.oldProgress]);
    const recordings = await module.loadRecordings();
    expect(recordings).toHaveLength(1);
    expect(recordings[0]).toMatchObject(legacy.recording);
    expect(new Uint8Array(await recordings[0].audio.arrayBuffer())).toEqual(new Uint8Array([0, 31, 255, 127]));
    expect(await module.loadSettings()).toEqual(legacy.settings);
    const other = await new Promise(resolve => {
      const request = db.transaction("legacyOther").objectStore("legacyOther").get("unrelated");
      request.onsuccess = () => resolve(request.result);
    });
    expect(other).toEqual({ id: "unrelated", value: "do not touch" });
    expect(await module.loadMaterialProgress()).toEqual([]);
    expect(await module.loadFavoriteExpressions()).toEqual([]);
  });

  it("uses separate stores and stable keys for progress and expression favorites", async () => {
    const module = await storage();
    const db = await module.database();
    expect(db.transaction("materialProgress").objectStore("materialProgress").keyPath).toBe("materialId");
    expect(db.transaction("favoriteExpressions").objectStore("favoriteExpressions").keyPath).toBe("id");
    await module.saveMaterialProgress(progress);
    await module.saveFavoriteExpression(expression);
    await module.saveFavoriteExpression(expression);
    expect(await module.loadMaterialProgress()).toEqual([progress]);
    expect(await module.loadFavoriteExpressions()).toEqual([expression]);
    expect(await module.loadProgress()).toEqual([]);
    expect(await module.loadRecordings()).toEqual([]);
  });

  it("restores the active chunk, recall stage and favorites after a fresh module load", async () => {
    const first = await storage();
    await first.saveMaterialProgress(progress);
    await first.saveFavoriteExpression(expression);
    (await first.database()).close();
    vi.resetModules();
    const restored = await storage();
    expect(await restored.loadMaterialProgress()).toEqual([progress]);
    expect(await restored.loadFavoriteExpressions()).toEqual([expression]);
  });

  it("keeps formal data unchanged while material progress and favorites are updated or removed", async () => {
    const legacy = await seedLegacyDatabase();
    const module = await storage();
    await module.saveMaterialProgress(progress);
    await module.saveMaterialProgress({ ...progress, mastery: 100, status: "mastered" });
    await module.saveFavoriteExpression(expression);
    await module.removeFavoriteExpression(expression.id);
    expect(await module.loadFavoriteExpressions()).toEqual([]);
    expect(await module.loadMaterialProgress()).toHaveLength(1);
    expect(await module.loadProgress()).toEqual([legacy.oldProgress]);
    expect(await module.loadSettings()).toEqual(legacy.settings);
    expect(new Uint8Array(await (await module.loadRecordings())[0].audio.arrayBuffer())).toEqual(new Uint8Array([0, 31, 255, 127]));
  });
});
