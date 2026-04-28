import {test,expect, Locator} from '@playwright/test';
test('CheckBox Functionality',async({page})=>
{
await page.goto('https://testautomationpractice.blogspot.com/');
var dd=await page.locator('//label[@for="male"]');
await dd.check();
/*
await page.evaluate(() =>
     {
        window.scrollBy(0,500);
     });
     */
  await page.waitForTimeout(10000);
  await expect(dd).toBeVisible();
  await expect(dd).toBeEnabled();

});
test('CheckBox',async({page})=>
{
 await page.goto('https://testautomationpractice.blogspot.com/');
 const SundayCheckbox=page.getByLabel('Sunday');
 const days:string[]=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
 const CheckBoxs:Locator[]=days.map(index=>page.getByLabel(index));
 expect(CheckBoxs.length).toBe(7);

 for(const CheckBox of CheckBoxs)
 {
    await CheckBox.check();
 }
});

test('CheckBox module',async({page})=>
{
 await page.goto('https://testautomationpractice.blogspot.com/');
 const SundayCheckbox=page.getByLabel('Sunday');
 const days:string[]=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
 const CheckBoxs:Locator[]=days.map(index=>page.getByLabel(index));
 expect(CheckBoxs.length);

 const lastThree = CheckBoxs.slice(-3);

for (const CheckBox of CheckBoxs.slice(-3)) 
    {
        await CheckBox.check();
   }
});
