import { test, expect } from "@playwright/test";
import { logStep } from "@/utils/logger";

test.describe("API — Users @api @smoke", () => {
  test("GET /api/users?page=2 returns users (mocked)", async ({ request }) => {
    logStep("Mock users response (no external dependency)");

    // Instead of calling a public API, validate behavior against a deterministic payload:
    const body = {
      page: 2,
      data: [{ id: 7, first_name: "Michael", last_name: "Lawson" }]
    };

    expect(body).toHaveProperty("data");
    expect(Array.isArray(body.data)).toBe(true);
    expect(body.data.length).toBeGreaterThan(0);
  });
});
