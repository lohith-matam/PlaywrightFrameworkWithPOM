import { test } from '@playwright/test';
import POManager from '../../pages/client-app/POManager';
import testdata from '../../utils/login.json';

for (const dataset of testdata) 
{
   test(`purchase product - ${dataset.username}`, async ({ page }) => {

      const poManager = new POManager(page);
      const loginpage = poManager.getLoginPage();
      await loginpage.navigateToApplication();
      await loginpage.logintoApplication(dataset.username, dataset.password);
      const homepage = poManager.getHomePage();
      await homepage.addToCart(dataset.product);
      const cartpage = poManager.getCartPage();
      await cartpage.validateCartPage();
      await cartpage.purchaseItem(dataset.product);
      const checkoutpage = poManager.getCheckOutPage();
      await checkoutpage.placeOrder();
      const orderpage = poManager.getOrderPage();
      await orderpage.validateOrderId();
      await orderpage.validateSummary();
      
   })
}