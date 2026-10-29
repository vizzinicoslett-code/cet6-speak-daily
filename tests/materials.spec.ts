import { expect, test, type Page } from "@playwright/test";
import { materials, generalExpressions } from "../src/materialData";
import { allQuestions, newProgress } from "../src/domain";
import day01 from "../src/data/days/day01";
import day17 from "../src/data/days/day17";
import type { MaterialProgress } from "../src/materialTypes";

const app = "/cet6-speak-daily/";
const ai = materials.find(material => material.id === "artificial-intelligence-and-jobs")!;
const paragraphs = (text: string) => text.split(/\n\s*\n/);

async function openMaterials(page: Page) {
  await page.goto(`${app}#/materials`);
  await expect(page.getByRole("heading", { name: "素材积累", exact: true })).toBeVisible();
  await expect(page.locator(".material-all-list .material-card")).toHaveCount(materials.length);
}

async function openAI(page: Page) {
  await openMaterials(page);
  const card = page.locator(".material-all-list .material-card").filter({ has: page.getByRole("heading", { name: ai.title, exact: true }) });
  await card.getByRole("button", { name: "查看素材", exact: true }).click();
  await expect(page.locator(".material-detail h1")).toHaveText(ai.title);
}

async function progressFor(page: Page, materialId = ai.id): Promise<MaterialProgress | undefined> {
  return page.evaluate(id => new Promise<MaterialProgress | undefined>((resolve, reject) => {
    const request = indexedDB.open("cet6-speak-daily");
    request.onerror = () => reject(request.error);
    request.onsuccess = () => {
      const db = request.result;
      const transaction = db.transaction("materialProgress");
      const read = transaction.objectStore("materialProgress").get(id);
      read.onsuccess = () => resolve(read.result);
      read.onerror = () => reject(read.error);
      transaction.oncomplete = () => db.close();
    };
  }), materialId);
}

async function checkLayout(page: Page, width: number, filename: string) {
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(width);
  const clippedText = await page.locator(".materials-page h1, .materials-page h2, .materials-page p, .materials-page li").evaluateAll(elements => elements.flatMap(element => {
    if (!element.getClientRects().length) return [];
    const range = document.createRange();
    range.selectNodeContents(element);
    return [...range.getClientRects()]
      .filter(rect => rect.width > 0 && (rect.left < -1 || rect.right > innerWidth + 1))
      .map(() => element.textContent?.slice(0, 100));
  }));
  expect(clippedText).toEqual([]);
  if (width <= 760) {
    await expect(page.locator(".mobile-nav button")).toHaveCount(5);
    const labels = await page.locator(".mobile-nav button").allTextContents();
    expect(labels).toEqual(["今日训练", "训练日历", "题库", "素材积累", "我的记录"]);
    await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight));
    const bottom = await page.evaluate(() => ({
      content: document.querySelector("main")!.getBoundingClientRect().bottom,
      navigation: document.querySelector(".mobile-nav")!.getBoundingClientRect().top,
    }));
    expect(bottom.content).toBeLessThanOrEqual(bottom.navigation);
    await page.evaluate(() => window.scrollTo(0, 0));
  }
  await page.screenshot({ path: `test-results/materials-${width}-${filename}.png`, fullPage: true });
}

test("materials are a fifth primary page with data-driven categories, search and status filters", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(app);
  const navigation = page.locator(".mobile-nav");
  for (const [label, selector] of [["今日训练", ".hero-card"], ["训练日历", ".calendar-card"], ["题库", ".library-card"], ["我的记录", ".records-stats"]]) {
    await navigation.getByRole("button", { name: label, exact: true }).click();
    await expect(page.locator(selector).first()).toBeVisible();
  }
  await navigation.getByRole("button", { name: "素材积累", exact: true }).click();
  await expect(page).toHaveURL(/#\/materials$/);
  await expect(page.locator(".material-all-list .material-card")).toHaveCount(materials.length);
  const categories = [...new Set(materials.map(material => material.category))];
  await expect(page.locator(".material-category-grid > button")).toHaveCount(categories.length);
  await expect(page.locator(".material-stats > div").filter({ hasText: "累计素材" }).locator("b")).toHaveText(String(materials.length));
  await expect(page.locator(".material-stats > div").filter({ hasText: "今日已学" }).locator("b")).toHaveText("0");
  for (const term of [ai.title, ai.titleZh, ai.tags[1], ai.questions[0], ai.category]) {
    await page.getByLabel("搜索素材", { exact: true }).fill(term);
    const expected = materials.filter(material => [material.title, material.titleZh, material.category, ...material.tags, ...material.questions, material.fullAnswer].join(" ").toLowerCase().includes(term.toLowerCase()));
    await expect(page.locator(".material-all-list .material-card")).toHaveCount(expected.length);
  }
  await page.getByLabel("搜索素材", { exact: true }).fill("");
  await page.getByLabel("素材分类", { exact: true }).selectOption(ai.category);
  await expect(page.locator(".material-all-list .material-card")).toHaveCount(materials.filter(material => material.category === ai.category).length);
  await page.getByLabel("素材分类", { exact: true }).selectOption("all");
  await page.getByLabel("学习状态", { exact: true }).selectOption("learning");
  await expect(page.locator(".material-all-list .material-card")).toHaveCount(0);
  await page.getByLabel("学习状态", { exact: true }).selectOption("new");
  await expect(page.locator(".material-all-list .material-card")).toHaveCount(materials.length);
});

test("all imported details preserve supplied paragraphs, chunks, sources and optional short answers", async ({ page }) => {
  const sourceLabels = { "verified-recall": "考后回忆", "historical-topic": "历年高频", "practice-material": "备考素材" };
  for (const material of materials) {
    await page.goto(`${app}#/materials/${material.id}`);
    const detail = page.locator(".material-detail");
    await expect(detail.locator("h1")).toHaveText(material.title);
    await expect(detail.locator(".material-detail-heading")).toContainText(material.titleZh);
    await expect(detail.locator(".material-detail-heading")).toContainText(sourceLabels[material.sourceType]);
    if (material.sourceType === "historical-topic") await expect(detail).not.toContainText(/20\d{2}\s*年\s*\d{1,2}\s*月\s*(?:真题|原题)/);
    expect(await detail.locator(".material-questions li").allTextContents()).toEqual(material.questions);
    expect(await detail.locator(".material-structure li").allTextContents()).toEqual(material.structureZh);
    expect(await detail.locator(".material-full-answer p").allTextContents()).toEqual(paragraphs(material.fullAnswer));
    const chunks = detail.locator(".material-chunk-list > article");
    await expect(chunks).toHaveCount(material.chunks.length);
    for (const [index, chunk] of material.chunks.entries()) {
      await expect(chunks.nth(index).locator(".recite-cue")).toHaveText(chunk.cueZh);
      expect(await chunks.nth(index).locator(".recite-keywords span").allTextContents()).toEqual(chunk.keywords);
      expect(await chunks.nth(index).locator(".material-prose p").allTextContents()).toEqual(paragraphs(chunk.textEn));
    }
    await expect(detail.locator(".general-expression")).toHaveCount(material.reusableExpressions.length);
    const shortHeading = detail.getByRole("heading", { name: "45 秒短答", exact: true });
    await expect(shortHeading).toHaveCount(material.shortAnswer ? 1 : 0);
    if (material.shortAnswer) expect(await shortHeading.locator("..").locator(".material-prose p").allTextContents()).toEqual(paragraphs(material.shortAnswer));
  }
});

test("four recitation stages progressively hide English, preserve chunk progress and resume after refresh", async ({ page }) => {
  await openAI(page);
  await page.getByRole("button", { name: "开始背诵", exact: true }).click();
  await expect(page).toHaveURL(new RegExp(`#/${"materials"}/${ai.id}/recite$`));
  await expect(page.locator(".recite-english")).toBeVisible();
  expect(await page.locator(".recite-english p").allTextContents()).toEqual(paragraphs(ai.chunks[0].textEn));
  await expect(page.locator(".recite-keywords")).toBeVisible();
  await page.getByRole("button", { name: "我熟悉了", exact: true }).click();
  await expect(page.locator(".recite-cue")).toHaveText(ai.chunks[1].cueZh);
  await expect.poll(async () => (await progressFor(page))?.masteredChunkIds).toEqual([ai.chunks[0].id]);
  const initial = (await progressFor(page))!;
  expect(initial.mastery).toBeGreaterThan(0);
  expect(initial.studyCount).toBe(1);
  await page.reload();
  await expect(page.locator(".recite-cue")).toHaveText(ai.chunks[1].cueZh);
  expect((await progressFor(page))?.studyCount).toBe(1);

  await page.getByRole("button", { name: "2 关键词提示", exact: true }).click();
  await expect(page.locator(".recite-english")).toHaveCount(0);
  await expect(page.locator(".recite-keywords")).toBeVisible();
  await page.getByRole("button", { name: "查看原文", exact: true }).click();
  expect(await page.locator(".recite-english p").allTextContents()).toEqual(paragraphs(ai.chunks[1].textEn));

  await page.getByRole("button", { name: "3 中文提示复述", exact: true }).click();
  await expect(page.locator(".recite-english")).toHaveCount(0);
  await expect(page.locator(".recite-keywords")).toHaveCount(0);
  await expect(page.locator(".recite-cue")).toHaveText(ai.chunks[1].cueZh);
  await page.getByRole("button", { name: "查看参考表达", exact: true }).click();
  expect(await page.locator(".recite-english p").allTextContents()).toEqual(paragraphs(ai.chunks[1].textEn));
  const afterReveal = (await progressFor(page))!;
  expect(afterReveal.masteredChunkIds).toEqual(initial.masteredChunkIds);
  expect(afterReveal.mastery).toBe(initial.mastery);
  await page.getByRole("button", { name: "返回素材详情", exact: true }).click();
  await expect(page.locator(".material-study-start")).toContainText("继续第 2 段");
  await page.getByRole("button", { name: "继续背诵", exact: true }).click();
  await expect(page.getByRole("button", { name: "3 中文提示复述", exact: true })).toHaveAttribute("aria-current", "step");
  await expect(page.locator(".recite-cue")).toHaveText(ai.chunks[1].cueZh);
  await expect(page.locator(".recite-english")).toHaveCount(0);

  await page.getByRole("button", { name: "4 整篇回忆", exact: true }).click();
  await expect(page.locator(".recite-chunk")).toHaveCount(0);
  await expect(page.locator(".recite-keywords")).toHaveCount(0);
  await expect(page.locator(".recite-english")).toHaveCount(0);
  expect(await page.locator(".recite-structure .material-structure li").allTextContents()).toEqual(ai.structureZh);
  await page.getByRole("button", { name: "查看全文", exact: true }).click();
  expect(await page.locator(".recite-english p").allTextContents()).toEqual(paragraphs(ai.fullAnswer));
  expect((await progressFor(page))?.masteredChunkIds).toEqual(initial.masteredChunkIds);
  await page.getByRole("button", { name: "基本会了", exact: true }).click();
  await expect.poll(async () => (await progressFor(page))?.status).toBe("reviewing");
  await page.reload();
  await expect(page.getByRole("button", { name: "4 整篇回忆", exact: true })).toHaveAttribute("aria-current", "step");
  await expect(page.locator(".recite-english")).toHaveCount(0);
  await page.getByRole("button", { name: "返回素材详情", exact: true }).click();
  await page.getByRole("button", { name: "继续背诵", exact: true }).click();
  await expect(page.getByRole("button", { name: "4 整篇回忆", exact: true })).toHaveAttribute("aria-current", "step");
  await page.getByRole("button", { name: "返回素材详情", exact: true }).click();
  const expression = ai.reusableExpressions[0];
  await page.getByRole("button", { name: `收藏表达 ${expression.expression}`, exact: true }).click();
  await page.getByRole("button", { name: "返回素材积累", exact: true }).click();
  await page.getByRole("button", { name: /我的表达/ }).click();
  await expect(page.getByRole("heading", { name: expression.expression, exact: true })).toBeVisible();
  await page.getByRole("button", { name: `来源：${ai.title}`, exact: true }).click();
  await page.locator(".material-related summary").click();
  await page.getByRole("button", { name: `Day 17 · ${day17.personalStatement.prompt}`, exact: true }).click();
  await expect(page.locator(".question-card h2")).toHaveText(day17.personalStatement.prompt);
  await page.locator(".related-materials").getByRole("button", { name: ai.title, exact: true }).click();
  await expect(page.locator(".material-detail h1")).toHaveText(ai.title);
  expect((await progressFor(page))?.currentStage).toBe(4);
  expect((await progressFor(page))?.masteredChunkIds).toEqual(initial.masteredChunkIds);
});

test("chunk mastery, recommendations, real overview counts and explicit whole-answer ratings stay consistent", async ({ page }) => {
  await openAI(page);
  await page.getByRole("button", { name: "开始背诵", exact: true }).click();
  for (const [index, chunk] of ai.chunks.entries()) {
    await page.locator(".recite-chunk-tabs").getByRole("button", { name: `第 ${index + 1} 段`, exact: true }).click();
    await expect(page.locator(".recite-cue")).toHaveText(chunk.cueZh);
    await page.getByRole("button", { name: "这一段已掌握", exact: true }).click();
    await expect.poll(async () => (await progressFor(page))?.masteredChunkIds.length).toBe(index + 1);
  }
  const reviewed = (await progressFor(page))!;
  expect(reviewed.status).toBe("reviewing");
  expect(reviewed.mastery).toBe(80);
  await page.getByRole("button", { name: "4 整篇回忆", exact: true }).click();
  await page.getByRole("button", { name: "已掌握", exact: true }).click();
  await expect.poll(async () => (await progressFor(page))?.status).toBe("mastered");
  expect((await progressFor(page))?.mastery).toBe(100);
  await page.getByRole("button", { name: "返回素材详情", exact: true }).click();
  await page.getByRole("button", { name: "继续背诵", exact: true }).click();
  expect((await progressFor(page))?.status).toBe("mastered");
  expect((await progressFor(page))?.mastery).toBe(100);
  await page.getByRole("button", { name: "这篇还不熟", exact: true }).click();
  await expect.poll(async () => (await progressFor(page))?.status).toBe("learning");
  expect((await progressFor(page))?.masteredChunkIds).toHaveLength(ai.chunks.length);
  expect((await progressFor(page))?.mastery).toBeLessThan(100);
  await page.getByRole("button", { name: "返回素材详情", exact: true }).click();
  await page.getByRole("button", { name: "返回素材积累", exact: true }).click();
  await expect(page.locator(".material-stats > div").filter({ hasText: "今日已学" }).locator("b")).toHaveText("1");
  await expect(page.locator(".material-stats > div").filter({ hasText: "学习中" }).locator("b")).toHaveText("1");
  const recommended = page.locator(".material-home-section").filter({ has: page.getByRole("heading", { name: "今日背诵", exact: true }) });
  await expect(recommended.locator(".material-card").first().locator("h3")).toHaveText(ai.title);
  await expect(recommended.locator(".material-card")).toHaveCount(Math.min(3, materials.length));
  await page.getByLabel("学习状态", { exact: true }).selectOption("learning");
  await expect(page.locator(".material-all-list .material-card")).toHaveCount(1);
});

test("favorite material expressions and general discussion phrases persist and can be removed", async ({ page }) => {
  await openAI(page);
  const expression = ai.reusableExpressions[0];
  await page.getByRole("button", { name: `收藏表达 ${expression.expression}`, exact: true }).click();
  await expect(page.getByRole("button", { name: `取消收藏表达 ${expression.expression}`, exact: true })).toHaveAttribute("aria-pressed", "true");
  await page.reload();
  await expect(page.getByRole("button", { name: `取消收藏表达 ${expression.expression}`, exact: true })).toBeVisible();
  await page.getByRole("button", { name: "返回素材积累", exact: true }).click();
  await page.getByRole("button", { name: /我的表达/ }).click();
  await expect(page.getByRole("heading", { name: expression.expression, exact: true })).toBeVisible();
  await expect(page.getByRole("button", { name: `来源：${ai.title}`, exact: true })).toBeVisible();
  await page.reload();
  await expect(page.getByRole("heading", { name: expression.expression, exact: true })).toBeVisible();
  await page.getByRole("button", { name: `取消收藏表达 ${expression.expression}`, exact: true }).click();
  await expect(page.getByRole("heading", { name: "还没有收藏表达", exact: true })).toBeVisible();
  await page.getByRole("button", { name: "返回素材积累", exact: true }).click();
  await page.getByRole("button", { name: "通用表达", exact: true }).click();
  await expect(page.locator(".general-expression")).toHaveCount(generalExpressions.reduce((count, group) => count + group.expressions.length, 0));
  for (const group of generalExpressions) {
    await expect(page.getByRole("heading", { name: group.category, exact: true })).toBeVisible();
  }
  const discussion = generalExpressions.find(group => group.category === "双人讨论互动")!;
  const phrase = discussion.expressions[0];
  await expect(page.getByText(phrase.expression, { exact: true })).toBeVisible();
  await page.getByRole("button", { name: `收藏表达 ${phrase.expression}`, exact: true }).click();
  await page.reload();
  await expect(page.getByRole("button", { name: `取消收藏表达 ${phrase.expression}`, exact: true })).toBeVisible();
  await page.getByRole("button", { name: "返回素材积累", exact: true }).click();
  await page.getByRole("button", { name: /我的表达/ }).click();
  await expect(page.getByRole("heading", { name: phrase.expression, exact: true })).toBeVisible();
});

test("materials link to existing question IDs and training links back without marking formal completion", async ({ page }) => {
  await openAI(page);
  const related = { day: day17, question: day17.personalStatement };
  await page.locator(".material-related summary").click();
  await page.getByRole("button", { name: `Day ${related.day.day} · ${related.question.prompt}`, exact: true }).click();
  await expect(page.locator(".question-card h2")).toHaveText(related.question.prompt);
  await expect(page.getByText("自由练习 · 不计入正式打卡")).toBeVisible();
  await expect(page.locator(".small-progress")).toContainText("0 / 7");
  await page.locator(".related-materials").getByRole("button", { name: ai.title, exact: true }).click();
  await expect(page.locator(".material-detail h1")).toHaveText(ai.title);
  await page.getByRole("button", { name: "题库", exact: true }).first().click();
  await expect(page.locator(".library-card")).toHaveCount(35);
});

test("a real version-1 database upgrades without losing historical progress, settings, audio or other stores", async ({ page }) => {
  await page.route("**/assets/*.js", route => route.abort());
  await page.goto(app);
  const legacy = {
    ...newProgress(day01.id, "2026-10-18"),
    inputViewed: true,
    completedQuestionIds: allQuestions(day01).map(question => question.id),
    referencesViewed: true,
    status: "completed" as const,
    completedAt: "2026-10-18T08:00:00Z",
    reflection: { checks: ["今天整体比之前更顺"], note: "升级前的复盘", updatedAt: "2026-10-18T08:00:00Z" },
  };
  await page.evaluate(progress => new Promise<void>((resolve, reject) => {
    const request = indexedDB.open("cet6-speak-daily", 1);
    request.onupgradeneeded = () => {
      for (const name of ["progress", "recordings", "settings", "legacyNotes"]) request.result.createObjectStore(name, { keyPath: "id" });
    };
    request.onerror = () => reject(request.error);
    request.onsuccess = () => {
      const db = request.result;
      const transaction = db.transaction(["progress", "recordings", "settings", "legacyNotes"], "readwrite");
      transaction.objectStore("progress").put(progress);
      transaction.objectStore("settings").put({ id: "settings", version: 1, startedOn: progress.date });
      transaction.objectStore("legacyNotes").put({ id: "note", text: "其他旧数据" });
      transaction.objectStore("recordings").put({ id: `${progress.id}:d01-q1`, sessionId: progress.id, date: progress.date, dayId: progress.dayId, questionId: "d01-q1", taskType: "quick", createdAt: progress.completedAt, duration: 30, mimeType: "audio/webm", audio: new Blob(["retained legacy audio"], { type: "audio/webm" }) });
      transaction.oncomplete = () => { db.close(); resolve(); };
      transaction.onerror = () => { db.close(); reject(transaction.error); };
    };
  }), legacy);
  await page.unroute("**/assets/*.js");
  await page.reload();
  await expect(page.locator(".hero-card")).toBeVisible();
  const restored = await page.evaluate(() => new Promise<{ version: number; stores: string[]; progress: unknown; settings: unknown; note: unknown; audio: string }>((resolve, reject) => {
    const request = indexedDB.open("cet6-speak-daily");
    request.onerror = () => reject(request.error);
    request.onsuccess = async () => {
      const db = request.result;
      const transaction = db.transaction(["progress", "recordings", "settings", "legacyNotes"]);
      const read = (store: string) => new Promise<unknown[]>(readResolve => { const readRequest = transaction.objectStore(store).getAll(); readRequest.onsuccess = () => readResolve(readRequest.result); });
      const [progress, recordings, settings, notes] = await Promise.all([read("progress"), read("recordings"), read("settings"), read("legacyNotes")]);
      const recording = recordings[0] as { audio: Blob };
      const result = { version: db.version, stores: [...db.objectStoreNames], progress: progress[0], settings: settings[0], note: notes[0], audio: await recording.audio.text() };
      db.close(); resolve(result);
    };
  }));
  expect(restored.version).toBe(2);
  expect(restored.stores).toEqual(expect.arrayContaining(["progress", "recordings", "settings", "legacyNotes", "materialProgress", "favoriteExpressions"]));
  expect(restored.progress).toEqual(legacy);
  expect(restored.settings).toEqual({ id: "settings", version: 1, startedOn: legacy.date });
  expect(restored.note).toEqual({ id: "note", text: "其他旧数据" });
  expect(restored.audio).toBe("retained legacy audio");
  await page.getByRole("button", { name: "素材积累", exact: true }).first().click();
  await expect(page.locator(".material-all-list .material-card")).toHaveCount(materials.length);
});

test("failed initial favorite reads cannot overwrite retained learning progress and recover on retry", async ({ page }) => {
  await openAI(page);
  await page.getByRole("button", { name: "开始背诵", exact: true }).click();
  await page.getByRole("button", { name: "我熟悉了", exact: true }).click();
  await expect(page.locator(".recite-cue")).toHaveText(ai.chunks[1].cueZh);
  await page.getByRole("button", { name: "3 中文提示复述", exact: true }).click();
  await expect(page.locator(".recite-english")).toHaveCount(0);
  const retained = await progressFor(page);
  await page.addInitScript(() => {
    const getAll = IDBObjectStore.prototype.getAll;
    IDBObjectStore.prototype.getAll = function (...args) {
      if (this.name === "favoriteExpressions" && sessionStorage.getItem("material-read-recovered") !== "yes")
        throw new DOMException("Temporary favorite read failure", "UnknownError");
      return getAll.apply(this, args);
    };
  });
  await page.reload();
  await expect(page.getByRole("heading", { name: "暂时无法读取素材学习记录" })).toBeVisible();
  await expect(page.locator(".recite-chunk")).toHaveCount(0);
  await expect(page.getByRole("button", { name: "开始背诵", exact: true })).toHaveCount(0);
  expect(await progressFor(page)).toEqual(retained);
  await page.evaluate(() => sessionStorage.setItem("material-read-recovered", "yes"));
  await page.getByRole("button", { name: "重新读取素材", exact: true }).click();
  await expect(page.locator(".recite-cue")).toHaveText(ai.chunks[1].cueZh);
  await expect(page.getByRole("button", { name: "3 中文提示复述", exact: true })).toHaveAttribute("aria-current", "step");
  expect(await progressFor(page)).toEqual(retained);
});

test("cached materials and recitation progress reopen while offline", async ({ page, context }) => {
  await openAI(page);
  await page.getByRole("button", { name: "开始背诵", exact: true }).click();
  await page.getByRole("button", { name: "我熟悉了", exact: true }).click();
  await expect(page.locator(".recite-cue")).toHaveText(ai.chunks[1].cueZh);
  await page.evaluate(() => navigator.serviceWorker.ready);
  await page.reload();
  await page.waitForFunction(() => Boolean(navigator.serviceWorker.controller));
  await context.setOffline(true);
  await page.reload();
  await expect(page.locator(".recite-cue")).toHaveText(ai.chunks[1].cueZh);
  await expect(page.locator(".recite-english")).toBeVisible();
  await page.getByRole("button", { name: "返回素材详情", exact: true }).click();
  await expect(page.locator(".material-detail h1")).toHaveText(ai.title);
  await context.setOffline(false);
});

for (const width of [320, 390, 1024]) {
  test(`materials reading and recitation remain readable at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 844 });
    await openMaterials(page);
    await checkLayout(page, width, "home");
    await page.locator(".material-all-list .material-card").filter({ has: page.getByRole("heading", { name: ai.title, exact: true }) }).getByRole("button", { name: "查看素材", exact: true }).click();
    await expect(page.locator(".material-detail h1")).toHaveText(ai.title);
    const typography = await page.locator(".material-full-answer p").first().evaluate(element => ({ fontSize: parseFloat(getComputedStyle(element).fontSize), lineHeight: parseFloat(getComputedStyle(element).lineHeight) }));
    expect(typography.fontSize).toBeGreaterThanOrEqual(15);
    expect(typography.lineHeight).toBeGreaterThanOrEqual(typography.fontSize * 1.7);
    await checkLayout(page, width, "detail");
    await page.getByRole("button", { name: "开始背诵", exact: true }).click();
    await expect(page.locator(".recite-chunk")).toBeVisible();
    await checkLayout(page, width, "stage-1");
    await page.getByRole("button", { name: "3 中文提示复述", exact: true }).click();
    await expect(page.locator(".recite-keywords")).toHaveCount(0);
    await expect(page.locator(".recite-english")).toHaveCount(0);
    await checkLayout(page, width, "stage-3");
    await page.getByRole("button", { name: "4 整篇回忆", exact: true }).click();
    await expect(page.locator(".recite-structure")).toBeVisible();
    await checkLayout(page, width, "stage-4");
  });
}
