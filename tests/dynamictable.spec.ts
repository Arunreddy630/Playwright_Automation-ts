import{test,expect} from '@playwright/test';
test('Dynamic table',async({page})=>
{
     await page.goto('https://testautomationpractice.blogspot.com/');
     var d=await page.locator('//table[@id="taskTable"]');
     await page.evaluate(() => window.scrollBy(0, 2200));
     // await page.waitForTimeout(20000);
     await expect(d).toBeVisible();
     
     //column names are:
     const columns:string[] = await page.locator('//table[@id="taskTable"]//thead//tr[@id="headers"]/th').allTextContents();
     console.log("Columns names are:", columns);

     // rows names
     const rows:string[]= await page.locator('//table[@id="taskTable"]//tbody[@id="rows"]/tr/td[1]').allTextContents();
     console.log("rows names are:"+rows);
     

     //particular row data
     const System:string[]= await page.locator('//table[@id="taskTable"]//tbody[@id="rows"]//tr[td[contains(text(),"System")]]').allTextContents(); 
     console.log("System data is :"+System);

     //particular row data with column names

     const headers = await page.locator('//table[@id="taskTable"]//thead//th').allInnerTexts();

      const Firefoxdata:string[] = await page.locator('//table[@id="taskTable"]//tbody[@id="rows"]//tr[td[text()="Firefox"]]/td').allInnerTexts();

     for(let i=0;i<headers.length;i++)
     {
      console.log(headers[i] + " : " + Firefoxdata[i]);
     }


});