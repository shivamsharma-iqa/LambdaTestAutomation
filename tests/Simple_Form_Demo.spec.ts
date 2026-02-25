import {expect, test} from "@playwright/test";

test("Simple Form Demo", async ({ page, baseURL }) => {
    await page.goto(baseURL!);

    await page.getByRole('link', { name: 'Simple Form Demo' }).click();

    await expect(page).toHaveURL(`${baseURL}simple-form-demo/`);

    const inputMessage = 'Welcome to TestMu AI';

    await page.fill('#user-message', inputMessage);

    await page.getByRole('button', { name: 'Get Checked Value' }).click();

    const messageDisplayed = page.locator('#message');

    await expect(messageDisplayed).toBeVisible();
    await expect(messageDisplayed).toHaveText(inputMessage);

    console.log("Successfully validated the message displayed on the page.");
});