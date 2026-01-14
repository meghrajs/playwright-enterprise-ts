import { test, expect } from "@playwright/test";
import { env } from "@/config/env";
import { logStep } from "@/utils/logger";

test.describe("E2E — API → UI @e2e @regression", () => {
  test("fetch user via API and validate UI navigation works", async ({ request, page }) => {
    logStep("Fetch a user from API");
    const res = await request.get(`${env.apiBaseUrl}/api/users/2`);
    expect(res.ok()).toBeTruthy();

    const body = await res.json();
    expect(body?.data?.first_name).toBeTruthy();

    logStep("Open UI home and validate we can navigate to Docs");
    await page.goto(env.baseUrl);
    await page.getByRole("link", { name: /docs/i }).click();

    await expect(page).toHaveURL(/docs/i);
  });
});
