Feature: Ecommerece validations
  @Regression
  Scenario: Placing the Order
   Given a login to Ecommerece application with "Testing567@gmail.com" and "Testing@567"
   When add "ZARA COAT 3" to Cart
   And Enter valid details and place the order
   Then verify order is present in OrderHistory 