import { test } from "@playwright/test";
import { PlaywrightHomePage } from "@/pages/PlaywrightHomePage";
import { logStep } from "@/utils/logger";

test.describe("UI — Playwright.dev @ui @smoke", () => {
  test("homepage loads and has expected title", async ({ page }) => {
    const home = new PlaywrightHomePage(page);

    logStep("Navigate to home");
    await home.goto();

    logStep("Validate title");
    await home.expectTitleContains("Playwright");
  });
});
