import {test,expect} from '@playwright/test';
import { clear } from 'node:console';
test('Clear Method',async({page})=>
{
   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
   var Uclear=await page.locator('//input[@name="username"]');
   var mydata = await page.locator('//input[@name="password"]');
   await Uclear.fill("Admin");
   await mydata.fill("admin123");
   await page.waitForTimeout(3000);

    // await clear();

   await Uclear.clear();
   await mydata.clear();

  await expect(Uclear).toHaveValue(''); 
  await expect(mydata).toHaveValue(''); 
  await page.waitForTimeout(3000); 

});