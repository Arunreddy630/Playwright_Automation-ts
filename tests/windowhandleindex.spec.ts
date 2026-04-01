import { test, expect } from '@playwright/test';

test('Window handling using index', async ({ page }) => {
  await page.goto('https://www.hyrtutorials.com/');

  await page.locator('//a[contains(text(),"Selenium Practice")]').hover();
  await page.locator('//a[contains(text(),"Window Handles")]').click();

  const newPagePromise = page.context().waitForEvent('page');
  await page.locator('//button[@id="newWindowBtn"]').click();
  await newPagePromise;
  const pages = page.context().pages();
  const childwd = pages[1];
  await childwd.bringToFront();
  await childwd.waitForLoadState();

  const title = await childwd.title();
  console.log('Child window title:', title);
  await childwd.evaluate(() => window.scrollBy(0, 1500));   

  await childwd.locator('//input[@id="firstName"]').fill('Arun');
  await childwd.locator('//input[@id="lastName"]').fill('Kumar');
  await childwd.waitForTimeout(3000);
  await childwd.close();


  const parentwd=pages[0];
  await parentwd.bringToFront();
  await parentwd.locator('//input[@id="name"]').fill("gdjhagsvhagb");
  await parentwd.waitForTimeout(3000);
});