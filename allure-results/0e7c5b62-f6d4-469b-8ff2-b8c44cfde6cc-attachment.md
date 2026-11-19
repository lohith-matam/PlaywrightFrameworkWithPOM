# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: client-app/purchase-product.spec.js >> purchase product
- Location: tests/client-app/purchase-product.spec.js:4:1

# Error details

```
Error: locator.click: Error: strict mode violation: locator('div.card-body').nth(1).getByRole('button') resolved to 2 elements:
    1) <button tabindex="0" _ngcontent-erf-c39="" class="btn w-40 rounded">…</button> aka getByRole('button', { name: 'View' }).nth(1)
    2) <button _ngcontent-erf-c39="" class="btn w-10 rounded">…</button> aka getByRole('button', { name: ' Add To Cart' }).nth(1)

Call log:
  - waiting for locator('div.card-body').nth(1).getByRole('button')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
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
    - text:    
    - generic [ref=e25]:
      - paragraph [ref=e26]: Home | Search
      - heading "Filters" [level=4] [ref=e28]
      - generic [ref=e29]:
        - textbox "search" [ref=e31]
        - generic [ref=e32]:
          - heading "Price Range" [level=6] [ref=e33]
          - generic [ref=e34]:
            - textbox "Min Price" [ref=e36]
            - textbox "Max Price" [ref=e38]
        - generic [ref=e39]:
          - heading "Categories" [level=6] [ref=e40]
          - generic [ref=e41]: 
          - generic [ref=e43]:
            - checkbox [ref=e44]
            - generic [ref=e45]: fashion
          - generic [ref=e46]:
            - checkbox [ref=e47]
            - generic [ref=e48]: electronics
          - generic [ref=e49]:
            - checkbox [ref=e50]
            - generic [ref=e51]: household
        - generic [ref=e52]:
          - heading "Sub Categories" [level=6] [ref=e53]
          - generic [ref=e54]: 
          - generic [ref=e56]:
            - checkbox [ref=e57]
            - generic [ref=e58]: t-shirts
          - generic [ref=e59]:
            - checkbox [ref=e60]
            - generic [ref=e61]: shirts
          - generic [ref=e62]:
            - checkbox [ref=e63]
            - generic [ref=e64]: shoes
          - generic [ref=e65]:
            - checkbox [ref=e66]
            - generic [ref=e67]: mobiles
          - generic [ref=e68]:
            - checkbox [ref=e69]
            - generic [ref=e70]: laptops
        - generic [ref=e71]:
          - heading "Search For" [level=6] [ref=e72]
          - generic [ref=e73]: 
          - generic [ref=e75]:
            - checkbox [ref=e76]
            - generic [ref=e77]: men
          - generic [ref=e78]:
            - checkbox [ref=e79]
            - generic [ref=e80]: women
    - generic [ref=e81]:
      - generic [ref=e82]:
        - generic [ref=e83]:
          - generic [ref=e84]: Showing 3 results |
          - generic [ref=e85]: User can only see maximum 9 products on a page
        - generic [ref=e86]:
          - generic [ref=e90]:
            - heading "ADIDAS ORIGINAL" [level=5] [ref=e91]
            - generic [ref=e92]: $ 11500
            - button "View" [ref=e94] [cursor=pointer]:
              - generic [aria-hidden] [ref=e95]: 
              - text: View
            - button " Add To Cart" [ref=e96] [cursor=pointer]:
              - generic [ref=e97]: 
              - text: Add To Cart
          - generic [ref=e101]:
            - heading "ZARA COAT 3" [level=5] [ref=e102]
            - generic [ref=e103]: $ 11500
            - button "View" [ref=e105] [cursor=pointer]:
              - generic [aria-hidden] [ref=e106]: 
              - text: View
            - button " Add To Cart" [ref=e107] [cursor=pointer]:
              - generic [ref=e108]: 
              - text: Add To Cart
          - generic [ref=e112]:
            - heading "iphone 13 pro" [level=5] [ref=e113]
            - generic [ref=e114]: $ 55000
            - button "View" [ref=e116] [cursor=pointer]:
              - generic [aria-hidden] [ref=e117]: 
              - text: View
            - button " Add To Cart" [ref=e118] [cursor=pointer]:
              - generic [ref=e119]: 
              - text: Add To Cart
      - list "Pagination" [ref=e124]:
        - listitem [ref=e125]:
          - text: «
          - generic [ref=e126]:
            - text: Previous
            - generic [ref=e127]: page
        - listitem [ref=e128]:
          - generic [ref=e129]: You're on page
          - text: "1"
        - listitem [ref=e130]:
          - generic [ref=e131]:
            - text: Next
            - generic [ref=e132]: page
          - text: »
    - generic [ref=e133]: Design and Developed By - Kunal Sharma
  - generic "Login Successfully" [ref=e135]
```

# Test source

```ts
  1  | import {test,expect} from '@playwright/test';
  2  | import LoginPage from '../../pages/client-app/loginpage';
  3  | 
  4  | test('purchase product',async({page}) => {
  5  | 
  6  | const loginpage = new LoginPage(page);
  7  | await loginpage.navigateToApplication();
  8  | await loginpage.logintoApplication();
  9  | await page.waitForLoadState("networkidle");
  10 | 
  11 | const product = "ZARA COAT 3";
  12 | const products = page.locator("div.card-body");
  13 | const pcount = await products.count();
  14 | 
  15 | for(let i=0; i<pcount; i++)
  16 | {
  17 |    const selproduct = await products.nth(i).locator("b").textContent();
  18 |    if(selproduct === product)
  19 |    {
> 20 |       await products.nth(i).getByRole("button",{button:" Add To Cart"}).click();
     |                                                                         ^ Error: locator.click: Error: strict mode violation: locator('div.card-body').nth(1).getByRole('button') resolved to 2 elements:
  21 |       break;
  22 |    }
  23 | }
  24 | 
  25 | })
```