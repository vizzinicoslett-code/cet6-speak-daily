import "fake-indexeddb/auto";
import { beforeEach, describe, expect, it } from "vitest";
import {
  database,
  deleteRecording,
  loadProgress,
  loadRecordings,
  loadSettings,
  saveProgress,
  saveRecording,
  saveSettings,
} from "./storage";
import { newProgress, statistics } from "./domain";
import type { Recording } from "./types";
const p = () => newProgress("day01", "2026-10-18");
const recording = (sessionId: string): Recording => ({
  id: `${sessionId}:d01-q1`,
  sessionId,
  date: "2026-10-18",
  dayId: "day01",
  questionId: "d01-q1",
  taskType: "quick",
  createdAt: "2026-10-18T08:00:00Z",
  duration: 30.5,
  mimeType: "audio/webm",
  audio: new Blob(["test audio data"], { type: "audio/webm" }),
});
beforeEach(async () => {
  const db = await database();
  await new Promise<void>((resolve, reject) => {
    const tx = db.transaction(
      ["progress", "recordings", "settings"],
      "readwrite",
    );
    for (const s of ["progress", "recordings", "settings"])
      tx.objectStore(s).clear();
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
});
describe("IndexedDB persistence", () => {
  it("restores saved progress and check-in history", async () => {
    const progress = {
      ...p(),
      status: "completed" as const,
      completedAt: "2026-10-18T08:00:00Z",
    };
    await saveProgress(progress);
    expect(await loadProgress()).toEqual([progress]);
  });
  it("atomically saves audio, metadata, and first completion", async () => {
    const progress = p();
    const r = recording(progress.id);
    const next = await saveRecording(r, progress);
    const restored = (await loadRecordings())[0];
    expect(restored.audio).toBeInstanceOf(Blob);
    expect(await restored.audio.text()).toBe("test audio data");
    expect(restored).toMatchObject({
      date: r.date,
      dayId: r.dayId,
      questionId: r.questionId,
      taskType: "quick",
      createdAt: r.createdAt,
      duration: 30.5,
      mimeType: "audio/webm",
    });
    expect((await loadProgress())[0]).toEqual(next);
    expect(next.completedQuestionIds).toEqual(["d01-q1"]);
  });
  it("counts re-recording as another attempt while retaining one audio file and completion", async () => {
    const progress = p();
    const r = recording(progress.id);
    const next = await saveRecording(r, progress);
    const retried = await saveRecording(
      { ...r, duration: 29, createdAt: "2026-10-18T08:05:00Z" },
      progress,
    );
    expect(await loadRecordings()).toHaveLength(1);
    expect(retried.completedQuestionIds).toHaveLength(1);
    expect(retried.recordingAttempts).toEqual([
      {
        questionId: r.questionId,
        taskType: r.taskType,
        createdAt: r.createdAt,
        duration: 30.5,
      },
      {
        questionId: r.questionId,
        taskType: r.taskType,
        createdAt: "2026-10-18T08:05:00Z",
        duration: 29,
      },
    ]);
    expect(next.recordingAttempts).toHaveLength(1);
    expect(
      statistics(await loadProgress(), await loadRecordings()).recordings,
    ).toBe(2);
  });
  it("refuses invalid recordings without advancing progress", async () => {
    await expect(
      saveRecording({ ...recording(p().id), audio: new Blob() }, p()),
    ).rejects.toThrow();
    expect(await loadRecordings()).toHaveLength(0);
    expect(await loadProgress()).toHaveLength(0);
  });
  it("refuses mismatched session metadata", async () => {
    await expect(
      saveRecording(recording("other-session"), p()),
    ).rejects.toThrow("不匹配");
  });
  it("deleting unfinished audio relocks the task while retaining the successful attempt", async () => {
    const r = { ...recording(p().id), taskType: "statement" as const };
    const next = await saveRecording(r, p());
    await deleteRecording(r, { ...next, referencesViewed: true });
    expect(await loadRecordings()).toHaveLength(0);
    expect((await loadProgress())[0].completedQuestionIds).toHaveLength(0);
    expect((await loadProgress())[0].referencesViewed).toBe(false);
    expect(
      statistics(await loadProgress(), await loadRecordings()),
    ).toMatchObject({ recordings: 1, statements: 1 });
  });
  it("deleting historic audio preserves the formal check-in snapshot and attempt counts", async () => {
    const r = { ...recording(p().id), taskType: "discussion" as const };
    const next = await saveRecording(r, p());
    await deleteRecording(r, {
      ...next,
      status: "completed",
      completedAt: "2026-10-18T09:00:00Z",
    });
    expect((await loadProgress())[0].status).toBe("completed");
    expect((await loadProgress())[0].completedAt).toBe("2026-10-18T09:00:00Z");
    expect((await loadProgress())[0].completedQuestionIds).toEqual(["d01-q1"]);
    expect(
      statistics(await loadProgress(), await loadRecordings()),
    ).toMatchObject({ recordings: 1, discussions: 1, completed: 1 });
  });
  it("free practice stays isolated from the daily session", async () => {
    const daily = p();
    await saveProgress(daily);
    const practice = newProgress("day01", "2026-10-18", "practice");
    await saveRecording(recording(practice.id), practice);
    expect(
      (await loadProgress()).find((s) => s.id === daily.id)
        ?.completedQuestionIds,
    ).toHaveLength(0);
  });
  it("persists reflection and last active stage", async () => {
    const progress = {
      ...p(),
      step: 3,
      reflection: {
        checks: ["表达重复"],
        note: "下次举一个具体例子。",
        updatedAt: "2026-10-18T08:00:00Z",
      },
    };
    await saveProgress(progress);
    expect((await loadProgress())[0]).toEqual(progress);
  });
  it("preserves versioned settings", async () => {
    await saveSettings({ id: "settings", version: 1, startedOn: "2026-10-18" });
    expect((await loadSettings())?.startedOn).toBe("2026-10-18");
  });
  it("does not append an attempt or replace audio when its transaction fails", async () => {
    const r = recording(p().id);
    const next = await saveRecording(r, p());
    const uncloneable = { ...r, duration: 45, uncloneable: () => undefined };
    await expect(saveRecording(uncloneable, next)).rejects.toThrow();
    expect((await loadProgress())[0].recordingAttempts).toHaveLength(1);
    expect((await loadRecordings())[0].duration).toBe(30.5);
    expect(
      statistics(await loadProgress(), await loadRecordings()).recordings,
    ).toBe(1);
  });
  it.each(["re-record", "delete"] as const)(
    "preserves retained legacy attempts during %s migration",
    async (operation) => {
      const progress = { ...p(), recordingAttempts: undefined };
      const r = recording(progress.id);
      await saveProgress(progress);
      const db = await database();
      await new Promise<void>((resolve, reject) => {
        const tx = db.transaction("recordings", "readwrite");
        tx.objectStore("recordings").put(r);
        tx.oncomplete = () => resolve();
        tx.onabort = () => reject(tx.error);
      });
      if (operation === "re-record")
        await saveRecording({ ...r, duration: 25 }, progress);
      else await deleteRecording(r, progress);
      const restored = await loadProgress();
      expect(restored[0].recordingAttempts).toHaveLength(
        operation === "re-record" ? 2 : 1,
      );
      expect(statistics(restored, await loadRecordings()).recordings).toBe(
        operation === "re-record" ? 2 : 1,
      );
    },
  );
});
