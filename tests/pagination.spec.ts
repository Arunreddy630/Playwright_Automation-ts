import { test, expect } from '@playwright/test';

test('pagination tables', async ({ page }) => 
{
  await page.goto('https://testautomationpractice.blogspot.com/');

  const r = page.locator('//h2[contains(text(),"Pagination Web Table")]');
  await expect(r).toBeVisible();

   const columns =await page.locator('//table[@id="productTable"]//thead/tr').all();
   await page.evaluate(()=>{ window.scrollBy(0,1500)});
   await page.waitForTimeout(20000);
   for(let column of columns)
   {
    console.log("columns are "+await column.textContent());
   }
   
   const rows =await page.locator('//table[@id="productTable"]//tbody/tr').all();
   await page.evaluate(()=>{ window.scrollBy(0,1500)});
   
   for(let row of rows)
   {
    console.log(await row.textContent());
    
   }
     

  const pagecount = await page.locator('//ul[@id="pagination"]/li').count();
  console.log(`There are ${pagecount} pages in pagination table`);

  for (let p = 1; p <= pagecount; p++) 
    {
      const bluetooth = page.locator('//table[@id="productTable"]//tbody/tr[td[text()="Bluetooth Speaker"]]/td');
 
      await page.locator(`//ul[@id="pagination"]/li/a[text()="${p}"]`).click();

    if (await bluetooth.count() > 0) 
        {
            const data = await bluetooth.allTextContents();
            console.log(`Found on page ${p}`);
            console.log(data);
            break;
        }

  }
});