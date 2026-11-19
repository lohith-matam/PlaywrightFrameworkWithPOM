const LoginPage = require("./loginpage");
const HomePage = require("./homepage");
const CartPage = require("./cartpage");
const CheckOutPage = require("./checkoutpage");
const OrderPage = require("./orderpage");
class POManager
{
   constructor(page)
   {
      this.page = page;
      this.LoginPage = new LoginPage(this.page);
      this.HomePage = new HomePage(this.page);
      this.CartPage = new CartPage(this.page);
      this.CheckOutPage = new CheckOutPage(this.page);
      this.OrderPage = new OrderPage(this.page);
   }

   getLoginPage()
   {
      return this.LoginPage;
   }
   getHomePage()
   {
      return this.HomePage;
   }
   getCartPage()
   {
      return this.CartPage;
   }
   getCheckOutPage()
   {
      return this.CheckOutPage;
   }
   getOrderPage()
   {
      return this.OrderPage;
   }
}

module.exports = POManager;