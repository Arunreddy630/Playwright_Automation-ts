import { test, expect } from '@playwright/test';

test('Window handling using index', async ({ page }) => {
  await page.goto('https://www.hyrtutorials.com/');

  await page.locator('//a[contains(text(),"Selenium Practice")]').hover();
  await page.locator('//a[contains(text(),"Window Handles")]').click();

  const newPagePromise = page.context().waitForEvent('page');
  await page.locator('//button[@id="newWindowBtn"]').click();
  await newPagePromise;
  const pages = page.context().pages();
  const pagescount=await pages.length;
  console.log(pagescount);
  for(const page of pages)
  {
    
  const title = await page.title();
  console.log('Child window title:', title);

  if(title==="Basic Controls - H Y R Tutorials")
  {
    await page.bringToFront();
    await page.waitForLoadState();
    await page.evaluate(() => window.scrollBy(0, 1500));   

     await page.locator('//input[@id="firstName"]').fill('Arun');
     await page.locator('//input[@id="lastName"]').fill('Kumar');
    await page.waitForTimeout(3000);
    await page.close();
  }
}

});