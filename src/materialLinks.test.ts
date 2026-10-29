import { describe, expect, it } from "vitest";
import { materials } from "./materialData";
import {
  materialQuestionLinks,
  materialsForQuestion,
  questionsForMaterial,
} from "./materialLinks";

describe("explicit material and question links", () => {
  it("resolves every curated ID in both directions without adding course questions", () => {
    for (const [materialId, questionIds] of Object.entries(
      materialQuestionLinks,
    )) {
      expect(materials.some((material) => material.id === materialId)).toBe(
        true,
      );
      const related = questionsForMaterial(materialId);
      expect(new Set(related.map((item) => item.question.id))).toEqual(
        new Set(questionIds),
      );
      for (const { question } of related)
        expect(
          materialsForQuestion(question.id).map((item) => item.id),
        ).toContain(materialId);
    }
  });
  it("keeps unmatched materials and questions unlinked", () => {
    expect(questionsForMaterial("chinese-brands")).toEqual([]);
    expect(materialsForQuestion("d01-q1")).toEqual([]);
  });
});
