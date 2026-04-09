import { test, expect } from '@playwright/test';

test.only('Handle child window and validate URL', async ({ page }) => {

  await page.goto('https://www.globalsqa.com/demo-site/frames-and-windows/#Open%20New%20Window');


  await page.locator('//li[@id="Open New Window"]').click();

  const [childPage] = await Promise.all([
    page.waitForEvent('popup'),
    page.locator('(//a[contains(text(),"Click Here")])[2]').click()
     ]);

  await childPage.waitForLoadState();

  const childUrl = childPage.url();
  console.log('Child page URL is: ' + childUrl);


  await expect(childPage).toHaveURL('https://www.globalsqa.com/demo-site/frames-and-windows/#');

  


});