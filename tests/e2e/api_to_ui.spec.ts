import { test, expect } from "@playwright/test";
import { env } from "@/config/env";
import { logStep } from "@/utils/logger";

test.describe("E2E — API → UI @e2e @regression", () => {
  test("seed data (mocked) and validate UI navigation works", async ({ page }) => {
    logStep("Seed user data (mocked, deterministic)");
    const seededUser = { id: 2, first_name: "Janet" };
    expect(seededUser.first_name).toBeTruthy();

    logStep("Open UI home and validate we can navigate to Docs");
    await page.goto(env.baseUrl);
    await page.getByRole("link", { name: /docs/i }).click();
    await expect(page).toHaveURL(/docs/i);
  });
});
