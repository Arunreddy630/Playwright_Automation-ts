import {test,expect} from '@playwright/test';
test ('Getattribute ', async({page})=>
{
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

await page.setDefaultTimeout(30000);
/*
  var uri=await page.locator('//input[@name="username"]').getAttribute('placeholder');

  var url=page.url();
  console.log(uri);
  console.log(url);
*/
await page.locator('//input[@name="username"]').fill("Admin");
await page.locator('//input[@name="password"]').fill("465873495296");
await page.locator('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[3]/button').click();
 
   var code =await page.locator('//*[@id="app"]/div[1]/div/div[1]/div/div[2]/div[2]/form/div[1]/div/div[2]/input').inputValue();
   console.log(code);
  //let data:string | null = await page.locator('//p[contains(.,"Invalid credentials")]').innerText();
   //let data1:string | null = await page.locator('//p[contains(.,"Invalid credentials")]').textContent();
   //let egyt:string[] = await page.locator('//p[contains(.,"Invalid credentials")]').allInnerTexts();
   //let hgefh:string[] = await page.locator('//p[contains(.,"Invalid credentials")]').allTextContents();

 
  //console.log(data);


  //await expect(page).toHaveTitle(/playwright/);

});