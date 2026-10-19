import type { DailyProgress, Question, Recording, TrainingDay } from "./types";
export const allQuestions = (day: TrainingDay): Question[] => [
  ...day.quickResponses,
  day.personalStatement,
  ...day.discussion,
  day.finalQuestion,
];
export function localDate(date = new Date()): string {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}
export function newProgress(
  dayId: string,
  date: string,
  mode: DailyProgress["mode"] = "daily",
): DailyProgress {
  return {
    id: mode === "daily" ? `daily-${date}` : `practice-${crypto.randomUUID()}`,
    date,
    dayId,
    mode,
    inputViewed: false,
    completedQuestionIds: [],
    recordingAttempts: [],
    referencesViewed: false,
    step: 0,
    status: "in-progress",
    reflection: { checks: [], note: "", updatedAt: new Date().toISOString() },
  };
}
export const taskDone = (questions: Question[], progress: DailyProgress) =>
  questions.every((q) => progress.completedQuestionIds.includes(q.id));
export const canComplete = (day: TrainingDay, p: DailyProgress) =>
  p.mode === "daily" &&
  p.inputViewed &&
  p.referencesViewed &&
  taskDone(allQuestions(day), p);
export function finishProgress(
  day: TrainingDay,
  p: DailyProgress,
): DailyProgress {
  if (!canComplete(day, p))
    throw new Error("请先完成所有录音任务，并查看今日参考表达。");
  return {
    ...p,
    status: "completed",
    completedAt: p.completedAt || new Date().toISOString(),
  };
}
export function validRecording(r: Recording): boolean {
  return (
    r.audio.size > 0 &&
    Number.isFinite(r.duration) &&
    r.duration >= 1 &&
    Boolean(
      r.date &&
      r.dayId &&
      r.sessionId &&
      r.questionId &&
      r.createdAt &&
      r.mimeType,
    )
  );
}
export function statistics(
  progress: DailyProgress[],
  recordings: Recording[],
  today = localDate(),
) {
  const completed = progress.filter(
    (p) => p.mode === "daily" && p.status === "completed",
  );
  const dates = [...new Set(completed.map((p) => p.date))].sort();
  let longest = 0,
    run = 0;
  let previous = "";
  for (const date of dates) {
    const before = new Date(`${date}T12:00:00`);
    before.setDate(before.getDate() - 1);
    run = localDate(before) === previous ? run + 1 : 1;
    longest = Math.max(longest, run);
    previous = date;
  }
  const cursor = new Date(`${today}T12:00:00`);
  if (!dates.includes(today)) cursor.setDate(cursor.getDate() - 1);
  let streak = 0;
  while (dates.includes(localDate(cursor))) {
    streak++;
    cursor.setDate(cursor.getDate() - 1);
  }
  const trackedSessions = new Set(
    progress.filter((p) => p.recordingAttempts !== undefined).map((p) => p.id),
  );
  const attempts = [
    ...progress.flatMap((p) => p.recordingAttempts ?? []),
    ...recordings.filter((r) => !trackedSessions.has(r.sessionId)),
  ];
  return {
    completed: completed.length,
    streak,
    longest,
    recordings: attempts.length,
    statements: attempts.filter((r) => r.taskType === "statement").length,
    discussions: attempts.filter((r) => r.taskType === "discussion").length,
  };
}
export type TimerPhase =
  "idle" | "prepare" | "speaking" | "saving" | "finished";
export function timerState(
  now: number,
  prepareEnd: number,
  speakingEnd: number,
): { phase: "prepare" | "speaking" | "finished"; remaining: number } {
  return now < prepareEnd
    ? { phase: "prepare", remaining: Math.ceil((prepareEnd - now) / 1000) }
    : now < speakingEnd
      ? { phase: "speaking", remaining: Math.ceil((speakingEnd - now) / 1000) }
      : { phase: "finished", remaining: 0 };
}
