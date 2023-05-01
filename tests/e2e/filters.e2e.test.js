// tests/e2e/filters.e2e.test.js
const { test, expect } = require("@playwright/test");

test.describe("Filters", () => {
  test("should display the Filters component and interact with it", async ({ page }) => {
    // Navigate to your app's URL
    await page.goto("http://localhost:3000");

    // Test if the Species input field exists
    const speciesInput = await page.$("input[placeholder='Species']");
    expect(speciesInput).toBeTruthy();

    // Test if the Status dropdown exists
    const statusDropdown = await page.$("span:text('Status')");
    expect(statusDropdown).toBeTruthy();

    // Click the Status dropdown and select an option
    await statusDropdown.click();
    await page.click("text='Alive'");

    // Test if the "Clear filters" button exists
    const clearFiltersBtn = await page.$("button:text('Clear filters')");
    expect(clearFiltersBtn).toBeTruthy();

    // Click the "Clear filters" button
    await clearFiltersBtn.click();

    // Add more interactions and assertions based on your requirements
  });
});
