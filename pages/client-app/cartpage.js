const {expect} = require('@playwright/test');
class CartPage
{
   constructor(page)
   {
      this.page = page;
      this.mycart = page.getByText('My Cart');
      this.cartproducts = page.locator("li.items");
   }

   async validateCartPage()
   {
      await expect(this.mycart).toBeVisible();
   }

   async purchaseItem(product)
   {
      // const cartcount = await this.cartproducts.count();
      // for(let i=0;i<cartcount;i++)
      // {
      //    const carttext = await this.cartproducts.nth(i).locator("h3").textContent();
      //    if(carttext === product)
      //    {
      //       await this.cartproducts.nth(i).locator("button.btn.btn-primary").click();
      //       break;
      //    }
      // }
      const cartProduct = this.cartproducts.filter({hasText: product});
      await expect(cartProduct).toHaveCount(1);
      await cartProduct.locator("button.btn.btn-primary").click();
   }
}

module.exports = CartPage;