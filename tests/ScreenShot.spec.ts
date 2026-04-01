import {test,expect} from '@playwright/test';
test('ScreenShot Functionality',async({page})=>
{
  await page.goto('https://testautomationpractice.blogspot.com/');
//screenshot of a fullpage
  //await page.screenshot({path:'C:\\Users\\Syed\\OneDrive\\Desktop\\Tesing\\testautomation.png',fullPage:true});

  //screenshot of a particular element

  //const statictable=await page.locator('//table[@name="BookTable"]');
  //await statictable.screenshot({path:'C:\\Users\\Syed\\OneDrive\\Desktop\\Tesing\\statictable.png'});



  //drag and drop
await page.dragAndDrop('//div[@id="draggable"]','//div[@id="droppable"]');
await page.waitForTimeout(20000);

})