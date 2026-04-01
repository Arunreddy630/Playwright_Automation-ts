import{test,expect} from '@playwright/test';
test('frames',async({page})=>
{
  await page.goto('https://www.hyrtutorials.com/');
  const dm = page.locator('(//a[contains(text(),"Selenium Practice")])[1]').hover();
  await page.locator('//a[contains(text(),"Frames Practice")]').click();
  //await page.waitForTimeout(10000);

  var frame3=await page.frameLocator('//iframe[@id="frm3"]');
  var frame2=frame3.frameLocator('//iframe[@id="frm2"]');
  await page.evaluate(() => window.scrollBy(0, 1500));
   await frame2.locator('//input[@id="firstName"]').fill("Arun");
   await frame2.locator('//input[@id="lastName"]').fill("kumar");

  
   var d=await page.locator('(//div[@id="body-wrapper"])[1]');
   await d.locator('(//input[@class="frmTextBox"])[1]').fill("frames");
  await page.waitForTimeout(10000);
});


