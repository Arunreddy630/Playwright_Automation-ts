import { test } from '@playwright/test';
import fs from 'fs';

// Read CSV file
const csvData = fs.readFileSync('./Test Data/logindatacsv.csv', 'utf-8');

const rows = csvData.split('\n').slice(1);

test.describe('Login Tests using CSV Data', () => {

  for (const row of rows) {

    const [Username, Password, validity] = row.split(',');

    test(`Login Test for ${Username}`, async ({ page }) => {

      await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

      await page.fill('//input[@name="username"]', Username);
      await page.fill('//input[@name="password"]', Password);
      await page.click('//button[@type="submit"]');

      await page.waitForTimeout(2000);

      if (validity.trim() === 'valid') {
        console.log(`${Username} → Logged in successfully`);
      } else {
        console.log(`${Username} → Login failed`);
      }

    });

  }

});