import { test as base } from '@playwright/test';
import { LoginPage } from '../Pages/loginPage';

type MyFixtures = {
                loginPage: LoginPage;
                };

export const test = base.extend<MyFixtures>({
  loginPage: async ({ page }, use) =>
     {
        const loginPage = new LoginPage(page);
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        await use(loginPage);
        await page.waitForTimeout(30000);


  },
});
