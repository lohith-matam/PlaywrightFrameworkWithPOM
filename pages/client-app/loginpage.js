const {expect} = require('@playwright/test');
class LoginPage
{
   constructor(page)
   {
      this.page = page;
      this.username = page.locator("#userEmail");
      this.password = page.locator("#userPassword");
      this.loginbutton = page.locator("#login");
      this.homeicon = page.locator("i.fa.fa-home");
   }

   async navigateToApplication()
   {
      await this.page.goto("https://rahulshettyacademy.com/client/#/auth/login");
   }
   async logintoApplication(username,password)
   {
      await this.username.fill(username);
      await this.password.fill(password);
      await this.loginbutton.click();
      await expect(this.homeicon).toBeVisible();
   }
}
module.exports = LoginPage;