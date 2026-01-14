import { test, expect } from "@playwright/test";
import { env } from "@/config/env";
import { logStep } from "@/utils/logger";

test.describe("API — Users @api @smoke", () => {
  test("GET /api/users?page=2 returns users", async ({ request }) => {
    logStep("Call Reqres users API");
    const res = await request.get(`${env.apiBaseUrl}/api/users?page=2`);

    expect(res.ok()).toBeTruthy();

    const body = await res.json();
    expect(body).toHaveProperty("data");
    expect(Array.isArray(body.data)).toBe(true);
    expect(body.data.length).toBeGreaterThan(0);
  });
});
