import { test } from '@playwright/test';
import * as XLSX from 'xlsx';

// Read Excel file
const workbook = XLSX.readFile('./Test Data/Exceldata.xlsx');

const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];

// Convert Excel data to JSON
const loginData: any[] = XLSX.utils.sheet_to_json(sheet);

test.describe('Login Tests using Excel Data', () => {

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