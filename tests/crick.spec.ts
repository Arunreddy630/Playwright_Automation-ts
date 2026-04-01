import{test,expect} from '@playwright/test';
test('crick',async({page})=>
{

    await page.goto('https://www.cricbuzz.com/');
     //var d=await page.url();
     //console.log(d);
  
    await page.locator("a[title='Cricket Rankings']").hover();

    await page.locator('//a[@title="ICC Rankings - Women"]').click();
    await page.locator('//*[@id="main-nav"]/a[2]').click();
    await page.locator('//div[@class="w-[65px] text-xs py-2 text-center rounded-full border border-solid border-cbThmClrLgtHvr whitespace-nowrap "]').click();
    await page.waitForTimeout(10000);
   
     const topBowler = await page.locator('main a[href*="/profiles/"] div.text-base.font-medium').first().innerText();
    //const topBowler = await page.locator('main a[href*="/profiles/"] div.text-base.font-medium').nth(0).innerText();

    console.log("Top T20 Bowler:", topBowler);
    await page.setDefaultNavigationTimeout(50000);



});