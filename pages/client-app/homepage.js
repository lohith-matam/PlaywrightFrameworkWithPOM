class HomePage
{
   constructor(page)
   {
      this.page = page;
      this.products = page.locator("div.card-body");
      this.cartbutton = page.locator('[routerlink="/dashboard/cart"]');
   }

   async addToCart(product)
   {
      const pcount = await this.products.count();
      await this.page.waitForLoadState("networkidle");
      for(let i=0; i<pcount; i++)
      {
         const selproduct = await this.products.nth(i).locator("b").textContent();
         if(selproduct === product)
         {
            await this.products.nth(i).getByRole("button",{name:" Add To Cart"}).click();
            break;
         }
      }
      await this.cartbutton.click(); 
   }
}
module.exports = HomePage;