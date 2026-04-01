import{test,expect} from '@playwright/test';
test('Drop Functionlaity',async({page})=>
{
  await page.goto('https://testautomationpractice.blogspot.com/');
  var dd=page.locator('#colors');
 // await dd.selectOption({value:'red'});
  //await dd.selectOption('red');
  //await dd.selectOption({index:1});
  await dd.selectOption({label:'Green'});


  await page.waitForTimeout(20000);

});