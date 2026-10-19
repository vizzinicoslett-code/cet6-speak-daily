import { describe, expect, it } from "vitest";
import {
  allQuestions,
  canComplete,
  finishProgress,
  localDate,
  newProgress,
  statistics,
  taskDone,
  timerState,
  validRecording,
} from "./domain";
import type { DailyProgress, Recording } from "./types";
import { days } from "./data";

function checkCourseText(value: unknown, path: string): void {
  if (typeof value === "string") {
    expect(value.trim(), path).not.toBe("");
    expect(value, path).not.toMatch(
      /\b(?:lorem\s+ipsum|topic\s+\d+|sample\s+(?:answer|sentence))\b/i,
    );
  } else if (value && typeof value === "object") {
    for (const [key, item] of Object.entries(value))
      checkCourseText(item, `${path}.${key}`);
  }
}

describe("35-day course integrity", () => {
  it("loads exactly 35 sequential days with stable unique IDs", () => {
    expect(days.map((d) => d.day)).toEqual(
      Array.from({ length: 35 }, (_, i) => i + 1),
    );
    expect(new Set(days.map((d) => d.id)).size).toBe(35);
  });
  it("has globally unique question IDs and covers all seven categories", () => {
    const ids = days.flatMap((d) => allQuestions(d).map((q) => q.id));
    expect(ids).toHaveLength(245);
    expect(new Set(ids).size).toBe(ids.length);
    expect(new Set(days.map((d) => d.category)).size).toBe(7);
  });
  for (let n = 1; n <= 35; n++)
    it(`Day ${n} contains complete, usable topic-specific material`, () => {
      const d = days[n - 1];
      expect(d).toBeDefined();
      expect(d.id).toBe(`day${String(n).padStart(2, "0")}`);
      checkCourseText(d, d.id);
      expect(allQuestions(d).map((q) => q.type)).toEqual([
        "quick",
        "quick",
        "statement",
        "discussion",
        "discussion",
        "discussion",
        "final",
      ]);
      expect(d.topic.length).toBeGreaterThan(3);
      expect(d.topicZh.length).toBeGreaterThan(3);
      expect(d.focus.length).toBeGreaterThan(3);
      expect(d.estimatedMinutes).toBeGreaterThanOrEqual(15);
      expect(d.talkingPoints).toHaveLength(3);
      expect(d.expressions.length).toBeGreaterThanOrEqual(5);
      expect(d.expressions.length).toBeLessThanOrEqual(8);
      expect(d.sentenceFrames.length).toBeGreaterThanOrEqual(3);
      expect(d.upgrades.length).toBeGreaterThanOrEqual(3);
      expect(d.quickResponses).toHaveLength(2);
      expect(d.discussion.length).toBeGreaterThanOrEqual(3);
      expect(d.personalStatement.prepareSeconds).toBe(60);
      expect(d.personalStatement.speakingSeconds).toBe(90);
      for (const upgrade of d.upgrades) {
        expect(upgrade.basic.trim().toLowerCase()).not.toBe(
          upgrade.better.trim().toLowerCase(),
        );
        expect(upgrade.zh).toMatch(/\p{Script=Han}/u);
      }
      for (const e of d.expressions) {
        expect(e.en).toBeTruthy();
        expect(e.zh).toBeTruthy();
        expect(e.example.length).toBeGreaterThan(15);
        expect(
          allQuestions(d)
            .flatMap((q) => q.reference.paragraphs)
            .join(" ")
            .toLowerCase(),
        ).toContain(e.en.toLowerCase());
      }
      for (const q of allQuestions(d)) {
        expect(q.id).toMatch(new RegExp(`^d${String(n).padStart(2, "0")}-`));
        expect(q.prompt.length).toBeGreaterThan(12);
        expect(q.prepareSeconds).toBeGreaterThanOrEqual(0);
        expect(q.speakingSeconds).toBeGreaterThan(0);
        expect(q.reference.paragraphs.length).toBeGreaterThan(0);
        expect(q.reference.structure.length).toBeGreaterThanOrEqual(2);
        for (const step of q.reference.structure)
          expect(step).toMatch(/\p{Script=Han}/u);
        expect(q.reference.highlights.length).toBeGreaterThan(0);
        const answer = q.reference.paragraphs.join(" ");
        const words = answer.trim().split(/\s+/).length;
        expect(answer).not.toMatch(
          /Lorem ipsum|Topic \d|Sample sentence|It is universally acknowledged/i,
        );
        expect(words).toBeGreaterThanOrEqual(
          q.type === "statement" ? 165 : q.type === "final" ? 80 : 55,
        );
        expect(words).toBeLessThanOrEqual(
          q.type === "statement" ? 200 : q.type === "final" ? 105 : 75,
        );
        for (const h of q.reference.highlights)
          expect(answer.toLowerCase()).toContain(h.toLowerCase());
        if (q.type === "discussion") {
          expect(q.partner).toBeTruthy();
          expect(q.interaction).toBeTruthy();
          expect(q.reference.alternatives?.length).toBeGreaterThanOrEqual(4);
        }
        if (q.type === "quick") {
          expect(q.prepareSeconds).toBe(5);
          expect(q.speakingSeconds).toBe(30);
        }
        if (n >= 29) expect(q.hints.length).toBeLessThanOrEqual(2);
      }
    });
  it("does not reuse reference paragraphs across days", () => {
    const statements = days.map((d) =>
      d.personalStatement.reference.paragraphs.join(" "),
    );
    expect(new Set(statements).size).toBe(35);
  });
});
const completeProgress = () => ({
  ...newProgress(days[0].id, "2026-10-18"),
  inputViewed: true,
  completedQuestionIds: allQuestions(days[0]).map((q) => q.id),
  referencesViewed: true,
});
describe("training completion and check-in", () => {
  it("cannot check in by opening the app", () => {
    expect(canComplete(days[0], newProgress(days[0].id, "2026-10-18"))).toBe(
      false,
    );
  });
  it("requires both quick responses", () => {
    const p = completeProgress();
    p.completedQuestionIds = p.completedQuestionIds.filter(
      (id) => id !== days[0].quickResponses[1].id,
    );
    expect(taskDone(days[0].quickResponses, p)).toBe(false);
    expect(canComplete(days[0], p)).toBe(false);
  });
  it("requires every discussion round", () => {
    const p = completeProgress();
    p.completedQuestionIds = p.completedQuestionIds.filter(
      (id) => id !== days[0].discussion[2].id,
    );
    expect(taskDone(days[0].discussion, p)).toBe(false);
    expect(canComplete(days[0], p)).toBe(false);
  });
  it("requires the final question", () => {
    const p = completeProgress();
    p.completedQuestionIds = p.completedQuestionIds.filter(
      (id) => id !== days[0].finalQuestion.id,
    );
    expect(canComplete(days[0], p)).toBe(false);
  });
  it("requires the personal statement", () => {
    const p = completeProgress();
    p.completedQuestionIds = p.completedQuestionIds.filter(
      (id) => id !== days[0].personalStatement.id,
    );
    expect(canComplete(days[0], p)).toBe(false);
  });
  it("requires input and reference viewing", () => {
    expect(
      canComplete(days[0], { ...completeProgress(), inputViewed: false }),
    ).toBe(false);
    expect(
      canComplete(days[0], { ...completeProgress(), referencesViewed: false }),
    ).toBe(false);
  });
  it("allows check-in only after every requirement", () => {
    expect(finishProgress(days[0], completeProgress()).status).toBe(
      "completed",
    );
    expect(() =>
      finishProgress(days[0], newProgress(days[0].id, "2026-10-18")),
    ).toThrow();
  });
  it("free practice never changes formal check-in eligibility", () => {
    expect(
      canComplete(days[0], { ...completeProgress(), mode: "practice" }),
    ).toBe(false);
  });
  it("keeps the original completion timestamp when revisited", () => {
    const p = finishProgress(days[0], completeProgress());
    expect(finishProgress(days[0], p).completedAt).toBe(p.completedAt);
  });
});
describe("timestamp timer", () => {
  it("starts in preparation", () =>
    expect(timerState(1000, 6000, 36000)).toEqual({
      phase: "prepare",
      remaining: 5,
    }));
  it("transitions directly to speaking at deadline", () =>
    expect(timerState(6000, 6000, 36000)).toEqual({
      phase: "speaking",
      remaining: 30,
    }));
  it("handles 60-second statement prep and 90-second speaking", () => {
    expect(timerState(59999, 60000, 150000)).toEqual({
      phase: "prepare",
      remaining: 1,
    });
    expect(timerState(60000, 60000, 150000)).toEqual({
      phase: "speaking",
      remaining: 90,
    });
  });
  it("does not drift when callbacks pause in a background tab", () =>
    expect(timerState(26001, 6000, 36000)).toEqual({
      phase: "speaking",
      remaining: 10,
    }));
  it("ends at zero without negative values", () => {
    expect(timerState(36000, 6000, 36000)).toEqual({
      phase: "finished",
      remaining: 0,
    });
    expect(timerState(50000, 6000, 36000).remaining).toBe(0);
  });
});
describe("streaks and local dates", () => {
  const done = (date: string): DailyProgress => ({
    ...completeProgress(),
    id: `daily-${date}`,
    date,
    status: "completed",
  });
  it("counts completed days only and ignores free practice", () => {
    expect(
      statistics(
        [done("2026-10-17"), { ...done("2026-10-18"), mode: "practice" }],
        [],
        "2026-10-18",
      ).completed,
    ).toBe(1);
  });
  it("keeps yesterday streak before today is finished", () =>
    expect(
      statistics([done("2026-10-16"), done("2026-10-17")], [], "2026-10-18")
        .streak,
    ).toBe(2));
  it("tracks longest streak across gaps without penalties", () => {
    const s = statistics(
      [
        done("2026-10-10"),
        done("2026-10-11"),
        done("2026-10-12"),
        done("2026-10-18"),
      ],
      [],
      "2026-10-18",
    );
    expect(s.longest).toBe(3);
    expect(s.streak).toBe(1);
  });
  it("uses local calendar dates", () =>
    expect(localDate(new Date(2026, 9, 18, 0, 1))).toBe("2026-10-18"));
  it("rejects empty recordings and incorrect durations", () => {
    const r: Recording = {
      id: "r",
      sessionId: "s",
      date: "2026-10-18",
      dayId: "day01",
      questionId: "d01-q1",
      taskType: "quick",
      createdAt: new Date().toISOString(),
      duration: 30,
      mimeType: "audio/webm",
      audio: new Blob(["audio"], { type: "audio/webm" }),
    };
    expect(validRecording(r)).toBe(true);
    expect(validRecording({ ...r, audio: new Blob() })).toBe(false);
    expect(validRecording({ ...r, duration: 0.2 })).toBe(false);
    expect(validRecording({ ...r, duration: NaN })).toBe(false);
  });
});

describe("cumulative recording statistics", () => {
  const attempt = (taskType: Recording["taskType"], questionId: string) => ({
    questionId,
    taskType,
    createdAt: "2026-10-18T08:00:00Z",
    duration: 30,
  });
  const audio = (
    sessionId: string,
    taskType: Recording["taskType"],
    questionId: string,
  ): Recording => ({
    id: `${sessionId}:${questionId}`,
    sessionId,
    date: "2026-10-18",
    dayId: "day01",
    questionId,
    taskType,
    createdAt: "2026-10-18T08:00:00Z",
    duration: 30,
    mimeType: "audio/webm",
    audio: new Blob(["audio"]),
  });
  it("counts successful attempts across daily and practice sessions without double counting retained audio", () => {
    const daily = {
      ...newProgress("day01", "2026-10-18"),
      recordingAttempts: [
        attempt("statement", "d01-statement"),
        attempt("statement", "d01-statement"),
        attempt("discussion", "d01-discussion1"),
      ],
    };
    const practice = {
      ...newProgress("day01", "2026-10-18", "practice"),
      recordingAttempts: [
        attempt("statement", "d01-statement"),
        attempt("discussion", "d01-discussion1"),
        attempt("discussion", "d01-discussion1"),
      ],
    };
    const s = statistics(
      [daily, practice],
      [
        audio(daily.id, "statement", "d01-statement"),
        audio(practice.id, "discussion", "d01-discussion1"),
      ],
    );
    expect(s).toMatchObject({
      recordings: 6,
      statements: 3,
      discussions: 3,
      completed: 0,
    });
  });
  it("keeps attempt totals when all audio has been removed", () => {
    const progress = {
      ...newProgress("day01", "2026-10-18"),
      recordingAttempts: [
        attempt("statement", "d01-statement"),
        attempt("discussion", "d01-discussion1"),
      ],
    };
    expect(statistics([progress], [])).toMatchObject({
      recordings: 2,
      statements: 1,
      discussions: 1,
    });
  });
  it("falls back to retained recordings only for sessions without attempt history", () => {
    const legacy = {
      ...newProgress("day01", "2026-10-18"),
      recordingAttempts: undefined,
    };
    const current = {
      ...newProgress("day01", "2026-10-18", "practice"),
      recordingAttempts: [
        attempt("statement", "d01-statement"),
        attempt("statement", "d01-statement"),
      ],
    };
    const s = statistics(
      [legacy, current],
      [
        audio(legacy.id, "discussion", "d01-discussion1"),
        audio(current.id, "statement", "d01-statement"),
      ],
    );
    expect(s).toMatchObject({ recordings: 3, statements: 2, discussions: 1 });
  });
  it("treats an empty attempt history as authoritative rather than as missing legacy data", () => {
    const progress = newProgress("day01", "2026-10-18");
    expect(
      statistics(
        [progress],
        [audio(progress.id, "statement", "d01-statement")],
      ),
    ).toMatchObject({ recordings: 0, statements: 0, discussions: 0 });
  });
});
