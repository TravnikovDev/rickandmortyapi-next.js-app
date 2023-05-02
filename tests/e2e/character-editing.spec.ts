// tests/e2e/character-editing.spec.ts
import { test, expect } from "@playwright/test";

test("should edit a character and display the updated details", async ({
  page,
}) => {
  // Step 1: Navigate to the character list page
  await page.goto("http://localhost:3000");

  // Wait for results
  await page.waitForTimeout(2000);

  // Step 2: Select a character to edit
  // You can use data-testid for more specific element selection
  const firstCharacter = await page
    .locator('[data-testid="character-card"]')
    .first();
  await firstCharacter.click();

  // Wait for page loads
  await page.waitForTimeout(1000);

  // Step 3: Edit the character details
  await page.click('[data-testid="edit-character-btn"]');
  await page.fill('[data-testid="character-name-input"]', "Деда Рик");
  // Add other fields as needed

  // Step 4: Save the changes
  await page.click('[data-testid="save-character-btn"]');
  // Wait for page transition
  await page.waitForTimeout(300);

  // Step 5: Verify that the updated character details are displayed correctly
  await expect(page.locator('[data-testid="character-name"]')).toHaveText(
    "Деда Рик"
  );

  // Step 6: Checking results on home page
  await page.click('[data-testid="back-button"]');
  // Wait for page loads
  await page.waitForTimeout(700);
  const Rick = await page.locator('[data-testid="character-card"]').first();
  await expect(Rick.locator('[data-testid="character-name"]')).toHaveText(
    "Деда Рик"
  );
});
