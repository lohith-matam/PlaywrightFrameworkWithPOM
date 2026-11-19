import { test as base } from '@playwright/test';

export const customtest = base.extend({
  testdataforOrder: {
    username: 'Testing567@gmail.com',
    password: 'Testing@567',
    product : "ZARA COAT 3"
  },
});