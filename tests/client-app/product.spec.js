import POManager from '../../pages/client-app/POManager';
import { customtest } from '../../utils/test-base';
customtest('@Web purchase product',async({page,testdataforOrder}) => {

const poManager = new POManager(page);
      const loginpage = poManager.getLoginPage();
      await loginpage.navigateToApplication();
      await loginpage.logintoApplication(testdataforOrder.username, testdataforOrder.password);
      const homepage = poManager.getHomePage();
      await homepage.addToCart(testdataforOrder.product);
      const cartpage = poManager.getCartPage();
      await cartpage.validateCartPage();
      await cartpage.purchaseItem(testdataforOrder.product);
      const checkoutpage = poManager.getCheckOutPage();
      await checkoutpage.placeOrder();
      const orderpage = poManager.getOrderPage();
      await orderpage.validateOrderId();
      await orderpage.validateSummary();
})