import data from "./data/speakingMaterials.generated.json" with { type: "json" };
import type { GeneralExpressionGroup, SpeakingMaterial } from "./materialTypes";

// The importer validates sourceType and required fields before generating this file.
export const materials = data.materials as SpeakingMaterial[];
export const generalExpressions = data.generalExpressions as GeneralExpressionGroup[];
