# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: client-app/purchase-product.spec.js >> purchase product
- Location: tests/client-app/purchase-product.spec.js:5:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.textContent: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('li.items').first().locator('li.items h3')

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - navigation [ref=e5]:
    - generic [ref=e7]:
      - link "Automation Automation Practice":
        - /url: ""
        - generic [ref=e8] [cursor=pointer]:
          - heading "Automation" [level=3] [ref=e9]
          - paragraph [ref=e10]: Automation Practice
    - text: 
    - link "🎯 I'll help you prepare for your next QA job — Explore the QA Career Accelerator." [ref=e11] [cursor=pointer]:
      - /url: https://rahulshettyacademy.com/qa-career-accelerator-job-ready
    - list [ref=e12]:
      - listitem [ref=e13] [cursor=pointer]:
        - button " HOME" [ref=e14]:
          - generic [ref=e15]: 
          - text: HOME
      - listitem
      - listitem [ref=e16] [cursor=pointer]:
        - button " ORDERS" [ref=e17]:
          - generic [ref=e18]: 
          - text: ORDERS
      - listitem [ref=e19] [cursor=pointer]:
        - button " Cart 1" [ref=e20]:
          - generic [ref=e21]: 
          - text: Cart
          - generic [ref=e22]: "1"
      - listitem [ref=e23] [cursor=pointer]:
        - button "Sign Out" [ref=e24]:
          - generic [aria-hidden] [ref=e25]: 
          - text: Sign Out
  - generic [ref=e26]:
    - generic [ref=e27]:
      - heading "My Cart" [level=1] [ref=e28]
      - button "Continue Shopping❯" [ref=e29] [cursor=pointer]
    - list [ref=e31]:
      - listitem [ref=e32] [cursor=pointer]:
        - generic [ref=e33]:
          - generic [ref=e34]:
            - paragraph [ref=e35]: "#6960eac0c941646b7a8b3e68"
            - heading "ZARA COAT 3" [level=3] [ref=e36]
            - paragraph [ref=e37]: MRP $ 11500
            - paragraph [ref=e38]: In Stock
          - paragraph [ref=e40]: $ 11500
          - generic [ref=e41]:
            - button "Buy Now❯" [ref=e42]
            - button "❯" [ref=e43]:
              - generic [aria-hidden] [ref=e44]: 
              - text: ❯
    - list [ref=e46]:
      - listitem [ref=e47]:
        - generic [ref=e48]: Subtotal
        - generic [ref=e49]: $11500
      - listitem [ref=e50]:
        - generic [ref=e51]: Total
        - generic [ref=e52]: $11500
      - listitem [ref=e53]:
        - button "Checkout❯" [ref=e54] [cursor=pointer]
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
  15 | 
  16 | const cproduct = "ZARA COAT 3";
  17 | const cartproducts = page.locator("li.items");
  18 | const cartcount = await cartproducts.count();
  19 | for(let i=0;i<cartcount;i++)
  20 | {
> 21 |    const carttext = await cartproducts.nth(i).locator("li.items h3").textContent();
     |                                                                      ^ Error: locator.textContent: Test timeout of 30000ms exceeded.
  22 |    if(carttext === cproduct)
  23 |    {
  24 |       await cartproducts.nth(i).locator("button.btn.btn-primary").click();
  25 |       break;
  26 |    }
  27 | }
  28 | 
  29 | await page.pause();
  30 | })
```