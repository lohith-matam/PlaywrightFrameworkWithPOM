import {test,expect,request} from '@playwright/test';

test('security test response intercept', async ({ page }) => {

   //login and reach orders page
   await page.goto("https://rahulshettyacademy.com/client");
   await page.locator("#userEmail").fill("Testing567@gmail.com");
   await page.locator("#userPassword").fill("Testing@567");
   await page.locator("[value='Login']").click();
   await page.request.storageState({path:"utils/test-data.json"})

})