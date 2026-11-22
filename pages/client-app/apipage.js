const { expect } = require('@playwright/test');

class APIPage {
   constructor(context, loginData, orderData) {
      this.context = context;
      this.loginData = loginData;
      this.orderData = orderData;
   }

   async getToken() {
      const response = await this.context.post(
         'https://rahulshettyacademy.com/api/ecom/auth/login',
         { data: this.loginData }
      );

      expect(response.ok()).toBeTruthy();
      const responseJson = await response.json();
      const token = responseJson.token;
      this.token = token;
      expect(token).toBeTruthy();
      return token;
   }

   async createOrder() {
      await this.getToken();
      const orderResponse = await this.context.post(
         'https://rahulshettyacademy.com/api/ecom/order/create-order',
         {
            data: this.orderData,
            headers: {
               Authorization: this.token,
               'Content-Type': 'application/json'
            }
         }
      );

      expect(orderResponse.ok()).toBeTruthy();
      const orderResponseJson = await orderResponse.json();
      const orderId = orderResponseJson.orders[0];
      expect(orderId).toBeTruthy();
      return orderId;
   }
}
module.exports = APIPage;