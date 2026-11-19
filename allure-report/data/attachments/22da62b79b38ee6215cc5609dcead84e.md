# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: client-app/purchase-product.spec.js >> purchase product
- Location: tests/client-app/purchase-product.spec.js:7:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.textContent: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('label.ng-star-inserted')

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
        - button " Cart" [ref=e20]:
          - generic [ref=e21]: 
          - text: Cart
      - listitem [ref=e22] [cursor=pointer]:
        - button "Sign Out" [ref=e23]:
          - generic [aria-hidden] [ref=e24]: 
          - text: Sign Out
  - generic [ref=e28]:
    - paragraph [ref=e30]: Thank you for Shopping With Us
    - generic [ref=e31]:
      - generic [ref=e32]: order summary
      - generic [ref=e34]:
        - text: Order Id
        - generic [ref=e35]: 6af856af92a4341c4c184eac
      - generic [ref=e37]:
        - generic [ref=e39]:
          - generic [ref=e40]: Billing Address
          - paragraph [ref=e41]: Testing567@gmail.com
          - paragraph [ref=e42]: Country - United States
        - generic [ref=e44]:
          - generic [ref=e45]: Delivery Address
          - paragraph [ref=e46]: Testing567@gmail.com
          - paragraph [ref=e47]: Country - United States
      - generic [ref=e48]: Product Ordered
      - generic [ref=e56]:
        - generic [ref=e57]: ZARA COAT 3
        - generic [ref=e58]:
          - generic [ref=e59]: by ECOM
          - generic [ref=e60]: $ 11500
      - generic [ref=e61]: View Orders
```

# Test source

```ts
  1  | import {test,expect} from '@playwright/test';
  2  | import LoginPage from '../../pages/client-app/loginpage';
  3  | import HomePage from '../../pages/client-app/homepage';
  4  | import CartPage from '../../pages/client-app/cartpage';
  5  | import CheckOutPage from '../../pages/client-app/checkoutpage';
  6  | import OrderPage from '../../pages/client-app/orderpage';
  7  | test('purchase product',async({page}) => {
  8  | 
  9  | const loginpage = new LoginPage(page);
  10 | await loginpage.navigateToApplication();
  11 | await loginpage.logintoApplication();
  12 | await page.waitForLoadState("networkidle");
  13 | const homepage = new HomePage(page);
  14 | await homepage.addToCart();
  15 | const cartpage = new CartPage(page);
  16 | await cartpage.validateCartPage();
  17 | await cartpage.purchaseItem();
  18 | const checkoutpage = new CheckOutPage(page);
  19 | await checkoutpage.placeOrder();
  20 | const orderpage = new OrderPage(page);
  21 | await orderpage.validateOrderId();
  22 | 
> 23 | const orderId = await page.locator("label.ng-star-inserted").textContent();
     |                                                              ^ Error: locator.textContent: Test timeout of 30000ms exceeded.
  24 | await (expect(page.locator("div.email-title"))).toHaveText(" order summary ");
  25 | await (expect(page.locator("div.col-text"))).toContainText(orderId);
  26 | await (expect(page.locator("div p.text"))).toHaveText(" Country - United States ");
  27 | 
  28 | await page.pause();
  29 | })
```