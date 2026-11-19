# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: client-app/purchase-product.spec.js >> purchase product
- Location: tests/client-app/purchase-product.spec.js:5:1

# Error details

```
Error: locator.selectOption: Target page, context or browser has been closed
Call log:
  - waiting for locator('select.input.ddl').first()

```

# Test source

```ts
  1  | import {test,expect} from '@playwright/test';
  2  | import LoginPage from '../../pages/client-app/loginpage';
  3  | import HomePage from '../../pages/client-app/homepage';
  4  | import CartPage from '../../pages/client-app/cartpage';
  5  | test('purchase product',async({page}) => {
  6  | 
  7  | const loginpage = new LoginPage(page);
  8  | await loginpage.navigateToApplication();
  9  | await loginpage.logintoApplication();
  10 | await page.waitForLoadState("networkidle");
  11 | const homepage = new HomePage(page);
  12 | await homepage.addToCart();
  13 | const cartpage = new CartPage(page);
  14 | await cartpage.validateCartPage();
  15 | await cartpage.purchaseItem();
  16 | 
  17 | const year = page.locator("select.input.ddl").first();
> 18 | await year.selectOption('13');
     |            ^ Error: locator.selectOption: Target page, context or browser has been closed
  19 | const month = page.locator("select.input.ddl").last();
  20 | await month.selectOption('38');
  21 | 
  22 | await page.pause();
  23 | })
```