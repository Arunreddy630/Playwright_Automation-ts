import {test,expect} from '@playwright/test';
test('Date Pic Functionality',async({page})=>
{
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.evaluate(()=>{window.scrollBy(0,2000)});
    const date= await page.locator('//input[@id="datepicker"]');
    await date.fill("03/17/2026");


    

    await expect(date).toHaveValue("03/17/2026");
    
});

test('DatePic Range Functionality',async({page})=>
{
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.evaluate(()=>{window.scrollBy(0,2000)});
    const startdate= await page.locator('#start-date');
    const enddate= await page.locator('#end-date');
    await startdate.fill("04-09-2001");
    await enddate.fill("19-01-2002");
    const submitbtn=await page.locator('(//button[contains(text(),"Submit")])[1]');
    await submitbtn.click();

    
    

    await expect(startdate).toHaveValue("04-09-2001");
    await expect(enddate).toHaveValue("19-01-2002");
    
    
});




test.only('DatePic Range from popup Functionality',async({page})=>
{
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.evaluate(()=>{window.scrollBy(0,2000)});
    
  await page.locator('//input[@id="datepicker"]').click();
     // Select year from dropdown 
   await page.locator('//span[@class="ui-datepicker-year"]').selectOption('2026');
    //select month
   await page.locator('//span[@class="ui-datepicker-month"]').selectOption('March');
    // Click day
   await page.locator('//a[text()="17"]').click();
   await page.waitForTimeout(10000);

});