export type MaterialSourceType =
  | "verified-recall"
  | "historical-topic"
  | "practice-material";

export interface MaterialChunk {
  id: string;
  cueZh: string;
  textEn: string;
  keywords: string[];
}

export interface ExpressionItem {
  id: string;
  expression: string;
  meaningZh?: string;
  example?: string;
}

export interface SpeakingMaterial {
  id: string;
  title: string;
  titleZh: string;
  category: string;
  tags: string[];
  questions: string[];
  fullAnswer: string;
  structureZh: string[];
  chunks: MaterialChunk[];
  reusableExpressions: ExpressionItem[];
  keywords?: string[];
  shortAnswer?: string;
  discussionExpressions?: string[];
  sourceType: MaterialSourceType;
  sourceLabel?: string;
}

export interface GeneralExpressionGroup {
  id: string;
  category: string;
  expressions: ExpressionItem[];
}

export type MaterialStatus = "new" | "learning" | "reviewing" | "mastered";
export type MaterialStage = 1 | 2 | 3 | 4;

export interface MaterialProgress {
  materialId: string;
  status: MaterialStatus;
  mastery: number;
  masteredChunkIds: string[];
  currentChunkId?: string;
  currentStage: MaterialStage;
  lastStudiedAt?: string;
  studyCount: number;
  updatedAt: string;
}

export interface FavoriteExpression {
  id: string;
  materialId?: string;
  expression: string;
  meaningZh?: string;
  example?: string;
  category: string;
  sourceTitle: string;
  createdAt: string;
}
