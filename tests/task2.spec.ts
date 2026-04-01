import{test,expect} from '@playwright/test';

test("facebook",async({page})=>{
    await page.goto("https://www.facebook.com/login.php/");
    await page.locator("//a[contains(text(),'More languages…')]").click();
    await page.waitForTimeout(2000);
    const c = page.locator('//div[@role="dialog"]//div[@role="button"]');
    const count=await c.count();
    console.log(count);
    for(let i=0;i<count;i++){
        const country = await c.nth(i).textContent();
        console.log(country);
        if(country?.trim()==='తెలుగు'){
            await c.nth(i).click();
            await page.waitForTimeout(3000);
            break;
        }
    }
});
