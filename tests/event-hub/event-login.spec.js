import {test,expect} from '@playwright/test';
import {customtest} from '../../utils/test-base';

customtest('event login', async({page,testdataforOrder}) =>{

await page.goto("https://eventhub.rahulshettyacademy.com/login");
await page.locator("#email").fill(testdataforOrder.username);
await page.locator("#password").fill(testdataforOrder.password);
await page.locator("#login-btn").click();
})