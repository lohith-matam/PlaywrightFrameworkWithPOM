import {test,expect,request} from '@playwright/test';

test('@QW Security test abort', async ({ page }) => {

   await page.route('**/*.{jpg,png,jpeg}',route => route.abort());
   await page.goto("https://rahulshettyacademy.com/client");
   await page.locator("#userEmail").fill("Testing567@gmail.com");
   await page.locator("#userPassword").fill("Testing@567");
   await page.locator("[value='Login']").click();
  });

