import {test,expect,request} from '@playwright/test';

const logindata = {userEmail:"Testing567@gmail.com",userPassword:"Testing@567"};
const orderdata = {orders:[{country:"Cuba",productOrderedId:"6960eac0c941646b7a8b3e68"}]}
let token;
let orderId;

// login to application

test.beforeAll(async()=>{
const context = await request.newContext();
const response = await context.post("https://rahulshettyacademy.com/api/ecom/auth/login",{data:logindata});

expect(response.ok()).toBeTruthy();
const responseJson = await response.json();
token = responseJson.token;
console.log(token);

// create an order

const orderresponse = await context.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
   {
      data:orderdata,
      headers: {
      'Authorization' : token,
      'Content-Type' : 'application/json'}
   })

   expect(orderresponse.ok()).toBeTruthy();
   const orderresponsejson = await orderresponse.json();
   console.log(orderresponsejson)
   orderId = await orderresponsejson.orders[0];
   expect(orderId).toBeTruthy();
   //await context.dispose();
});

test('place the order', async({page}) =>{


await page.addInitScript(value => {window.localStorage.setItem('token',value)},token);
await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
await page.locator('[routerlink="/dashboard/myorders"]').click();
await expect(page.locator("h1.ng-star-inserted")).toBeVisible();
});