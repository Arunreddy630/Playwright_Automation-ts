import {test,expect} from '@playwright/test';
test(' login with incorrect credentilas',async({page})=>
{

await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
 
 await page.locator('//input[@placeholder="Username"]').fill("Admin");
 await page.locator('//input[@placeholder="Password"]').fill("111");
 await page.locator('//button[@type="submit"]').click();


  let data:string | null=await page.locator("//p[contains(.,'Invalid credentials')]").textContent();
  console.log(data);
 
  //var test1=await page.locator("//p[contains(.,'Invalid credentials')]").innerText();
  //console.log(test1);
 
  

   var test2=await page.locator("//p[contains(.,'Invalid credentials')]").allTextContents();
   console.log(test2);

 //var test1=await page.locator("//p[contains(.,'Invalid credentials')]").allInnerTexts();
 //console.log(test1);

});
