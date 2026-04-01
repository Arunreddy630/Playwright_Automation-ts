import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.amazon.in/?&tag=googhydrabk1-21&ref=pd_sl_5szpgfto9i_e&adgrpid=155259813593&hvpone=&hvptwo=&hvadid=674893540034&hvpos=&hvnetw=g&hvrand=10827336872603244692&hvqmt=e&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9075342&hvtargid=kwd-64107830&hydadcr=14452_2316413&gad_source=1');
  await page.getByRole('searchbox', { name: 'Search Amazon.in' }).click();
  await page.getByRole('link', { name: 'Mobiles' }).click();
  await page.getByRole('link', { name: 'Apple Apple' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.locator('.s-widget-container.s-spacing-small.s-widget-container-height-small.celwidget.slot\\=MAIN.template\\=SEARCH_RESULTS.widgetId\\=search-results_11 > span > .puis-card-container > .a-section.a-spacing-base > .s-product-image-container > .rush-component > .a-link-normal').click();
  const page1 = await page1Promise;
  await page1.goto('https://www.amazon.in/iPhone-Pro-256-Promotion-Breakthrough/dp/B0FQFYYPZF/ref=sr_1_11?dib=eyJ2IjoiMSJ9.LG6bq8x3UBVLYCycnuD7Dp5Q_1QPnN3gEUF26sZR4CQQyVLXZJmWsDw6J_Akrk56Q-Wac1SzfVrKoIMYxujtKykBsvXgmTl9CHJAXdI2Kb0lAMZc3uNSFU5uOsGO2hcMGNTxMKZauzb8hqph5HJjn0_QWFsUBaRTHyGMRtAVuhRU6_tTPRL3X7V8W1Jp7F2PrSQ7usujVQFJPP3IiIppEkQDeyNEemtb_rUYFXazuXJBcdRgPZSztZ-74tJ3c-KFq7mVdOzejGaBjHhtN_EhLlkAundNJeB5wKkSNeLBXLY.rAycbwg2q9mAmoEzBamVSFuYQDMLHSiN-cJ-TCVmrI4&dib_tag=se&qid=1774435684&refinements=p_123%3A110955&rnid=91049095031&s=electronics&sr=1-11&th=1');
  await page1.getByRole('button', { name: 'Add to cart' }).click();
  await page.goto('https://www.amazon.in/s?rh=n%3A1389401031%2Cp_123%3A110955&dc&qid=1774435670&rnid=91049095031&ref=sr_nr_p_123_2');
  await expect(page.getByRole('link', { name: 'item in cart' })).toBeVisible();
  await page.getByRole('link', { name: 'item in cart' }).click();
});