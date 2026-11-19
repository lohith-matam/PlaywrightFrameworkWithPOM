# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: client-app/purchase-product.spec.js >> purchase product
- Location: tests/client-app/purchase-product.spec.js:7:1

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('div.col-text')
Expected substring: " | 6af86f4192a4341c4c189671 | "
Received string:    "6af86f4192a4341c4c189671"
Timeout: 5000ms

Call log:
  - Expect "toContainText" locator('div.col-text') with timeout 5000ms
  - waiting for locator('div.col-text')
    14 × locator resolved to <div _ngcontent-ooa-c46="" class="col-text -main">6af86f4192a4341c4c189671</div>
       - unexpected value "6af86f4192a4341c4c189671"

```

```yaml
- text: 6af86f4192a4341c4c189671
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
  8  |       this.ordersummary = page.locator("div.email-title");
  9  |       this.shippingcountry = page.locator("div p.text");
  10 |    }
  11 | 
  12 |    async validateOrderId()
  13 |    {
  14 |       const orderId = await this.page.locator("label.ng-star-inserted").textContent();
  15 |       await this.order.click();
  16 |       await this.page.locator("tbody").waitFor();
  17 |       const rows = this.page.locator("tbody tr");
  18 |       const rowcount = await rows.count();
  19 |       for(let i=0;i<rowcount;i++)
  20 |       {
  21 |          const roworderId = await rows.nth(i).locator("th").textContent();
  22 |          if(orderId.includes(roworderId))
  23 |          {
  24 |             await rows.nth(i).getByRole("button",{name:"View"}).click();
  25 |             break;
  26 |          }
  27 |       }
> 28 |       await (expect(this.page.locator("div.col-text"))).toContainText(orderId);
     |                                                         ^ Error: expect(locator).toContainText(expected) failed
  29 |    }
  30 |    async validateSummary()
  31 |    {
  32 |       await (expect(this.ordersummary)).toHaveText(" order summary ");
  33 |       await (expect(this.shippingcountry.nth(1))).toHaveText(" Country - United States ");
  34 |    }
  35 | }
  36 | module.exports = OrderPage;
```