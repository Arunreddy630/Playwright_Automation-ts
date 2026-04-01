import {test,expect, Locator} from '@playwright/test';

test('extract all product names', async ({ page }) => {

  await page.goto('https://testautomationpractice.blogspot.com/');

 const table = page.locator('table[name="BookTable"] tbody');
 await expect(table).toBeVisible();


 const rows=await page.locator('table[name="BookTable"] tbody tr').allInnerTexts();
 console.log(rows);
 //await expect(rows).toHaveCount(7);

 
 const columns=await page.locator('table[name="BookTable"] tbody tr th').allInnerTexts();
 //await expect(columns).toHaveCount(4);

 console.log(columns);



   const author = await page.locator("//table[@name='BookTable']//tr[td[text()='Master In Java']]/td[2]").textContent();
   const auamount=await page.locator('//table[@name="BookTable"]//tr[td[text()="Master In Java"]]//td[4]').textContent();
   console.log(author);
   console.log(auamount);

   const learnselenium:string[] = await page.locator("//table[@name='BookTable']//tr[td[text()='Master In Java']]/td").allTextContents();

   console.log("the nth row data is :"+learnselenium);
   
}); 



