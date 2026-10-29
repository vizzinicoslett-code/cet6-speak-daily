import { createHash } from "node:crypto";
import { mkdtempSync, readFileSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { basename, dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { afterEach, describe, expect, it } from "vitest";
import { importSpeakingMaterials, mergeSpeakingBatches, parseSpeakingMarkdown, readSpeakingBatches } from "../scripts/import-speaking-materials.mjs";
import { materials, generalExpressions } from "./materialData";

const root = fileURLToPath(new URL("..", import.meta.url));
const sourceFile = join(root, "CET6_speaking_materials_batch1.md");
const originalBytes = readFileSync(sourceFile);
const markdown = originalBytes.toString("utf8").replace(/\r\n?/g, "\n");
const sourceHash = createHash("sha256").update(originalBytes).digest("hex");
const temporaryDirectories: string[] = [];
const temporaryDirectory = () => {
  const directory = mkdtempSync(join(tmpdir(), "cet6-material-import-"));
  temporaryDirectories.push(directory);
  return directory;
};

afterEach(() => {
  // Only directories created by mkdtempSync above are removed.
  for (const directory of temporaryDirectories.splice(0)) {
    expect(dirname(resolve(directory))).toBe(resolve(tmpdir()));
    expect(basename(directory)).toMatch(/^cet6-material-import-/);
    rmSync(directory, { recursive: true, force: true });
  }
  expect(createHash("sha256").update(readFileSync(sourceFile)).digest("hex")).toBe(sourceHash);
});

const block = (title = "Another Topic", id?: string) => `# Extra material batch

## 01. ${title}

${id ? `- **id**：${id}\n` : ""}- **中文题目**：另一个话题
- **category**：学习与教育
- **sourceType**：practice-material
- **tags**：another, topic
- **questions**：
  - Why is this topic useful?

### 中文逻辑骨架

1. 先理解主题。
2. 再说出观点。

### 90 秒准备稿

Don't rewrite this sentence: "Exact" words matter.

The second paragraph stays separate.

### Chunks

#### Chunk 1
- **cueZh**：理解主题。
- **keywords**：exact / words
- **textEn**：Don't rewrite this sentence: "Exact" words matter.

### 可迁移表达

- exact words — 准确用词
`;

describe("speaking material Markdown import", () => {
  it("imports every numbered mother topic with complete metadata and stable unique IDs", () => {
    const titles = [...markdown.matchAll(/^## \d+\. (.+)$/gm)].map(match => match[1]);
    expect(materials.map(material => material.title)).toEqual(titles);
    expect(materials).toHaveLength(10);
    expect(new Set(materials.map(material => material.id)).size).toBe(materials.length);
    expect(materials.flatMap(material => material.chunks)).toHaveLength(60);
    expect(materials.flatMap(material => material.reusableExpressions)).toHaveLength(84);
    for (const material of materials) {
      expect(material.id).toMatch(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
      expect(material.titleZh).toMatch(/\p{Script=Han}/u);
      expect(material.category).toMatch(/\p{Script=Han}/u);
      expect(material.questions).toHaveLength(4);
      expect(material.tags.length).toBeGreaterThan(0);
      expect(material.structureZh).toHaveLength(5);
      expect(material.chunks).toHaveLength(6);
      for (const chunk of material.chunks) {
        expect(chunk.cueZh).toMatch(/\p{Script=Han}/u);
        expect(chunk.keywords.length).toBeGreaterThan(0);
        expect(chunk.textEn.length).toBeGreaterThan(0);
      }
    }
  });

  it("preserves every full answer, short answer, question and chunk exactly as the original Markdown", () => {
    const articleMatches = [...markdown.matchAll(/^## \d+\. (.+)\n([\s\S]*?)(?=^## |^# |$(?![\s\S]))/gm)];
    expect(articleMatches).toHaveLength(materials.length);
    for (const [index, match] of articleMatches.entries()) {
      const material = materials[index];
      const body = match[2];
      const fullAnswer = body.match(/### 90 秒准备稿\n([\s\S]*?)\n### Chunks/)![1].trim();
      expect(material.fullAnswer).toBe(fullAnswer);
      const shortAnswer = body.match(/### 45 秒短答\n([\s\S]*?)\n### 可迁移表达/)?.[1].trim();
      expect(material.shortAnswer).toBe(shortAnswer);
      const questionBlock = body.match(/- \*\*questions\*\*：\n([\s\S]*?)\n###/)![1];
      expect(material.questions).toEqual([...questionBlock.matchAll(/^ {2}- (.+)$/gm)].map(value => value[1]));
      const sourceChunks = [...body.matchAll(/^- \*\*textEn\*\*：(.+)$/gm)].map(value => value[1]);
      expect(material.chunks.map(chunk => chunk.textEn)).toEqual(sourceChunks);
      const sourceCues = [...body.matchAll(/^- \*\*cueZh\*\*：(.+)$/gm)].map(value => value[1]);
      expect(material.chunks.map(chunk => chunk.cueZh)).toEqual(sourceCues);
      const sourceKeywords = [...body.matchAll(/^- \*\*keywords\*\*：(.+)$/gm)].map(value => value[1].split(" / "));
      expect(material.chunks.map(chunk => chunk.keywords)).toEqual(sourceKeywords);
    }
  });

  it("keeps original source types without inventing examination dates or source labels", () => {
    const sourceTypes = [...markdown.matchAll(/^- \*\*sourceType\*\*：(.+)$/gm)].map(match => match[1]);
    expect(materials.map(material => material.sourceType)).toEqual(sourceTypes);
    expect(materials.filter(material => material.sourceType === "verified-recall")).toHaveLength(1);
    expect(materials.filter(material => material.sourceType === "historical-topic")).toHaveLength(9);
    for (const material of materials) expect(material.sourceLabel).toBeUndefined();
  });

  it("rejects unknown provenance rather than guessing a source type", () => {
    expect(() => parseSpeakingMarkdown(block().replace("practice-material", "unknown"))).toThrow("Unsupported sourceType");
  });

  it("imports all general expression categories and the original expressions", () => {
    const tail = markdown.split("# 通用表达库\n")[1].split("# 给 Codex 的导入约束")[0];
    const expected = [...tail.matchAll(/^## (.+)\n([\s\S]*?)(?=^## |$(?![\s\S]))/gm)].map(match => ({
      category: match[1],
      expressions: [...match[2].matchAll(/^- (.+)$/gm)].map(expression => expression[1]),
    }));
    expect(generalExpressions.map(group => ({ category: group.category, expressions: group.expressions.map(item => item.expression) }))).toEqual(expected);
    expect(generalExpressions).toHaveLength(8);
    expect(generalExpressions.flatMap(group => group.expressions)).toHaveLength(43);
    expect(generalExpressions.find(group => group.category === "双人讨论互动")?.expressions).toHaveLength(8);
  });

  it("retains optional translations and omits nonexistent short answers", () => {
    const parsed = parseSpeakingMarkdown(block()).materials[0];
    expect(parsed.shortAnswer).toBeUndefined();
    expect(parsed.reusableExpressions[0]).toMatchObject({ expression: "exact words", meaningZh: "准确用词" });
    expect(materials.filter(material => material.shortAnswer)).toHaveLength(4);
    expect(materials.find(material => material.id === "artificial-intelligence-and-jobs")?.reusableExpressions[0].meaningZh).toBeUndefined();
  });

  it("normalizes CRLF without changing English punctuation or paragraph boundaries", () => {
    const parsed = parseSpeakingMarkdown(block().replace(/\n/g, "\r\n")).materials[0];
    expect(parsed.fullAnswer).toBe(`Don't rewrite this sentence: "Exact" words matter.\n\nThe second paragraph stays separate.`);
    expect(parsed.chunks[0].textEn).toBe(`Don't rewrite this sentence: "Exact" words matter.`);
  });

  it("keeps stable material, chunk and expression IDs when batch order or item numbering changes", () => {
    const original = parseSpeakingMarkdown(block()).materials[0];
    const renumbered = parseSpeakingMarkdown(block().replace("## 01.", "## 35.")).materials[0];
    expect(renumbered).toEqual(original);
    const merged = mergeSpeakingBatches([
      { source: "batch2", data: parseSpeakingMarkdown(block()) },
      { source: "batch1", data: parseSpeakingMarkdown(markdown) },
    ]);
    expect(merged.materials.slice(1)).toEqual(materials);
  });

  it.each([
    ["missing sourceType", block().replace(/^- \*\*sourceType\*\*：.*\n/m, ""), "Missing sourceType"],
    ["missing Chinese cue", block().replace(/^- \*\*cueZh\*\*：.*\n/m, ""), "cueZh"],
    ["missing English chunk", block().replace(/^- \*\*textEn\*\*：.*\n/m, ""), "textEn"],
    ["missing questions", block().replace(/- \*\*questions\*\*：\n {2}- .*\n/, ""), "questions"],
    ["unexpected section", block().replace("### 可迁移表达", "### Unexpected material"), "Unknown section"],
    ["duplicate metadata", block().replace("- **category**", "- **tags**：duplicate\n- **category**"), "Duplicate metadata"],
  ])("reports %s rather than silently dropping malformed content", (_label, source, message) => {
    expect(() => parseSpeakingMarkdown(source)).toThrow(message);
  });

  it("rejects duplicate material IDs even when the titles differ", () => {
    const first = parseSpeakingMarkdown(block("First Title", "shared-id"));
    const second = parseSpeakingMarkdown(block("Different Title", "shared-id"));
    expect(() => mergeSpeakingBatches([{ source: "batch1", data: first }, { source: "batch2", data: second }])).toThrow(/Duplicate material id shared-id.*batch1/);
  });

  it("reports conflicting normalized titles without merging two versions", () => {
    const first = parseSpeakingMarkdown(block("Same Title", "first-id"));
    const second = parseSpeakingMarkdown(block("Same   Title!", "second-id"));
    expect(() => mergeSpeakingBatches([{ source: "batch1", data: first }, { source: "batch2", data: second }])).toThrow("Conflicting normalized title");
  });

  it("merges repeated general categories and deduplicates exact expressions without losing other categories", () => {
    const first = parseSpeakingMarkdown("# 通用表达库\n\n## 表达观点\n\n- In my opinion...\n");
    const second = parseSpeakingMarkdown("# 通用表达库\n\n## 表达观点\n\n- In my opinion...\n- I would say...\n\n## 双人讨论\n\n- In my opinion...\n");
    const merged = mergeSpeakingBatches([{ source: "batch1", data: first }, { source: "batch2", data: second }]);
    expect(merged.generalExpressions).toHaveLength(2);
    expect(merged.generalExpressions[0].expressions).toHaveLength(2);
    expect(merged.generalExpressions[1].expressions).toHaveLength(1);
    expect(merged.generalExpressions[0].expressions[0].id).not.toBe(merged.generalExpressions[1].expressions[0].id);
    const conflicting = parseSpeakingMarkdown("# 通用表达库\n\n## 表达观点\n\n- In my opinion... — 修改解释\n");
    expect(() => mergeSpeakingBatches([{ source: "batch1", data: first }, { source: "batch2", data: conflicting }])).toThrow("Conflicting general expression");
  });

  it("discovers batch2 and batch3 automatically, writes deterministic JSON, and checks for stale output", () => {
    const directory = temporaryDirectory();
    writeFileSync(join(directory, "CET6_speaking_materials_batch1.md"), markdown);
    writeFileSync(join(directory, "CET6_speaking_materials_batch2.md"), block("Batch Two"));
    writeFileSync(join(directory, "CET6_speaking_materials_batch3.md"), block("Batch Three"));
    writeFileSync(join(directory, "unrelated.md"), block("Do Not Import"));
    expect(readSpeakingBatches(directory).sources).toEqual(["CET6_speaking_materials_batch1.md", "CET6_speaking_materials_batch2.md", "CET6_speaking_materials_batch3.md"]);
    const imported = importSpeakingMaterials(directory);
    expect(imported.data.materials).toHaveLength(12);
    const output = join(directory, "src/data/speakingMaterials.generated.json");
    expect(JSON.parse(readFileSync(output, "utf8"))).toEqual(imported.data);
    expect(importSpeakingMaterials(directory, true).data).toEqual(imported.data);
    writeFileSync(output, "{}\n");
    expect(() => importSpeakingMaterials(directory, true)).toThrow("Generated materials are stale");
  });

  it("keeps the existing generated data untouched when a new batch conflicts", () => {
    const directory = temporaryDirectory();
    writeFileSync(join(directory, "CET6_speaking_materials_batch1.md"), markdown);
    importSpeakingMaterials(directory);
    const output = join(directory, "src/data/speakingMaterials.generated.json");
    const existing = readFileSync(output, "utf8");
    writeFileSync(join(directory, "CET6_speaking_materials_batch2.md"), block("Artificial Intelligence and Jobs"));
    expect(() => importSpeakingMaterials(directory)).toThrow("Duplicate material id");
    expect(readFileSync(output, "utf8")).toBe(existing);
  });

  it("keeps generated data synchronized with every current source batch and separates all user state", () => {
    const sourceFiles = readdirSync(root).filter(file => /^CET6_speaking_materials_batch.*\.md$/.test(file));
    expect(readSpeakingBatches(root).sources).toHaveLength(sourceFiles.length);
    expect(importSpeakingMaterials(root, true).data).toEqual({ materials, generalExpressions });
    for (const material of materials) {
      for (const key of ["mastered", "favorite", "progress", "mastery", "status", "currentStage"])
        expect(material).not.toHaveProperty(key);
    }
  });
});
