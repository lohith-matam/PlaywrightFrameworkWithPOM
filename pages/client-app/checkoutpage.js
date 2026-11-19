const {expect} = require('@playwright/test');
class CheckOutPage
{
   constructor(page)
   {
      this.page = page;
      this.checkoutdisplay = page.locator("div.payment__title");
      this.option = page.locator("select.input.ddl");
      this.carddetails = page.locator("input.input.txt");
      this.country = page.getByPlaceholder("Select Country");
      this.displayresults = page.locator(".ta-results");
      this.orderbutton = page.locator("a.btnn.action__submit");
      this.confirmorder = page.locator("h1.hero-primary");
   }

   async placeOrder()
   {
      await expect(this.checkoutdisplay.nth(0)).toHaveText(" Payment Method ")
      await this.option.first().selectOption('11');
      await this.option.last().selectOption('31');
      await this.carddetails.nth(1).fill("123");
      await this.carddetails.nth(2).fill("Testing567");
      await this.country.pressSequentially("United");
      await this.displayresults.waitFor();
      const scntry = "United States";
      const selcntry = this.page.locator(".ta-results button");
      const cntrycount = await selcntry.count();
      for(let i=0;i<cntrycount;i++)
      {
         const cntrytext = await selcntry.nth(i).textContent();
         if(cntrytext.trim()===scntry)
         {
            await selcntry.nth(i).click();
            break;
         }
      }
      await this.orderbutton.click();
      await expect(this.confirmorder).toHaveText(" Thankyou for the order. ")
   }
}

module.exports = CheckOutPage;