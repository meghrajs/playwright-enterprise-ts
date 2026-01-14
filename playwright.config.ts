import { defineConfig, devices } from "@playwright/test";

const BASE_URL = process.env.BASE_URL || "https://playwright.dev";
const API_BASE_URL = process.env.API_BASE_URL || "https://reqres.in";

export default defineConfig({
  testDir: "./tests",
  timeout: 30_000,
  expect: { timeout: 10_000 },

  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : undefined,

  reporter: [["html", { open: "never" }], ["list"]],

  use: {
    baseURL: BASE_URL,
    actionTimeout: 10_000,
    navigationTimeout: 20_000,

    trace: "retain-on-failure",
    screenshot: "only-on-failure",
    video: "retain-on-failure",

    extraHTTPHeaders: {
      "x-framework": "playwright-enterprise-ts"
    }
  },

  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] }
    }
  ],

  // Expose API_BASE_URL to tests via env; tests can also read process.env directly.
  metadata: {
    BASE_URL,
    API_BASE_URL
  }
});
