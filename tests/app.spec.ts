import { test, expect, type Page } from "@playwright/test";
import type { DailyProgress } from "../src/types";
const app = "/cet6-speak-daily/";

async function storedProgress(page: Page): Promise<DailyProgress[]> {
  return page.evaluate(() => new Promise<DailyProgress[]>((resolve, reject) => {
    const request = indexedDB.open("cet6-speak-daily", 1);
    request.onerror = () => reject(request.error);
    request.onsuccess = () => {
      const db = request.result;
      const transaction = db.transaction("progress");
      const read = transaction.objectStore("progress").getAll();
      read.onsuccess = () => resolve(read.result);
      read.onerror = () => reject(read.error);
      transaction.oncomplete = () => db.close();
    };
  }));
}
test.beforeEach(async ({ page }) => {
  page.on('pageerror', error => console.error('Browser error:', error.message));
  await page.goto(app);
  await expect(
    page.getByRole("button", { name: "开始今日训练", exact: true }),
  ).toBeVisible();
});

test("first visit, complete course library, mobile layout, and hash refresh", async ({
  page,
}) => {
  await expect(page.getByText("DAY", { exact: false }).first()).toBeVisible();
  await page.getByRole("button", { name: "题库", exact: true }).first().click();
  await expect(page.locator(".library-card")).toHaveCount(35);
  await page.getByLabel("搜索主题").fill("independent");
  await expect(page.locator(".library-card")).toHaveCount(1);
  await page.reload();
  await expect(page.locator(".library-card")).toHaveCount(35);
  expect(page.url()).toContain("#/library");
  await page.setViewportSize({ width: 390, height: 844 });
  await expect(page.locator(".mobile-nav")).toBeVisible();
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
  await page.screenshot({
    path: "test-results/library-mobile.png",
    fullPage: true,
  });
});

test("cannot unlock answers or check in without saved recordings", async ({
  page,
}) => {
  await page.getByRole("button", { name: "开始今日训练", exact: true }).click();
  await page
    .getByRole("button", { name: "参考表达", exact: false })
    .first()
    .click();
  await expect(page.locator(".reference-card.is-locked")).toHaveCount(7);
  await expect(page.locator(".answer-paragraphs")).toHaveCount(0);
  await expect(
    page.getByRole("button", { name: "已阅读，进入回听复盘" }),
  ).toBeDisabled();
  await page.getByRole("button", { name: "今日打卡", exact: false }).click();
  await expect(
    page.getByRole("button", { name: "完成今日训练", exact: true }),
  ).toBeDisabled();
});

test("Day 1 through 35 render input and every speaking task", async ({ page }) => {
  test.setTimeout(120000);
  for (let index = 0; index < 35; index++) {
    await page.getByRole("button", { name: "题库", exact: true }).first().click();
    const card = page.locator(".library-card").nth(index);
    const topic = await card.locator("h2").innerText();
    await card.getByRole("button", { name: "开始练习" }).click();
    await expect(page.locator(".input-topic h2")).toHaveText(topic);
    for (const label of ["快速回答", "个人陈述", "讨论互动", "最终问答"]) {
      await page.locator(".training-sidebar").getByRole("button", { name: label, exact: false }).click();
      await expect(page.locator(".question-card h2")).toBeVisible();
      await expect(page.locator(".unlocked-reference")).toHaveCount(0);
    }
    await page.locator(".training-sidebar").getByRole("button", { name: "参考表达", exact: false }).click();
    await expect(page.locator(".reference-card.is-locked")).toHaveCount(7);
  }
});

test("microphone permission denial is recoverable and does not complete a question", async ({
  page,
}) => {
  await page.addInitScript(() => {
    navigator.mediaDevices.getUserMedia = () =>
      Promise.reject(new DOMException("Denied", "NotAllowedError"));
  });
  await page.reload();
  await page.getByRole("button", { name: "开始今日训练", exact: true }).click();
  await page.getByRole("button", { name: "输入完成，开始快速回答" }).click();
  await page.getByRole("button", { name: "开始回应", exact: true }).click();
  await expect(page.getByRole("alert")).toContainText("需要麦克风权限");
  await expect(page.locator(".saved-audio")).toHaveCount(0);
  await expect(
    page.getByRole("button", { name: "本项完成，继续" }),
  ).toBeDisabled();
});

test("unsupported recording and failed IndexedDB show helpful errors without a blank screen", async ({
  page,
}) => {
  await page.addInitScript(() => {
    Object.defineProperty(window, "MediaRecorder", { value: undefined });
  });
  await page.reload();
  await page.getByRole("button", { name: "开始今日训练", exact: true }).click();
  await page.getByRole("button", { name: "输入完成，开始快速回答" }).click();
  await page.getByRole("button", { name: "开始回应", exact: true }).click();
  await expect(page.getByRole("alert")).toContainText("不支持录音");
  await page.addInitScript(() => {
    Object.defineProperty(window, "indexedDB", { value: undefined });
  });
  await page.goto(app);
  await expect(page.getByRole("alert")).toContainText("IndexedDB");
  await expect(page.locator(".hero-card")).toBeVisible();
});

async function record(page: Page, prepare: number, speak: number, rerecord = false) {
  await page
    .getByRole("button", {
      name: rerecord ? "重新录制" : prepare === 60 ? "开始准备" : "开始回应",
      exact: true,
    })
    .click();
  await expect(page.locator(".timer-label")).toContainText("PREPARE");
  await page.clock.fastForward(prepare * 1000 + 200);
  await expect(page.locator(".timer-label")).toContainText("SPEAKING");
  // Native MediaRecorder uses a real fake microphone stream; give its encoder time to emit audio.
  await page.waitForTimeout(1100);
  await page.clock.fastForward(speak * 1000 + 1000);
  await expect(page.locator(".saved-audio")).toBeVisible();
  await expect(page.locator(".timer-label")).toContainText("FINISHED");
  await expect(page.locator(".unlocked-reference")).toBeVisible();
}

test("full day: native recorder, refresh recovery, references, reflection and check-in", async ({
  page,
  context,
}) => {
  await context.grantPermissions(["microphone"]);
  await page.clock.install();
  await page.getByRole("button", { name: "开始今日训练", exact: true }).click();
  await page.getByRole("button", { name: "输入完成，开始快速回答" }).click();
  await expect(page.locator(".unlocked-reference")).toHaveCount(0);
  await record(page, 5, 30);
  await page.locator(".unlocked-reference summary").click();
  await expect(page.locator(".unlocked-reference .answer-paragraphs")).toBeVisible();
  const audio = page.locator(".saved-audio audio");
  await expect.poll(() => audio.evaluate((element: HTMLAudioElement) => element.readyState)).toBeGreaterThanOrEqual(2);
  await audio.evaluate((element: HTMLAudioElement) => element.play());
  await expect.poll(() => audio.evaluate((element: HTMLAudioElement) => element.paused)).toBe(false);
  await audio.evaluate((element: HTMLAudioElement) => element.pause());
  await page.getByRole("button", { name: "参考表达", exact: false }).first().click();
  await expect(page.locator(".reference-card.is-locked")).toHaveCount(6);
  await expect(page.locator(".reference-card:not(.is-locked)")).toHaveCount(1);
  await expect(page.getByRole("button", { name: "已阅读，进入回听复盘" })).toBeDisabled();
  await page.getByRole("button", { name: "快速回答", exact: false }).first().click();
  await page.getByRole("button", { name: "问题 2", exact: false }).click();
  await expect(page.locator(".unlocked-reference")).toHaveCount(0);
  await record(page, 5, 30);
  await page.reload();
  await expect(page.getByText("已完成 2 / 7 项录音")).toBeVisible();
  await expect(page.locator(".saved-audio")).toBeVisible();
  await page.getByRole("button", { name: "本项完成，继续" }).click();
  await record(page, 60, 90);
  await page.getByRole("button", { name: "本项完成，继续" }).click();
  await record(page, 5, 35);
  await page.getByRole("button", { name: "回合 2", exact: false }).click();
  await record(page, 5, 35);
  await page.getByRole("button", { name: "回合 3", exact: false }).click();
  await record(page, 5, 35);
  await page.getByRole("button", { name: "本项完成，继续" }).click();
  await record(page, 5, 45);
  await page.getByRole("button", { name: "学习今日参考表达" }).click();
  await expect(page.locator(".reference-card.is-locked")).toHaveCount(0);
  await page.locator(".reference-card summary").nth(2).click();
  await expect(page.locator('.reference-card').nth(2).locator('.answer-paragraphs')).toBeVisible();
  await expect(page.locator('.reference-card').nth(0).locator('.answer-paragraphs')).not.toBeVisible();
  await page.getByRole("button", { name: "今日打卡", exact: false }).click();
  await expect(page.getByRole("button", { name: "完成今日训练", exact: true })).toBeDisabled();
  await page.getByRole("button", { name: "参考表达", exact: false }).first().click();
  await page.getByRole("button", { name: "已阅读，进入回听复盘" }).click();
  await page.getByLabel("今天整体比之前更顺").check();
  await page.getByLabel("今日一句复盘").fill("今天能用自己的校园经历举例了。");
  await page.getByRole("button", { name: "保存复盘，前往打卡" }).click();
  await page.getByRole("button", { name: "完成今日训练", exact: true }).click();
  await expect(page.getByText("今日已打卡")).toBeVisible();
  const completed = (await storedProgress(page))[0];
  expect(completed.completedQuestionIds).toHaveLength(7);
  expect(completed.recordingAttempts).toHaveLength(7);
  expect(completed.status).toBe("completed");
  await page.reload();
  await expect(page.getByText("今日已打卡")).toBeVisible();
  await page.getByRole("button", { name: "返回今日训练", exact: true }).click();
  await expect(page.locator(".hero-card")).toContainText("今日训练已完成");
  await page.getByRole("button", { name: "训练日历", exact: true }).first().click();
  await expect(page.getByRole("button", { name: `${completed.date} 已完成`, exact: true })).toHaveClass(/done/);
  await expect(page.locator(".calendar-detail")).toContainText("已完成");
  await page.getByRole("button", { name: "查看训练记录", exact: true }).click();
  await page.getByRole("button", { name: "快速回答", exact: false }).first().click();
  page.once("dialog", (dialog) => dialog.accept());
  await page.getByRole("button", { name: "删除本题录音", exact: true }).click();
  await expect(page.locator(".saved-audio")).toHaveCount(0);
  await page.reload();
  await expect(page.getByText("今日已打卡")).toBeVisible();
  const afterDelete = (await storedProgress(page))[0];
  expect(afterDelete.status).toBe("completed");
  expect(afterDelete.completedAt).toBe(completed.completedAt);
  expect(afterDelete.completedQuestionIds).toEqual(completed.completedQuestionIds);
  expect(afterDelete.recordingAttempts).toEqual(completed.recordingAttempts);
  await page.getByRole("button", { name: "训练日历", exact: true }).first().click();
  await expect(page.getByRole("button", { name: `${completed.date} 已完成`, exact: true })).toHaveClass(/done/);
  await page
    .getByRole("button", { name: "我的记录", exact: true })
    .first()
    .click();
  await expect(
    page.locator(".records-stats .white-card").first(),
  ).toContainText("1");
  await page.getByRole("button", { name: "复盘记录", exact: true }).click();
  await expect(page.getByText("今天能用自己的校园经历举例了。")).toBeVisible();
});

test("re-record and delete require confirmation; cancelled overwrite keeps original", async ({
  page,
  context,
}) => {
  await context.grantPermissions(["microphone"]);
  await page.clock.install();
  await page.getByRole("button", { name: "开始今日训练", exact: true }).click();
  await page.getByRole("button", { name: "输入完成，开始快速回答" }).click();
  await record(page, 5, 30);
  page.once("dialog", (dialog) => dialog.dismiss());
  await page.getByRole("button", { name: "重新录制", exact: true }).click();
  await expect(page.locator(".saved-audio")).toBeVisible();
  expect((await storedProgress(page))[0].recordingAttempts).toHaveLength(1);
  page.once("dialog", (dialog) => dialog.accept());
  await record(page, 5, 30, true);
  await expect(page.getByText("已完成 1 / 7 项录音")).toBeVisible();
  const rerecorded = (await storedProgress(page))[0];
  expect(rerecorded.completedQuestionIds).toHaveLength(1);
  expect(rerecorded.recordingAttempts).toHaveLength(2);
  page.once("dialog", (dialog) => dialog.accept());
  await page.getByRole("button", { name: "删除本题录音", exact: true }).click();
  await expect(page.locator(".saved-audio")).toHaveCount(0);
  await expect(page.locator(".unlocked-reference")).toHaveCount(0);
  await page.reload();
  await expect(page.getByText("已完成 0 / 7 项录音")).toBeVisible();
});

test("free practice is isolated and persists after refresh", async ({
  page,
  context,
}) => {
  await context.grantPermissions(["microphone"]);
  await page.clock.install();
  await page.getByRole("button", { name: "开始今日训练", exact: true }).click();
  await page.getByRole("button", { name: "输入完成，开始快速回答" }).click();
  await record(page, 5, 30);
  const daily = (await storedProgress(page)).find(p => p.mode === "daily");
  await page.getByRole("button", { name: "题库", exact: true }).first().click();
  await page
    .locator(".library-card")
    .nth(29)
    .getByRole("button", { name: "开始练习" })
    .click();
  await expect(page.getByText("自由练习 · 不计入正式打卡")).toBeVisible();
  await page.getByRole("button", { name: "输入完成，开始快速回答" }).click();
  await record(page, 5, 30);
  await page.reload();
  await expect(page.getByText("自由练习 · 不计入正式打卡")).toBeVisible();
  await expect(page.getByText("已完成 1 / 7 项录音")).toBeVisible();
  const sessions = await storedProgress(page);
  expect(sessions.find(p => p.mode === "daily")).toEqual(daily);
  expect(sessions.find(p => p.mode === "practice")?.completedQuestionIds).toHaveLength(1);
  await page.getByRole("button", { name: "今日打卡", exact: false }).click();
  await expect(page.getByRole("button", { name: "完成今日训练", exact: true })).toHaveCount(0);
  await page.getByRole("button", { name: "返回今日训练", exact: true }).click();
  await expect(page.locator(".day-counter b")).toHaveText("01");
});

test("manifest, service worker, course cache and offline hash navigation", async ({
  page,
  context,
  request,
}) => {
  const response = await request.get(`${app}manifest.webmanifest`);
  expect(response.ok()).toBe(true);
  const manifest = await response.json();
  expect(manifest.display).toBe("standalone");
  expect(manifest.start_url).toBe(app);
  expect(manifest.scope).toBe(app);
  expect(manifest.theme_color).toBe("#f6f7f9");
  expect(manifest.background_color).toBe("#f6f7f9");
  await expect(page.locator('meta[name="theme-color"]')).toHaveAttribute("content", manifest.theme_color);
  expect(manifest.icons).toHaveLength(3);
  for (const icon of manifest.icons) {
    const url = new URL(icon.src, new URL(`${app}manifest.webmanifest`, page.url()));
    expect(url.pathname.startsWith(app)).toBe(true);
    const response = await request.get(url.href);
    expect(response.ok()).toBe(true);
    expect(response.headers()["content-type"]).toContain("image/png");
    const data = await response.body();
    const [width, height] = icon.sizes.split("x").map(Number);
    expect(data.readUInt32BE(16)).toBe(width);
    expect(data.readUInt32BE(20)).toBe(height);
  }
  await page.evaluate(() => navigator.serviceWorker.ready);
  expect(await page.evaluate(async () => {
    const registration = await navigator.serviceWorker.ready;
    return { scope: new URL(registration.scope).pathname, worker: new URL(registration.active!.scriptURL).pathname };
  })).toEqual({ scope: app, worker: `${app}sw.js` });
  await page.reload();
  await page.waitForFunction(() => Boolean(navigator.serviceWorker.controller));
  await context.setOffline(true);
  await page.reload();
  await expect(
    page.getByRole("button", { name: "开始今日训练", exact: true }),
  ).toBeVisible();
  await page.getByRole("button", { name: "题库", exact: true }).first().click();
  await expect(page.locator(".library-card")).toHaveCount(35);
  await page.reload();
  await expect(page.locator(".library-card")).toHaveCount(35);
  await page.locator(".library-card").last().getByRole("button", { name: "开始练习" }).click();
  await expect(page.getByText("自由练习 · 不计入正式打卡")).toBeVisible();
  await page.reload();
  await expect(page.getByText("自由练习 · 不计入正式打卡")).toBeVisible();
  await expect(page.locator(".training-sidebar h2")).toHaveText("终身学习");
  await context.setOffline(false);
});

test("screenshots and overflow checks for all four primary mobile pages", async ({
  page,
}) => {
  await page.screenshot({
    path: "test-results/home-desktop.png",
    fullPage: true,
  });
  await page.setViewportSize({ width: 390, height: 844 });
  await page.screenshot({
    path: "test-results/home-mobile.png",
    fullPage: true,
  });
  for (const [label, filename] of [
    ["训练日历", "calendar"],
    ["题库", "library"],
    ["我的记录", "records"],
  ]) {
    await page
      .locator(".mobile-nav")
      .getByRole("button", { name: label, exact: true })
      .click();
    await expect(page.locator(filename==='calendar'?'.calendar-card':filename==='library'?'.library-card':'.records-stats').first()).toBeVisible();
    if(filename==='records')expect(await page.evaluate(()=>document.documentElement.scrollHeight)).toBeLessThan(2500);
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
    await page.screenshot({
      path: `test-results/${filename}-mobile.png`,
      fullPage: true,
    });
  }
  await page
    .locator(".mobile-nav")
    .getByRole("button", { name: "今日训练", exact: true })
    .click();
  await page.getByRole("button", { name: "开始今日训练", exact: true }).click();
  await page.getByRole("button", { name: "输入完成，开始快速回答" }).click();
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
  await page.screenshot({
    path: "test-results/training-mobile.png",
    fullPage: true,
  });
});
