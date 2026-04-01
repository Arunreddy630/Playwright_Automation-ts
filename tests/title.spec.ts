import {test,expect} from '@playwright/test';

test('getby title',async({page})=>
{
 await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
 var title=await page.title();
 console.log(title);

 if(title=='OrangeHRM')
 {
    console.log("Correct title");
 }
 else
    {
        console.log("Incorrect title");
    } 

});
