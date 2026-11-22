import {test,expect,request} from '@playwright/test';
import APIPage from '../../pages/client-app/apipage';
import ApiTestData from '../../utils/api-test-data';

const apiTestData = new ApiTestData();
const loginData = apiTestData.getLoginData();
const orderData = apiTestData.getOrderData();
let token;
let orderId;

test.beforeAll(async () => {
   const context = await request.newContext();
   const apiPage = new APIPage(context,loginData,orderData);
   token = await apiPage.getToken();
   orderId = await apiPage.createOrder();
   
});

test('place the order', async({page}) =>{


await page.addInitScript(value => {window.localStorage.setItem('token',value)},token);
await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
await page.locator('[routerlink="/dashboard/myorders"]').click();
await expect(page.locator("h1.ng-star-inserted")).toBeVisible();
});