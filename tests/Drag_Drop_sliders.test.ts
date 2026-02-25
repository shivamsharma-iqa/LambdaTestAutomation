import {expect, test} from "@playwright/test";

test("Simple Form Demo", async({page,baseURL})=>{
    await page.goto(`${baseURL}`);
    await page.getByText("Drag & Drop Sliders").click();
    
  const slider = page.locator('#slider3').getByRole('slider');

  const box = await slider.boundingBox();
  if (!box) throw new Error('Slider not found on page');

  const centerY = box?.y + box?.height / 2;
  const targetX = box?.x + box?.width * 0.928;

  await page.mouse.move(box?.x + box?.width / 2, centerY);
  await page.waitForTimeout(3000);
  await page.mouse.down();

  await page.mouse.move(targetX, centerY, { steps: 15 });
  await page.waitForTimeout(3000);
  await page.mouse.up();
  await page.waitForTimeout(3000);

  const output = page.locator('#rangeSuccess');
  await expect(output).toHaveText('95');


})