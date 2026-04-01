import{test,expect} from '@playwright/test';
test('task1',async({page})=>
{

    await page.goto('https://accounts.google.com/v3/signin/identifier?dsh=S671424011%3A1773290700544912&ifkv=ASfE1-rG2pa9ikzGFSWrHaKvDvy8ufqDrvO0Iozl_Qj2umDhnD8aJlVAMQK_FO9RL-seqWeaSEJpqg&flowName=GlifWebSignIn&flowEntry=ServiceLogin');
     await page.locator('//div[@class="VfPpkd-aPP78e"]').click();
    const languages = page.locator('//ul[@aria-label="Change language"]//li');
    const languageElements = await languages.elementHandles();
     var texts:string[]=await languages.allInnerTexts();
    console.log(texts);

    let selectlan='';
    for(var langEl of languageElements)
    {
       
        let text = (await langEl.innerText()).trim();
          if (text === 'English (United States)') 
            {
            await langEl.click();
            selectlan = text;
            }
             
    }
    if(selectlan=='English (United States)')
    {
        console.log("validation is correct");
    }
    else
    {
        console.log("validation is incorrect");
    }
 

    await page.waitForTimeout(10000);
  
});



