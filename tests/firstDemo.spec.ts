import { test, expect } from '@playwright/test';

test('search functionality', async ({ page }) => {


  await page.goto('https://www.amazon.in/?&tag=googhydrabk1-21&ref=pd_sl_5szpgfto9i_e&adgrpid=155259813593&hvpone=&hvptwo=&hvadid=674893540034&hvpos=&hvnetw=g&hvrand=10827336872603244692&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9075342&hvtargid=kwd-64107830&hydadcr=14452_2316413&gad_source=1');
  page.setDefaultTimeout(30000);

  const searchBox = page.locator('#twotabsearchtextbox');
  await searchBox.fill('iPhone 17 Pro');
  await page.locator('#nav-search-submit-button').click();
  await expect(page).toHaveURL(/iphone/i);

  await expect(page.locator('.s-search-results')).toBeVisible();

  
}
);
