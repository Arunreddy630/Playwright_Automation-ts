import {test,expect} from '@playwright/test';
test('Window Handling',async ({page})=>
{
   await page.goto('https://www.hyrtutorials.com/');

   
   await page.locator('//a[contains(text(),"Selenium Practice")]').hover();
   
   await page.locator('//a[contains(text(),"Window Handles")]').click();

   const [newpage]=await Promise.all([page.waitForEvent('popup'),page.locator('//button[@id="newWindowBtn"]').click()]);
   await newpage.waitForLoadState();
   var title=await newpage.title();
   console.log(title);
   await newpage.evaluate(()=>{window.scrollBy(0,1500)});

   await newpage.locator('//input[@id="firstName"]').fill("Arunkumar");
   await newpage.locator('//input[@id="lastName"]').fill("Reddy");
   // await page.waitForTimeout(20000);
   await newpage.close();
   



});