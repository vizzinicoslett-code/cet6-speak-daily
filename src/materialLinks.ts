import { days } from "./data";
import { allQuestions } from "./domain";
import { materials } from "./materialData";

// Curated topic links use stable IDs. They do not claim the prompts are identical.
export const materialQuestionLinks: Record<string, string[]> = {
  "artificial-intelligence-and-jobs": ["d17-statement", "d17-final"],
  "the-importance-of-cooperation": ["d12-statement", "d12-discussion1"],
  "ways-to-be-trusted-by-others": ["d04-q1", "d04-statement"],
  "how-to-manage-stress": ["d03-statement", "d03-final"],
  smartphones: ["d14-statement", "d14-q1"],
  "the-role-of-the-university-library": ["d32-q1", "d32-statement"],
  "machine-translation": ["d17-q1", "d34-q2"],
  "loneliness-and-mental-health": ["d03-discussion2", "d04-q2"],
};

export function questionsForMaterial(materialId: string) {
  const ids = materialQuestionLinks[materialId] ?? [];
  return days.flatMap((day) =>
    allQuestions(day)
      .filter((question) => ids.includes(question.id))
      .map((question) => ({ day, question })),
  );
}

export const materialsForQuestion = (questionId: string) =>
  materials.filter((material) =>
    materialQuestionLinks[material.id]?.includes(questionId),
  );
