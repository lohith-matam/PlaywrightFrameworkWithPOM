const {Given, When, Then , setDefaultTimeout} = require('@cucumber/cucumber');
const POManager = require('../../pages/client-app/POManager');
setDefaultTimeout(60 * 1000);

Given('a login to Ecommerece application with {string} and {string}',async function (username, password) {
   const loginpage = this.poManager.getLoginPage();
   await loginpage.navigateToApplication();
   await loginpage.logintoApplication(username,password);
});

When('add {string} to Cart', async function (product) {
      const homepage = this.poManager.getHomePage();
      await homepage.addToCart(product);
      const cartpage = this.poManager.getCartPage();
      await cartpage.validateCartPage();
      await cartpage.purchaseItem(product);
});

When('Enter valid details and place the order', async function () {
      const checkoutpage = this.poManager.getCheckOutPage();
      await checkoutpage.placeOrder();
});

Then('verify order is present in OrderHistory', async function () {
      const orderpage = this.poManager.getOrderPage();
      await orderpage.validateOrderId();
      await orderpage.validateSummary();
});