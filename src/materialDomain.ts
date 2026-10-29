import type {
  MaterialProgress,
  MaterialStage,
  SpeakingMaterial,
} from "./materialTypes";

export function newMaterialProgress(
  material: SpeakingMaterial,
  now = new Date(),
): MaterialProgress {
  return {
    materialId: material.id,
    status: "new",
    mastery: 0,
    masteredChunkIds: [],
    currentChunkId: material.chunks[0]?.id,
    currentStage: 1,
    studyCount: 0,
    updatedAt: now.toISOString(),
  };
}

function checkMaterial(material: SpeakingMaterial, progress: MaterialProgress) {
  if (material.id !== progress.materialId)
    throw new Error("素材与学习记录不匹配。");
}

function touch(progress: MaterialProgress, now: Date): MaterialProgress {
  const timestamp = now.toISOString();
  return { ...progress, lastStudiedAt: timestamp, updatedAt: timestamp };
}

function chunkMastery(material: SpeakingMaterial, ids: string[]): number {
  const knownIds = new Set(ids);
  return material.chunks.length
    ? Math.round((material.chunks.filter(chunk => knownIds.has(chunk.id)).length / material.chunks.length) * 80)
    : 0;
}

export function beginMaterialStudy(
  material: SpeakingMaterial,
  progress: MaterialProgress,
  now = new Date(),
): MaterialProgress {
  checkMaterial(material, progress);
  const current = material.chunks.find(chunk => chunk.id === progress.currentChunkId);
  const resume = current && !progress.masteredChunkIds.includes(current.id)
    ? current
    : material.chunks.find(chunk => !progress.masteredChunkIds.includes(chunk.id)) || current || material.chunks[0];
  return touch({
    ...progress,
    status: progress.status === "new" ? "learning" : progress.status,
    currentChunkId: resume?.id,
    studyCount: progress.studyCount + 1,
  }, now);
}

export function updateMaterialPosition(
  progress: MaterialProgress,
  stage: MaterialStage,
  chunkId: string | undefined,
  now = new Date(),
): MaterialProgress {
  return touch({ ...progress, currentStage: stage, currentChunkId: chunkId }, now);
}

export function markMaterialChunk(
  material: SpeakingMaterial,
  progress: MaterialProgress,
  chunkId: string,
  mastered = true,
  now = new Date(),
): MaterialProgress {
  checkMaterial(material, progress);
  if (!material.chunks.some(chunk => chunk.id === chunkId))
    throw new Error("找不到这段素材。");
  const ids = new Set(progress.masteredChunkIds);
  if (mastered) ids.add(chunkId);
  else ids.delete(chunkId);
  const masteredChunkIds = material.chunks.filter(chunk => ids.has(chunk.id)).map(chunk => chunk.id);
  const allChunksDone = masteredChunkIds.length === material.chunks.length;
  return touch({
    ...progress,
    masteredChunkIds,
    status: progress.status === "mastered" ? "mastered" : allChunksDone ? "reviewing" : "learning",
    mastery: progress.status === "mastered" ? 100 : chunkMastery(material, masteredChunkIds),
  }, now);
}

export function rateMaterial(
  material: SpeakingMaterial,
  progress: MaterialProgress,
  status: "learning" | "reviewing" | "mastered",
  now = new Date(),
): MaterialProgress {
  checkMaterial(material, progress);
  return touch({
    ...progress,
    status,
    mastery: status === "mastered" ? 100 : chunkMastery(material, progress.masteredChunkIds),
  }, now);
}

export function recommendMaterials(
  materials: SpeakingMaterial[],
  progress: MaterialProgress[],
  limit = 3,
): SpeakingMaterial[] {
  const byId = new Map(progress.map(item => [item.materialId, item]));
  const rank = (item: MaterialProgress | undefined) =>
    item?.status === "learning" ? 0 : item?.status === "reviewing" ? 1 : item?.lastStudiedAt ? 2 : 3;
  return materials
    .filter(material => byId.get(material.id)?.status !== "mastered")
    .map((material, index) => ({ material, index, progress: byId.get(material.id) }))
    .sort((a, b) => rank(a.progress) - rank(b.progress)
      || (b.progress?.lastStudiedAt || "").localeCompare(a.progress?.lastStudiedAt || "")
      || a.index - b.index)
    .slice(0, Math.max(0, Math.floor(limit)))
    .map(item => item.material);
}
