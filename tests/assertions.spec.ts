import {test,expect} from '@playwright/test';
test('Assertions functionality',async({page})=>
{
  await page.goto('https://testautomationpractice.blogspot.com/');
  
  //hard Assertions
 await  expect(page).toHaveURL('https://testautomationpractice.blogspot.com/');
 await expect (page).toHaveTitle('Automation Testing Practice');

//Soft Assertions
 await  expect.soft(page).toHaveURL('https://testautomationpractice.blogspot.com/.l');
 await expect.soft (page).toHaveTitle('Automation Testing Practice');
 
});