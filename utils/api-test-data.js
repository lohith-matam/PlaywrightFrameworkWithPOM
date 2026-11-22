class ApiTestData {
   getLoginData() {
      return {
         userEmail: 'Testing567@gmail.com',
         userPassword: 'Testing@567'
      };
   }

   getOrderData() {
      return {
         orders: [
            {
               country: 'Australia',
               productOrderedId: '6960eac0c941646b7a8b3e68'
            }
         ]
      };
   }
}

module.exports = ApiTestData;
