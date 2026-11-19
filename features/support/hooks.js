const {Before} = require('@cucumber/cucumber');
const {chromium} = require('@playwright/test');
const POManager = require('../../pages/client-app/POManager');

Before(async function () {
   this.browser = await chromium.launch({headless:false});
   this.context = await this.browser.newContext();
   this.page = await this.context.newPage();
   this.poManager = new POManager(this.page);
   })