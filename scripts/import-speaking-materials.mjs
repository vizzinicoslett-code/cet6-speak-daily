// Markdown remains the source of truth. This importer only changes representation.
import { createHash } from "node:crypto";
import { readdirSync, readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

export const normalizeTitle = (title) => title.normalize("NFKC").toLowerCase().replace(/[^\p{Letter}\p{Number}]+/gu, " ").trim();
const slug = (title) => normalizeTitle(title).replace(/ +/g, "-");
const digest = (text) => createHash("sha256").update(text).digest("hex").slice(0, 16);
const sourceTypes = new Set(["verified-recall", "historical-topic", "practice-material"]);
const fail = (source, detail) => { throw new Error(`${source}: ${detail}`); };
const cleanSection = (text) => text.trim().replace(/\n\s*---\s*$/, "").trim();

function fields(text, source) {
  const matches = [...text.matchAll(/^-\s+\*\*([^*]+)\*\*\s*[：:]\s*(.*)$/gm)];
  const output = {};
  for (const [index, match] of matches.entries()) {
    const key = match[1].trim();
    if (key in output) fail(source, `Duplicate metadata field ${key}`);
    const end = matches[index + 1]?.index ?? text.length;
    const continuation = text.slice(match.index + match[0].length, end).trim();
    output[key] = [match[2].trim(), continuation].filter(Boolean).join("\n");
  }
  return output;
}

function required(value, source, label) {
  if (!value?.trim()) fail(source, `Missing ${label}`);
  return value.trim();
}

function list(text, source, label, ordered = false) {
  const lines = cleanSection(required(text, source, label)).split("\n").filter(line => line.trim());
  return lines.map(line => {
    const match = line.match(ordered ? /^\s*\d+[.)]\s+(.+)$/ : /^\s*-\s+(.+)$/);
    if (!match) fail(source, `Invalid ${label} list line: ${line}`);
    return match[1].trim();
  });
}

function expressions(text, source, prefix) {
  const result = [];
  const seen = new Map();
  for (const line of list(text, source, "expressions")) {
    const separator = line.indexOf(" — ");
    const expression = separator < 0 ? line : line.slice(0, separator).trim();
    const meaningZh = separator < 0 ? undefined : required(line.slice(separator + 3), source, "expression meaning");
    const item = { id: `${prefix}-${digest(expression)}`, expression, ...(meaningZh ? { meaningZh } : {}) };
    const key = normalizeTitle(expression);
    if (seen.has(key)) {
      if (JSON.stringify(seen.get(key)) !== JSON.stringify(item)) fail(source, `Conflicting expression: ${expression}`);
      continue;
    }
    seen.set(key, item);
    result.push(item);
  }
  return result;
}

function materialFromBlock(title, body, source) {
  const headers = [...body.matchAll(/^###\s+(.+)$/gm)];
  const metadata = fields(body.slice(0, headers[0]?.index ?? body.length), source);
  const allowedMetadata = new Set(["id", "中文题目", "category", "sourceType", "sourceLabel", "tags", "questions", "keywords"]);
  for (const key of Object.keys(metadata)) if (!allowedMetadata.has(key)) fail(source, `Unknown metadata ${key}`);
  const sections = {};
  for (const [index, header] of headers.entries()) {
    const name = header[1].trim();
    if (name in sections) fail(source, `Duplicate section ${name}`);
    sections[name] = cleanSection(body.slice(header.index + header[0].length, headers[index + 1]?.index ?? body.length));
  }
  const allowedSections = new Set(["中文逻辑骨架", "90 秒准备稿", "Chunks", "45 秒短答", "可迁移表达", "讨论表达"]);
  for (const name of Object.keys(sections)) if (!allowedSections.has(name)) fail(source, `Unknown section ${name}`);
  const id = metadata.id || slug(title);
  if (!/^[\p{Letter}\p{Number}]+(?:-[\p{Letter}\p{Number}]+)*$/u.test(id)) fail(source, `Invalid material id ${id}`);
  const sourceType = required(metadata.sourceType, source, "sourceType");
  if (!sourceTypes.has(sourceType)) fail(source, `Unsupported sourceType ${sourceType}`);
  const chunkText = required(sections.Chunks, source, "Chunks");
  const chunkHeaders = [...chunkText.matchAll(/^####\s+Chunk\s+(\d+)\s*$/gm)];
  if (!chunkHeaders.length) fail(source, "No chunks found");
  const chunkNumbers = new Set();
  const chunks = chunkHeaders.map((header, index) => {
    const number = Number(header[1]);
    if (chunkNumbers.has(number)) fail(source, `Duplicate Chunk ${number}`);
    chunkNumbers.add(number);
    const chunk = fields(chunkText.slice(header.index + header[0].length, chunkHeaders[index + 1]?.index ?? chunkText.length), source);
    for (const key of Object.keys(chunk)) if (!["cueZh", "keywords", "textEn"].includes(key)) fail(source, `Unknown chunk field ${key}`);
    return {
      id: `${id}-chunk-${number}`,
      cueZh: required(chunk.cueZh, source, `Chunk ${number} cueZh`),
      textEn: required(chunk.textEn, source, `Chunk ${number} textEn`),
      keywords: required(chunk.keywords, source, `Chunk ${number} keywords`).split(/\s*\/\s*/).map(keyword => required(keyword, source, "keyword")),
    };
  });
  return {
    id,
    title,
    titleZh: required(metadata["中文题目"], source, "中文题目"),
    category: required(metadata.category, source, "category"),
    sourceType,
    ...(metadata.sourceLabel ? { sourceLabel: metadata.sourceLabel } : {}),
    tags: required(metadata.tags, source, "tags").split(/\s*,\s*/).map(tag => required(tag, source, "tag")),
    questions: list(metadata.questions, source, "questions"),
    structureZh: list(sections["中文逻辑骨架"], source, "中文逻辑骨架", true),
    fullAnswer: required(sections["90 秒准备稿"], source, "90 秒准备稿"),
    chunks,
    ...(sections["45 秒短答"] ? { shortAnswer: sections["45 秒短答"] } : {}),
    reusableExpressions: expressions(sections["可迁移表达"], source, `${id}-expression`),
    ...(metadata.keywords ? { keywords: metadata.keywords.split(/\s*[/,]\s*/) } : {}),
    ...(sections["讨论表达"] ? { discussionExpressions: list(sections["讨论表达"], source, "讨论表达") } : {}),
  };
}

export function parseSpeakingMarkdown(markdown, source = "Markdown") {
  const text = markdown.replace(/^\uFEFF/, "").replace(/\r\n?/g, "\n");
  const topHeaders = [...text.matchAll(/^#{1,2}\s+(.+)$/gm)];
  const materials = [];
  const generalExpressions = [];
  let inGeneral = false;
  for (const [index, header] of topHeaders.entries()) {
    const level = header[0].startsWith("## ") ? 2 : 1;
    const title = header[1].trim();
    const body = text.slice(header.index + header[0].length, topHeaders[index + 1]?.index ?? text.length);
    if (level === 1) {
      inGeneral = title === "通用表达库";
      continue;
    }
    if (inGeneral) {
      const id = `general-${slug(title)}`;
      generalExpressions.push({ id, category: title, expressions: expressions(body, `${source} / ${title}`, id) });
    } else {
      const numbered = title.match(/^\d+[.)]\s+(.+)$/);
      if (!numbered) fail(source, `Expected numbered material heading: ${title}`);
      materials.push(materialFromBlock(numbered[1], body, `${source} / ${numbered[1]}`));
    }
  }
  if (!materials.length && !generalExpressions.length) fail(source, "No materials or general expressions found");
  return { materials, generalExpressions };
}

export function mergeSpeakingBatches(batches) {
  const materials = [];
  const generalExpressions = [];
  const ids = new Map();
  const titles = new Map();
  const categories = new Map();
  for (const { source, data } of batches) {
    for (const material of data.materials) {
      const normalized = normalizeTitle(material.title);
      if (ids.has(material.id)) fail(source, `Duplicate material id ${material.id} (also in ${ids.get(material.id)})`);
      if (titles.has(normalized)) fail(source, `Conflicting normalized title ${material.title} (also in ${titles.get(normalized)})`);
      ids.set(material.id, source);
      titles.set(normalized, source);
      materials.push(material);
    }
    for (const group of data.generalExpressions) {
      const previous = categories.get(group.category);
      if (!previous) {
        const copy = { ...group, expressions: [...group.expressions] };
        categories.set(group.category, copy);
        generalExpressions.push(copy);
      } else {
        for (const item of group.expressions) {
          const duplicate = previous.expressions.find(value => normalizeTitle(value.expression) === normalizeTitle(item.expression));
          if (duplicate && JSON.stringify(duplicate) !== JSON.stringify(item)) fail(source, `Conflicting general expression: ${item.expression}`);
          if (!duplicate) previous.expressions.push(item);
        }
      }
    }
  }
  return { materials, generalExpressions };
}

export function readSpeakingBatches(directory) {
  const sources = readdirSync(directory).filter(name => /^CET6_speaking_materials_batch.*\.md$/.test(name)).sort((left, right) => left.localeCompare(right, "en", { numeric: true }));
  if (!sources.length) fail(directory, "No CET6_speaking_materials_batch*.md files found");
  return {
    sources,
    data: mergeSpeakingBatches(sources.map(source => ({ source, data: parseSpeakingMarkdown(readFileSync(join(directory, source), "utf8"), source) }))),
  };
}

export function importSpeakingMaterials(directory, check = false) {
  const result = readSpeakingBatches(directory);
  const destination = join(directory, "src/data/speakingMaterials.generated.json");
  const json = `${JSON.stringify(result.data, null, 2)}\n`;
  if (check) {
    if (readFileSync(destination, "utf8").replace(/\r\n/g, "\n") !== json) fail(destination, "Generated materials are stale; run npm run import:materials");
  } else {
    mkdirSync(dirname(destination), { recursive: true });
    // Parsing and conflict validation finish before the existing output is touched.
    writeFileSync(destination, json, "utf8");
  }
  return result;
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    const root = fileURLToPath(new URL("..", import.meta.url));
    const { sources, data } = importSpeakingMaterials(root, process.argv.includes("--check"));
    console.log(`Materials: ${data.materials.length}; chunks: ${data.materials.reduce((sum, item) => sum + item.chunks.length, 0)}; general expressions: ${data.generalExpressions.reduce((sum, group) => sum + group.expressions.length, 0)} in ${data.generalExpressions.length} categories; batches: ${sources.join(", ")}`);
  } catch (error) {
    console.error(error instanceof Error ? error.message : "Material import failed");
    process.exitCode = 1;
  }
}
