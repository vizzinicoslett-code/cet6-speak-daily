import { defineConfig } from "@playwright/test";
const deployedURL = process.env.PLAYWRIGHT_BASE_URL;
export default defineConfig({
  testDir: "./tests",
  fullyParallel: false,
  workers: 1,
  timeout: 60000,
  use: {
    baseURL: deployedURL || "http://127.0.0.1:4178/cet6-speak-daily/",
    headless: true,
    viewport: { width: 1440, height: 1000 },
    launchOptions: {
      executablePath: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH,
      args: [
        "--use-fake-device-for-media-stream",
        "--use-fake-ui-for-media-stream",
      ],
    },
  },
  webServer: deployedURL ? undefined : {
    env: { BASE_PATH: '/cet6-speak-daily/' },
    command: "npm run preview -- --port 4178 --strictPort",
    url: "http://127.0.0.1:4178/cet6-speak-daily/",
    reuseExistingServer: false,
  },
  projects: [{ name: "chromium", use: { browserName: "chromium" } }],
});
