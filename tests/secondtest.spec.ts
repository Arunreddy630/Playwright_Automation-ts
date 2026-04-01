import { test, expect } from '@playwright/test';

test('addtocart Functionality', async ({ page }) => {
  await page.goto('https://www.amazon.in/?&tag=googhydrabk1-21&ref=pd_sl_5szpgfto9i_e&adgrpid=155259813593&hvpone=&hvptwo=&hvadid=674893540034&hvpos=&hvnetw=g&hvrand=10827336872603244692&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9075342&hvtargid=kwd-64107830&hydadcr=14452_2316413&gad_source=1');
  page.setDefaultTimeout(30000);

  // Search for iPhone 17 Pro
  const searchBox = page.locator('#twotabsearchtextbox');
  await searchBox.fill('cosmic orange iphone 17');
  await page.locator('#nav-search-submit-button').click();

 //await page.locator('xpath=/html/body/div[1]/div[1]/div[1]/div[1]/div/span[1]/div[1]/div[3]/div/div/div/div/span/div/div/div/div[2]/div/div/div[3]/div[1]/div/div[3]/div/div/div/div[2]/div/form/div/div/span/div/span/span/button').click();
 await page.locator('xpath=//*[@id="a-autoid-1-announce"]').click();
   //addtocart button click
  await page.locator('//*[@id="nav-cart-count"]').click();
  //await page.locator('#sw-gtc').click();
 // await page.setDefaultNavigationTimeout(30000);
  await page.setDefaultNavigationTimeout(30000);

 // await page.locator('//*[@id="nav-cart-count"]').click();

  //await page.locator('//*[@id="sc-buy-box-ptc-button"]/span/input').click();
  

});
