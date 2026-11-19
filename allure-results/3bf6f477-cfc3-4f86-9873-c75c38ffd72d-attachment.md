# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: client-app/purchase-product.spec.js >> purchase product
- Location: tests/client-app/purchase-product.spec.js:7:1

# Error details

```
TypeError: this.orderId.includes is not a function
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
        - generic [ref=e35]: 6af86b6392a4341c4c188b95
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
  1  | import {expect} from '@playwright/test';
  2  | class OrderPage
  3  | {
  4  |    constructor(page)
  5  |    {
  6  |       this.page = page;
  7  |       this.order = page.locator('label[routerlink="/dashboard/myorders"]')
  8  |       this.orderId = page.locator("label.ng-star-inserted");
  9  |       this.ordersummary = page.locator("div.email-title");
  10 |       this.shippingcountry = page.locator("div p.text");
  11 |       this.orderdetails = page.locator("div.col-text");
  12 |    }
  13 | 
  14 |    async validateOrderId()
  15 |    {
  16 |       const orderId = await this.orderId.textContent();
  17 |       await this.order.click();
  18 |       await this.page.locator("tbody").waitFor();
  19 |       const rows = this.page.locator("tbody tr");
  20 |       const rowcount = await rows.count();
  21 |       for(let i=0;i<rowcount;i++)
  22 |       {
  23 |          const roworderId = await rows.nth(i).locator("th").textContent();
  24 |          if(orderId.includes(roworderId))
  25 |          {
  26 |             await rows.nth(i).getByRole("button",{name:"View"}).click();
  27 |             break;
  28 |          }
  29 |       }
  30 |    }
  31 |    async validateSummary()
  32 |    {
  33 |       await this.orderdetails.textContent();
> 34 |       expect(this.orderId.includes(this.orderdetails)).toBeTruthy();
     |                           ^ TypeError: this.orderId.includes is not a function
  35 |       await (expect(this.ordersummary)).toHaveText(" order summary ");
  36 |       await (expect(this.shippingcountry.nth(1))).toHaveText(" Country - United States ");
  37 |    }
  38 | }
  39 | module.exports = OrderPage;
```