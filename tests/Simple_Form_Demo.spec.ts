import {expect, test} from "@playwright/test";

test("Simple Form Demo", async({page,baseURL})=>{
    await page.goto(`${baseURL}`);
    await page.locator("//a[.='Simple Form Demo']").click();

    await expect(page).toHaveURL(`${baseURL}simple-form-demo/`);
    await page.waitForTimeout(2000);

   
    const inputMessage = 'Welcome to TestMu AI';
    // await page.getByPlaceholder("Please enter your Message").type(inputMessage);
    await page.fill("input#user-message",inputMessage);
   
    await page.waitForTimeout(2000);

    // await page.locator("//button[@id='showInput']").click();
    await page.locator('//button[text()="Get Checked Value"]').click();
    await page.waitForTimeout(3000);
    const messageDisplayed = page.locator("//p[@id='message']");
    const text = await messageDisplayed.innerText();
    console.log("Message:", text);    
    await expect(messageDisplayed).toHaveText(inputMessage);
    // await console.log(messageDisplayed.textContent());
    // 
    console.log("Successfully validated the message displayed on the page."); 
})