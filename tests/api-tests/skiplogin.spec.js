import {test,expect} from '@playwright/test';
let webContext;
test.beforeAll('skip login', async ({ browser }) => {

   const context = await browser.newContext();
   const page = await context.newPage();
   await page.goto("https://rahulshettyacademy.com/client");
   await page.locator("#userEmail").fill("Testing567@gmail.com");
   await page.locator("#userPassword").fill("Testing@567");
   await page.locator("[value='Login']").click();
   await context.setStorageState({path:'state.json'});
   webContext = await browser.newContext({storageState:'state.json'});
})

test('app login',async() => {

const page = await webContext.newPage();
await page.goto("https://rahulshettyacademy.com/client");
await page.waitForLoadState('networkidle');  
await expect(page.locator('[routerlink="/dashboard/myorders"]')).toBeVisible();



})