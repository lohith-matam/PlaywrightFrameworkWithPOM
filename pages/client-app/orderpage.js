const {expect} = require('@playwright/test');
class OrderPage
{
   constructor(page)
   {
      this.page = page;
      this.order = page.locator('label[routerlink="/dashboard/myorders"]')
      this.ordersummary = page.locator("div.email-title"); 
      this.shippingcountry = page.locator("div p.text");
   }

   async validateOrderId()
   {
      const orderId = await this.page.locator("label.ng-star-inserted").textContent();
      await this.order.click();
      await this.page.locator("tbody").waitFor();
      const rows = this.page.locator("tbody tr");
      const rowcount = await rows.count();
      for(let i=0;i<rowcount;i++)
      {
         const roworderId = await rows.nth(i).locator("th").textContent();
         if(orderId.includes(roworderId))
         {
            await rows.nth(i).getByRole("button",{name:"View"}).click();
            break;
         }
      }
   }
   async validateSummary()
   {
      await (expect(this.ordersummary)).toHaveText(" order summary ");
      await (expect(this.shippingcountry.nth(1))).toHaveText(" Country - United States ");
   }
}
module.exports = OrderPage;