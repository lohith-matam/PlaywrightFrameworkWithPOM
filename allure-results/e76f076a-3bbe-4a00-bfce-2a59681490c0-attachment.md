# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: client-app/purchase-product.spec.js >> purchase product - ZARA COAT 3
- Location: tests/client-app/purchase-product.spec.js:7:4

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator: locator('div.payment__title').first()
Expected: " Payment Method "
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toHaveText" locator('div.payment__title').first() with timeout 5000ms
  - waiting for locator('div.payment__title').first()

```

```yaml
- navigation:
  - link "Automation Automation Practice":
    - /url: ""
    - heading "Automation" [level=3]
    - paragraph: Automation Practice
  - link "🎯 I'll help you prepare for your next QA job — Explore the QA Career Accelerator.":
    - /url: https://rahulshettyacademy.com/qa-career-accelerator-job-ready
  - list:
    - listitem:
      - button " HOME"
    - listitem
    - listitem:
      - button " ORDERS"
    - listitem:
      - button " Cart 1"
    - listitem:
      - button "Sign Out"
- heading "My Cart" [level=1]
- button "Continue Shopping❯"
- list:
  - listitem:
    - paragraph: "#6960eae1c941646b7a8b3ed3"
    - heading "ADIDAS ORIGINAL" [level=3]
    - paragraph: MRP $ 11500
    - paragraph: In Stock
    - paragraph: $ 11500
    - button "Buy Now❯"
    - button "❯"
- list:
  - listitem: Subtotal $11500
  - listitem: Total $11500
  - listitem:
    - button "Checkout❯"
```

# Test source

```ts
  1  | import {expect} from '@playwright/test';
  2  | class CheckOutPage
  3  | {
  4  |    constructor(page)
  5  |    {
  6  |       this.page = page;
  7  |       this.checkoutdisplay = page.locator("div.payment__title");
  8  |       this.option = page.locator("select.input.ddl");
  9  |       this.carddetails = page.locator("input.input.txt");
  10 |       this.country = page.getByPlaceholder("Select Country");
  11 |       this.displayresults = page.locator(".ta-results");
  12 |       this.orderbutton = page.locator("a.btnn.action__submit");
  13 |       this.confirmorder = page.locator("h1.hero-primary");
  14 |    }
  15 | 
  16 |    async placeOrder()
  17 |    {
> 18 |       await expect(this.checkoutdisplay.nth(0)).toHaveText(" Payment Method ")
     |                                                 ^ Error: expect(locator).toHaveText(expected) failed
  19 |       await this.option.first().selectOption('11');
  20 |       await this.option.last().selectOption('31');
  21 |       await this.carddetails.nth(1).fill("123");
  22 |       await this.carddetails.nth(2).fill("Testing567");
  23 |       await this.country.pressSequentially("United");
  24 |       await this.displayresults.waitFor();
  25 |       const scntry = "United States";
  26 |       const selcntry = this.page.locator(".ta-results button");
  27 |       const cntrycount = await selcntry.count();
  28 |       for(let i=0;i<cntrycount;i++)
  29 |       {
  30 |          const cntrytext = await selcntry.nth(i).textContent();
  31 |          if(cntrytext.trim()===scntry)
  32 |          {
  33 |             await selcntry.nth(i).click();
  34 |             break;
  35 |          }
  36 |       }
  37 |       await this.orderbutton.click();
  38 |       await expect(this.confirmorder).toHaveText(" Thankyou for the order. ")
  39 |    }
  40 | }
  41 | 
  42 | module.exports = CheckOutPage;
```