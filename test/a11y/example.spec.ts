import { test } from "@playwright/test";
import { checkA11y, injectAxe } from "axe-playwright";

test.describe("basic example a11y test", () => {
  test("test start page", async ({ page }) => {
    await page.goto("/");
    await injectAxe(page);
    await checkA11y(page);
  });
});
