import {test,expect} from '@playwright/test';
test('Alerts',async({page})=>
{

 /* 
 await page.on('dialog',async me=>
 {
     console.log(me.message());
     await me.accept();
     var output=await page.locator('//button[@id="alertBox"]').textContent();
     console.log(output);
 });
 */

 /*
 await page.on('dialog',async ny=>
 {
  console.log(ny.message());
  await ny.dismiss();
  var dd=await page.locator('//button[@id="confirmBox"]').textContent();
  console.log(dd);
 });
 */
  await page.on('dialog',async dialog=>
 {
  console.log(dialog.message());
  await dialog.accept('Arun');

  var sr=await page.locator('//div[@id="output"]').textContent();
  console.log(sr);
 }); 

 await page.goto('https://www.hyrtutorials.com/p/alertsdemo.html');
 //await page.locator('//button[@id="alertBox"]').click();
 // await page.locator('//button[@id="confirmBox"]').click();

 await page.locator('//button[@id="promptBox"]').click();

 
});