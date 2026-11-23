import {test,expect,request} from '@playwright/test';
const fakePayLoadOrders = { data: [], message: "No Orders" };

test('@QW Security test response intercept', async ({ page }) => {

   //login and reach orders page
   await page.goto("https://rahulshettyacademy.com/client");
   await page.locator("#userEmail").fill("Testing567@gmail.com");
   await page.locator("#userPassword").fill("Testing@567");
   await page.locator("[value='Login']").click();
   await page.waitForLoadState('networkidle');
   await page.locator(".card-body b").first().waitFor();

  // Intercept API response and mock it
  await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*", route => {
    const response = page.request.fetch(route.request());
    const body = JSON.stringify(fakePayLoadOrders);
    route.fulfill({response,body});
  });

  // Set up waitForResponse BEFORE clicking to avoid race conditions
  page.waitForResponse("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/*");
  await page.locator("button[routerlink*='myorders']").click();

  // Wait for the element to be visible before grabbing text
  await page.locator(".mt-4").waitFor();
  console.log(await page.locator(".mt-4").textContent());

})