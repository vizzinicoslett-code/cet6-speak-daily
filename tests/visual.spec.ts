import { expect, test, type Page } from "@playwright/test";
import day from "../src/data/days/day01";
import { allQuestions, newProgress } from "../src/domain";

const app = "/cet6-speak-daily/";

async function checkMobileLayout(page: Page, name: string, width: number) {
  await expect(page.locator(".mobile-nav")).toBeVisible();
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(width);
  // Inspect rendered English text as well as the page width: a clipped child can
  // otherwise hide an overflow without making the document wider.
  const overflow = await page.locator(".site-header .brand, .site-header .local-badge, main h1, main h2, main p, main summary, main mark").evaluateAll(elements =>
    elements.flatMap(element => {
      if (!element.getClientRects().length) return [];
      const range = document.createRange();
      range.selectNodeContents(element);
      return [...range.getClientRects()]
        .filter(rect => rect.width > 0 && (rect.left < -1 || rect.right > innerWidth + 1))
        .map(() => `${element.className || element.tagName}: ${element.textContent?.slice(0, 80)}`);
    }),
  );
  expect(overflow, `${name}: text stays inside the mobile viewport`).toEqual([]);
  await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight));
  const clearance = await page.evaluate(() => ({
    contentBottom: document.querySelector("main")!.getBoundingClientRect().bottom,
    navigationTop: document.querySelector(".mobile-nav")!.getBoundingClientRect().top,
  }));
  expect(clearance.contentBottom, `${name}: the end of the content can scroll above the navigation`).toBeLessThanOrEqual(clearance.navigationTop);
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.screenshot({ path: `test-results/visual-${width}-${name}.png`, fullPage: true });
}

async function checkTimer(page: Page) {
  const dimensions = await page.locator(".timer").evaluate(element => {
    const range = document.createRange();
    range.selectNodeContents(element);
    const text = range.getBoundingClientRect();
    const container = element.closest(".question-card")!.getBoundingClientRect();
    return { left: text.left, right: text.right, containerLeft: container.left, containerRight: container.right };
  });
  expect(dimensions.left).toBeGreaterThanOrEqual(dimensions.containerLeft);
  expect(dimensions.right).toBeLessThanOrEqual(dimensions.containerRight);
}

for (const width of [320, 390]) {
  test(`mobile visual acceptance at ${width}px: input, timer, discussion, references and history`, async ({ page, context }) => {
    await page.setViewportSize({ width, height: 844 });
    await page.goto(app);
    await expect(page.getByRole("button", { name: "开始今日训练", exact: true })).toBeVisible();
    await checkMobileLayout(page, "home", width);
    await page.getByRole("button", { name: "开始今日训练", exact: true }).click();
    await expect(page.locator(".input-topic")).toBeVisible();
    await checkMobileLayout(page, "input", width);
    await page.locator(".training-sidebar").getByRole("button", { name: "个人陈述", exact: false }).click();
    await expect(page.locator(".question-card h2")).toHaveText(day.personalStatement.prompt);
    await checkTimer(page);
    await context.grantPermissions(["microphone"]);
    await page.getByRole("button", { name: "开始准备", exact: true }).click();
    await expect(page.locator(".timer-label")).toContainText("PREPARE");
    await checkTimer(page);
    await checkMobileLayout(page, "statement-prepare", width);
    page.once("dialog", dialog => dialog.accept());
    await page.getByRole("button", { name: "取消本次训练", exact: true }).click();
    await expect(page.locator(".timer-label")).toContainText("READY");
    await page.locator(".training-sidebar").getByRole("button", { name: "讨论互动", exact: false }).click();
    await expect(page.locator(".partner")).toBeVisible();
    await checkTimer(page);
    await checkMobileLayout(page, "discussion", width);

    // This isolated fixture is only for inspecting unlocked answer layout.
    // The native MediaRecorder / unlock behavior is covered by app.spec.ts.
    const fixture = {
      ...newProgress(day.id, "2026-10-19", "practice"),
      id: `visual-reference-${width}`,
      completedQuestionIds: allQuestions(day).map(question => question.id),
      inputViewed: true,
      step: 5,
    };
    await page.evaluate(progress => new Promise<void>((resolve, reject) => {
      const request = indexedDB.open("cet6-speak-daily", 1);
      request.onerror = () => reject(request.error);
      request.onsuccess = () => {
        const db = request.result;
        const transaction = db.transaction("progress", "readwrite");
        transaction.objectStore("progress").put(progress);
        transaction.oncomplete = () => { db.close(); resolve(); };
        transaction.onerror = () => { db.close(); reject(transaction.error); };
      };
    }), fixture);
    await page.goto(`${app}#/train/${fixture.id}`);
    await page.reload();
    const reference = page.locator(".reference-card").nth(2);
    await expect(reference).not.toHaveClass(/is-locked/);
    await reference.locator("summary").click();
    await expect(reference.locator(".answer-paragraphs")).toBeVisible();
    expect(await reference.locator(".answer-paragraphs p").count()).toBeGreaterThan(1);
    const typography = await reference.locator(".answer-paragraphs p").first().evaluate(element => {
      const style = getComputedStyle(element);
      return { fontSize: parseFloat(style.fontSize), lineHeight: parseFloat(style.lineHeight), margin: parseFloat(style.marginBottom) };
    });
    expect(typography.fontSize).toBeGreaterThanOrEqual(14);
    expect(typography.lineHeight).toBeGreaterThanOrEqual(typography.fontSize * 1.7);
    expect(typography.margin).toBeGreaterThanOrEqual(12);
    await checkMobileLayout(page, "references", width);
    for (const [label, name, selector] of [
      ["训练日历", "calendar", ".calendar-card"],
      ["我的记录", "records", ".records-stats"],
    ]) {
      await page.locator(".mobile-nav").getByRole("button", { name: label, exact: true }).click();
      await expect(page.locator(selector)).toBeVisible();
      await checkMobileLayout(page, name, width);
    }
  });
}
