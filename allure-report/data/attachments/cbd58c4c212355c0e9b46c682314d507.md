# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: learn-automation.spec.js/buy-products.spec.js >> test1
- Location: tests/learn-automation.spec.js/buy-products.spec.js:9:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.courses-table')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" locator('.courses-table') with timeout 5000ms
  - waiting for locator('.courses-table')

```

```yaml
- navigation:
  - img "logo"
  - heading "Learn Automation Courses" [level=1]
  - button "Cart"
  - text: Manage
  - img "menu"
  - text: Learn Automation Courses
  - img "delete"
  - link "Home":
    - /url: /
  - link "Practise":
    - /url: /practise
  - button "Sign out"
- 'heading "Total Price: ₹0" [level=3]'
- button "Shop Now"
- heading "Learn Automation By Mukesh Otwani" [level=3]
- heading "©2023 All rights reserved" [level=2]
- link:
  - /url: https://youtube.com/MukeshOtwani
  - img
- link:
  - /url: https://twitter.com/MukeshOtwani
  - img
- link:
  - /url: https://www.linkedin.com/in/mukesh-otwani-93631b99/
  - img
- link:
  - /url: https://www.facebook.com/groups/256655817858291
  - img
```

# Test source

```ts
  1  | const { expect } = require("@playwright/test");
  2  | 
  3  | class ManagePage
  4  | {
  5  |    constructor(page)
  6  |    {
  7  |       this.page = page;
  8  |       this.ptable = page.locator(".courses-table");    
  9  |    }
  10 | 
  11 |    async courseTable(pcourse)
  12 |    {
> 13 |       await (expect(this.ptable)).toBeVisible();
     |                                   ^ Error: expect(locator).toBeVisible() failed
  14 |       const prows = this.ptable.locator("tbody tr");
  15 |       console.log("no.of rows:", await prows.count());
  16 |       const pcols = this.ptable.locator("thead tr th");
  17 |       console.log("no.of cols:", await pcols.count());
  18 |       for(let i=0;i<await prows.count(); i++)
  19 |       {
  20 |          const selcourse = await prows.nth(i).locator("td").nth(1).textContent();
  21 |          if(pcourse===selcourse)
  22 |          {
  23 |             console.log("selected course is:", selcourse)
  24 |             break;
  25 |          }
  26 |       }
  27 |    }
  28 |   
  29 | }
  30 | module.exports=ManagePage;
```