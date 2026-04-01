import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
   await page.goto('https://www.flipkart.com/');
   await page.locator('//span[contains(text(),"Login")]').click();
   await expect(page.locator('(//span[text()="Login"])[2]')).toBeVisible();


  await page.locator('form').filter({ hasText: 'Enter Email/Mobile numberBy' }).getByRole('textbox').click();
  await page.locator('form').filter({ hasText: 'Enter Email/Mobile numberBy' }).getByRole('textbox').fill('6300767126');
  await page.getByRole('button', { name: 'Request OTP' }).click();
  await page.waitForTimeout(30000);
  const searchBox = page.locator('(//input[@title="Search for Products, Brands and More"])[1]');
  await searchBox.fill("Apple iPhone 17 Pro Max");
  await searchBox.press('Enter');
   await page.getByRole('link', { name: 'iphone 17 pro 5g max in' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Apple iPhone 17 Pro Max (Silver, 256 GB) Add to Compare Apple iPhone 17 Pro Max' }).click();
  const page1 = await page1Promise;
  await page1.locator('._1psv1zeb9._1psv1ze0._7dzyg20 > div > .css-g5y9jx > svg').click();
  await page1.locator('.jlLn4z').click();
  await page1.getByRole('link', { name: 'Cart 3 Cart' }).click();


});



