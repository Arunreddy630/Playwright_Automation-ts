import {test,expect} from '@playwright/test';
test('Title',async({page,browser,context})=>
{
      
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  /*
   //var data=await page.locator('//input[@placeholder="Username"]').getAttribute("placeholder");
   //console.log(data);

   //var dataa=await page.locator('//input[@placeholder="Password"]').getAttribute("placeholder");
   //console.log(dataa);



  var dam=await page.locator('//*[@placeholder="Username"]');
  await dam.fill("admin");
  await page.waitForTimeout(3000);

   //var dd=await page.locator('//*[@placeholder="Username"]').inputValue();
   //console.log(dd);
   var dj=await page.locator('//*[@placeholder="Password"]');
    await dj.fill("111");
    await page.waitForTimeout(3000);
   await dj.clear();
   await dam.clear();

   await expect(dam).toHaveValue('');
   await expect(dj).toHaveValue('');

   await page.waitForTimeout(3000);
   


  // var data1=await page.locator('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/div/div[1]/div[1]/p').innerText();
  // console.log(data1);

    
*/
var data=await page.title();
var title='OrangeHRM';
if(title==data)
{
    console.log("Correct titile");
}
else 
{
    console.log("incorrect title");
}

await expect(page).toHaveTitle('OrangeHRM');
await page.close();
await context.close();
await browser.close();

});

