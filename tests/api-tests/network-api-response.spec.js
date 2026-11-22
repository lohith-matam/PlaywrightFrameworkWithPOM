import { test, expect, request } from '@playwright/test';

const logindata = { userEmail: "Testing567@gmail.com", userPassword: "Testing@567" };
const orderdata = { orders: [{ country: "Cuba", productOrderedId: "6960eac0c941646b7a8b3e68" }] };
const fakePayLoadOrders = { data: [], message: "No Orders" };
let token;
let orderId;

test.beforeAll(async () => {
   const apiContext = await request.newContext();
  // 1. Login to application
  const loginResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login", 
   {data: logindata});
  expect(loginResponse.ok()).toBeTruthy();
  const loginResponseJson = await loginResponse.json();
  token = loginResponseJson.token;

  // 2. Create an order
  const orderResponse = await apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order", {
    data: orderdata,
    headers: {
      'Authorization': token,
      'Content-Type': 'application/json'
    }
  });
  expect(orderResponse.ok()).toBeTruthy();
  const orderResponseJson = await orderResponse.json();
  orderId = await orderResponseJson.orders[0];
  expect(orderId).toBeTruthy();
});

test('Place the order', async ({ page }) => {
  await page.addInitScript(value => {window.localStorage.setItem('token', value)}, token);

  await page.goto("https://rahulshettyacademy.com/client");

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
});
