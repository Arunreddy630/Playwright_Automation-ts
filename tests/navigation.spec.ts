import{test,expect} from '@playwright/test';
test('navigation',async({page})=>
{
    await page.goto("https://www.google.com/");
    await page.locator('//a[@aria-label="Gmail "]').click();
    var url=await page.url();
    await page.waitForURL(url);
    await page.goBack(); 
    
/*
   await page.waitForTimeout(20000);
   await page.waitForURL('https://workspace.google.com/intl/en-US/gmail/');
   await page.goForward();
  */
  await page.waitForTimeout(20000);
  await page.reload();




});