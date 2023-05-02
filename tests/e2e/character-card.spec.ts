// character-card.spec.ts

import { test, expect } from "@playwright/test";

test.describe("Character Card", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:3000"); // Replace with your app's URL
  });

  test("should render character card with all details and navigate to character details page", async ({ page }) => {
    const characterCard = await page.waitForSelector('[data-testid="character-card"]');
    expect(characterCard).toBeTruthy();

    const characterName = await page.textContent('[data-testid="character-name"]');
    expect(characterName).toBeTruthy();
    expect(characterName?.length).toBeGreaterThan(0);

    const characterStatus = await page.textContent('[data-testid="character-status"]');
    expect(characterStatus).toBeTruthy();

    const characterGender = await page.textContent('[data-testid="character-gender"]');
    expect(characterGender).toBeTruthy();

    const characterSpecies = await page.textContent('[data-testid="character-species"]');
    expect(characterSpecies).toBeTruthy();

    const characterOrigin = await page.textContent('[data-testid="character-origin"]');
    expect(characterOrigin).toBeTruthy();

    const characterLocation = await page.textContent('[data-testid="character-location"]');
    expect(characterLocation).toBeTruthy();

    const characterType = await page.textContent('[data-testid="character-type"]');
    expect(characterType).toBeTruthy();

    await characterCard.click();
    await page.waitForNavigation();

    const url = page.url();
    expect(url).toContain("/characters/");
  });
});
