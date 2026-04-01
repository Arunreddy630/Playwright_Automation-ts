import {test,expect} from '@playwright/test';
test('Getting Xpaths', async({page})=>
{

await page.goto('https://www.cricbuzz.com/cricket-match/live-scores');
 //var refer =await page.locator('//a[@href="/cricket-match/live-scores/upcoming-matches"]');

 //var refer =await page.locator('//*[@href="/cricket-match/live-scores/upcoming-matches"]');
  
 // var refer =await page.locator('(//a[contains(@class,"text-sm whitespace-nowrap capitalize flex-1 text-center no-underline p-4 wb:!px-0 wb:py-4 wb:ml-4 wb:mr-1  border-solid border-b-4 wb:flex-grow-0 font-bold border-cbWhite text-cbWhite wb:border-cbThmClrLgt wb:!text-cbThmClrLgt pointer-events-none ")])[2]');

 // var refer =await page.locator('//*[@href="/cricket-match/live-scores/upcoming-matches"][@target="_self"]');

  //var refer = await page.locator('(//a[@href="/cricket-match/live-scores/upcoming-matches" or @target="_self"])[8]');
   
 //var refer = await page.locator('//a[@href="/cricket-match/live-scores/upcoming-matches" or @class="text-sm whitespace-nowrap capitalize flex-1 text-center no-underline p-4 wb:!px-0 wb:py-4 wb:ml-4 wb:mr-1  border-solid border-b-4 wb:flex-grow-0 font-bold border-cbWhite text-cbWhite wb:border-cbThmClrLgt wb:!text-cbThmClrLgt pointer-events-none "][2]');

  // var refer= await page.locator('//a[contains(@href,"/cricket-match/live-scores/upcoming-matches")]');
  // var refer = await page.locator('//*[starts-with(text(),"Upcoming")]');
  //var refer=await page.locator('//*[ends-with(text(),"coming")]');
  var refer=await page.locator('//a[@href="/cricket-match/live-scores/upcoming-matches"]//nav//a[position()=3]');
  await refer.click();
  await page.waitForTimeout(20000);


    

    
    
});