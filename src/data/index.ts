import type { TrainingDay } from "../types";
const modules = import.meta.glob<{ default: TrainingDay }>("./days/day*.ts", {
  eager: true,
});
export const days = Object.values(modules)
  .map((module) => module.default)
  .sort((a, b) => a.day - b.day);
