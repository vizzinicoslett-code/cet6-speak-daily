import { describe, expect, it } from "vitest";
import {
  beginMaterialStudy,
  markMaterialChunk,
  newMaterialProgress,
  rateMaterial,
  recommendMaterials,
  updateMaterialPosition,
} from "./materialDomain";
import type { SpeakingMaterial } from "./materialTypes";

const now = new Date("2026-10-29T09:00:00Z");
const material = (id = "ai-jobs"): SpeakingMaterial => ({
  id,
  title: "Artificial Intelligence and Jobs",
  titleZh: "人工智能与就业",
  category: "科技与人工智能",
  tags: ["AI"],
  questions: ["How will AI influence future jobs?"],
  fullAnswer: "Original full answer.",
  structureZh: ["改变就业", "学习协作"],
  chunks: Array.from({ length: 4 }, (_, index) => ({
    id: `${id}-chunk-${index + 1}`,
    cueZh: `第${index + 1}段`,
    textEn: `Original chunk ${index + 1}.`,
    keywords: ["AI"],
  })),
  reusableExpressions: [],
  sourceType: "historical-topic",
});

describe("material study and active recall", () => {
  it("starts a new material at the first chunk without crediting any study", () => {
    expect(newMaterialProgress(material(), now)).toMatchObject({
      materialId: "ai-jobs", status: "new", mastery: 0,
      masteredChunkIds: [], currentChunkId: "ai-jobs-chunk-1",
      currentStage: 1, studyCount: 0,
    });
    expect(newMaterialProgress(material(), now).lastStudiedAt).toBeUndefined();
  });

  it("records the start of a study session and changes new to learning", () => {
    const next = beginMaterialStudy(material(), newMaterialProgress(material(), now), now);
    expect(next).toMatchObject({ status: "learning", studyCount: 1, mastery: 0, lastStudiedAt: now.toISOString() });
  });

  it("resumes at the first unfinished chunk when the saved chunk was mastered", () => {
    const original = newMaterialProgress(material(), now);
    const first = markMaterialChunk(material(), original, "ai-jobs-chunk-1", true, now);
    const second = markMaterialChunk(material(), first, "ai-jobs-chunk-2", true, now);
    const resumed = beginMaterialStudy(material(), second, now);
    expect(resumed.currentChunkId).toBe("ai-jobs-chunk-3");
    expect(resumed.masteredChunkIds).toEqual(["ai-jobs-chunk-1", "ai-jobs-chunk-2"]);
    expect(resumed.mastery).toBe(40);
  });

  it("preserves a deliberately selected unfinished chunk and recall stage on re-entry", () => {
    const progress = updateMaterialPosition(newMaterialProgress(material(), now), 3, "ai-jobs-chunk-4", now);
    expect(beginMaterialStudy(material(), progress, now)).toMatchObject({ currentStage: 3, currentChunkId: "ai-jobs-chunk-4" });
  });

  it("credits each chunk once and reserves full mastery for explicit whole-answer confirmation", () => {
    let progress = newMaterialProgress(material(), now);
    progress = markMaterialChunk(material(), progress, "ai-jobs-chunk-1", true, now);
    progress = markMaterialChunk(material(), progress, "ai-jobs-chunk-1", true, now);
    expect(progress.masteredChunkIds).toHaveLength(1);
    expect(progress.mastery).toBe(20);
    for (const chunk of material().chunks)
      progress = markMaterialChunk(material(), progress, chunk.id, true, now);
    expect(progress).toMatchObject({ status: "reviewing", mastery: 80 });
    expect(rateMaterial(material(), progress, "mastered", now)).toMatchObject({ status: "mastered", mastery: 100 });
  });

  it("lets a learner unmark a chunk without discarding the rest of their work", () => {
    let progress = newMaterialProgress(material(), now);
    for (const chunk of material().chunks)
      progress = markMaterialChunk(material(), progress, chunk.id, true, now);
    const next = markMaterialChunk(material(), progress, "ai-jobs-chunk-2", false, now);
    expect(next.masteredChunkIds).toHaveLength(3);
    expect(next).toMatchObject({ status: "learning", mastery: 60 });
  });

  it("allows moving back through all four stages without resetting progress or adding sessions", () => {
    const progress = markMaterialChunk(material(), newMaterialProgress(material(), now), "ai-jobs-chunk-1", true, now);
    for (const stage of [4, 3, 2, 1] as const) {
      const next = updateMaterialPosition(progress, stage, "ai-jobs-chunk-2", now);
      expect(next.masteredChunkIds).toEqual(progress.masteredChunkIds);
      expect(next.mastery).toBe(20);
      expect(next.studyCount).toBe(0);
    }
  });

  it("does not downgrade a mastered material merely because the learner revisits or practises it", () => {
    const mastered = rateMaterial(material(), newMaterialProgress(material(), now), "mastered", now);
    const revisited = beginMaterialStudy(material(), mastered, now);
    const practised = markMaterialChunk(material(), revisited, "ai-jobs-chunk-1", true, now);
    expect(practised).toMatchObject({ status: "mastered", mastery: 100, studyCount: 1 });
  });

  it("makes whole-answer self-assessments explicit and retains chunk history on downgrade", () => {
    const chunkDone = markMaterialChunk(material(), newMaterialProgress(material(), now), "ai-jobs-chunk-1", true, now);
    const mastered = rateMaterial(material(), chunkDone, "mastered", now);
    const reviewing = rateMaterial(material(), mastered, "reviewing", now);
    const learning = rateMaterial(material(), reviewing, "learning", now);
    expect(reviewing).toMatchObject({ status: "reviewing", mastery: 20 });
    expect(learning).toMatchObject({ status: "learning", mastery: 20, masteredChunkIds: ["ai-jobs-chunk-1"] });
  });

  it("does not mutate static material content or the prior saved progress", () => {
    const content = material();
    const originalText = JSON.stringify(content);
    const progress = newMaterialProgress(content, now);
    markMaterialChunk(content, progress, content.chunks[0].id, true, now);
    expect(progress.status).toBe("new");
    expect(progress.masteredChunkIds).toEqual([]);
    expect(JSON.stringify(content)).toBe(originalText);
  });

  it("rejects cross-material writes and unknown chunks", () => {
    const progress = newMaterialProgress(material(), now);
    expect(() => beginMaterialStudy(material("other"), progress, now)).toThrow("不匹配");
    expect(() => markMaterialChunk(material(), progress, "missing", true, now)).toThrow("找不到");
    expect(() => rateMaterial(material("other"), progress, "mastered", now)).toThrow("不匹配");
  });
});

describe("simple daily material recommendations", () => {
  it("prioritizes learning, reviewing, recently studied and finally new content", () => {
    const materials = ["new", "recent", "reviewing", "learning", "mastered"].map(material);
    const progress = [
      { ...newMaterialProgress(materials[1], now), lastStudiedAt: now.toISOString() },
      { ...newMaterialProgress(materials[2], now), status: "reviewing" as const },
      { ...newMaterialProgress(materials[3], now), status: "learning" as const },
      { ...newMaterialProgress(materials[4], now), status: "mastered" as const, mastery: 100 },
    ];
    expect(recommendMaterials(materials, progress).map(item => item.id)).toEqual(["learning", "reviewing", "recent"]);
    expect(recommendMaterials(materials, progress, 4).map(item => item.id)).toEqual(["learning", "reviewing", "recent", "new"]);
  });

  it("chooses the most recently studied material within a priority without inventing data", () => {
    const materials = [material("earlier"), material("recent"), material("new")];
    const progress = materials.slice(0, 2).map((item, index) => ({
      ...newMaterialProgress(item, now),
      status: "learning" as const,
      lastStudiedAt: `2026-10-${28 + index}T09:00:00Z`,
    }));
    expect(recommendMaterials(materials, progress, 2).map(item => item.id)).toEqual(["recent", "earlier"]);
    expect(progress.map(item => item.studyCount)).toEqual([0, 0]);
  });

  it("returns no compulsory work when all materials are mastered", () => {
    const materials = [material()];
    const progress = [rateMaterial(materials[0], newMaterialProgress(materials[0], now), "mastered", now)];
    expect(recommendMaterials(materials, progress)).toEqual([]);
    expect(recommendMaterials(materials, [], 0)).toEqual([]);
  });
});
