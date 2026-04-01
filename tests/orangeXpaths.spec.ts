import {test,expect} from '@playwright/test';
test('Getting Xpaths', async({page})=>
{

await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

var foll=await page.locator('(//div[@class="oxd-input-group__label-wrapper"]/following::input[@class="oxd-input oxd-input--active"])[1]');

await foll.fill("Admin");

await page.waitForTimeout(2000);


});