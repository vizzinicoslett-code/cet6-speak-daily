import type { GeneralExpressionGroup, SpeakingMaterial } from "../src/materialTypes";

export interface SpeakingBatchData {
  materials: SpeakingMaterial[];
  generalExpressions: GeneralExpressionGroup[];
}
export function normalizeTitle(title: string): string;
export function parseSpeakingMarkdown(markdown: string, source?: string): SpeakingBatchData;
export function mergeSpeakingBatches(batches: { source: string; data: SpeakingBatchData }[]): SpeakingBatchData;
export function readSpeakingBatches(directory: string): { sources: string[]; data: SpeakingBatchData };
export function importSpeakingMaterials(directory: string, check?: boolean): { sources: string[]; data: SpeakingBatchData };
