import {test,expect} from '@playwright/test';
test('frames',async({page})=>
{
  await page.goto('https://demo.automationtesting.in/Frames.html');
  var frame1=await page.frameLocator('//iframe[@id="singleframe"]');
  await frame1.locator('//input[@type="text"]').fill("Arunkumar");
   var mm=await frame1.locator('//input[@type="text"]').inputValue();
   console.log(mm);

   page.setDefaultNavigationTimeout(20000);


});


test.only ('Iframes',async({page})=>
{
  await page.on('dialog',async dialog=>
  {
   console.log(dialog.message());
    dialog.accept();

  });

  await page.goto('https://vinothqaacademy.com/iframe/');
  var dd = page.frameLocator('iframe[name="employeetable"]');
  await dd.locator('//input[@id="nameInput"]').fill('Arun kumar');
  await dd.locator('//input[@id="roleInput"]').fill("QA Engineer");
  await dd.locator('//button[@id="addBtn"]').click();

 



});
