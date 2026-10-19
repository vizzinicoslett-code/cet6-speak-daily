export type Category =
  | "Campus"
  | "Technology"
  | "Education"
  | "Career"
  | "Society"
  | "Lifestyle"
  | "Environment";
export type TaskType = "quick" | "statement" | "discussion" | "final";
export interface Expression {
  en: string;
  zh: string;
  example: string;
}
export interface SentenceFrame {
  en: string;
  zh: string;
}
export interface ReferenceAnswer {
  paragraphs: string[];
  structure: string[];
  highlights: string[];
  alternatives?: { label: string; text: string }[];
}
export interface Question {
  id: string;
  type: TaskType;
  prompt: string;
  prepareSeconds: number;
  speakingSeconds: number;
  hints: string[];
  partner?: string;
  interaction?: string;
  reference: ReferenceAnswer;
}
export interface TrainingDay {
  id: string;
  day: number;
  topic: string;
  topicZh: string;
  category: Category;
  estimatedMinutes: number;
  focus: string;
  talkingPoints: { en: string; zh: string }[];
  expressions: Expression[];
  sentenceFrames: SentenceFrame[];
  quickResponses: Question[];
  personalStatement: Question;
  discussion: Question[];
  finalQuestion: Question;
  upgrades: { basic: string; better: string; zh: string }[];
}
export interface Recording {
  id: string;
  sessionId: string;
  date: string;
  dayId: string;
  questionId: string;
  taskType: TaskType;
  createdAt: string;
  duration: number;
  mimeType: string;
  audio: Blob;
}
export interface Reflection {
  checks: string[];
  note: string;
  updatedAt: string;
}
export interface DailyProgress {
  id: string;
  date: string;
  dayId: string;
  mode: "daily" | "practice";
  inputViewed: boolean;
  completedQuestionIds: string[];
  recordingAttempts?: {
    questionId: string;
    taskType: TaskType;
    createdAt: string;
    duration: number;
  }[];
  referencesViewed: boolean;
  step: number;
  status: "in-progress" | "completed";
  completedAt?: string;
  reflection: Reflection;
}
export interface Settings {
  id: "settings";
  startedOn: string;
  version: 1;
}
