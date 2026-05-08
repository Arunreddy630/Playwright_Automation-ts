import { test } from '@playwright/test';
import loginData from '../Test Data/logindata.json';

test.describe('Login Tests using JSON Data', () => {

  for (const data of loginData) {

    test(`Login Test for ${data.Username}`, async ({ page }) => {

      await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

      await page.fill('//input[@name="username"]', data.Username);
      await page.fill('//input[@name="password"]', data.Password);
      await page.click('//button[@type="submit"]');

      await page.waitForTimeout(2000);

      if (data.validity === 'valid') {
        console.log(`${data.Username} → Logged in successfully`);
      } else {
        console.log(`${data.Username} → Login failed`);
      }

    });

  }

});