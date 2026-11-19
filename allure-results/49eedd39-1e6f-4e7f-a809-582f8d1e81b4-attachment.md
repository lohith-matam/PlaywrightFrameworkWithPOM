# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: client-app/purchase-product.spec.js >> purchase product
- Location: tests/client-app/purchase-product.spec.js:5:1

# Error details

```
Error: locator.fill: Target page, context or browser has been closed
```

# Test source

```ts
  1  | import {expect} from '@playwright/test';
  2  | class LoginPage
  3  | {
  4  |    constructor(page)
  5  |    {
  6  |       this.page = page;
  7  |       this.userEmail = page.locator("#userEmail");
  8  |       this.userPassword = page.locator("#userPassword");
  9  |       this.loginbutton = page.locator("#login");
  10 |       this.homeicon = page.locator("i.fa.fa-home");
  11 |    }
  12 | 
  13 |    async navigateToApplication()
  14 |    {
  15 |       await this.page.goto("https://rahulshettyacademy.com/client/#/auth/login");
  16 |    }
  17 |    async logintoApplication()
  18 |    {
  19 |       await this.userEmail.fill("Testing567@gmail.com");
> 20 |       await this.userPassword.fill("Testing@567");
     |                               ^ Error: locator.fill: Target page, context or browser has been closed
  21 |       await this.loginbutton.click();
  22 |       await expect(this.homeicon).toBeVisible();
  23 |    }
  24 | }
  25 | module.exports = LoginPage;
```