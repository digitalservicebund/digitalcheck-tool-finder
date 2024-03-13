import { expect, test } from "@playwright/test";

test.describe("test page", () => {
  test("page has title", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(
      "Visualisieren im Digitalcheck - Digitalcheck Werkzeugfinder",
    );
  });

  test("page has h1", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("h1")).toBeVisible();
  });
});
