import {test,expect} from '@playwright/test';
test('Dropdown',async({page})=>
{
 await page.goto('https://testautomationpractice.blogspot.com/');
 const dropdown=page.locator('#colors>option');
 
 const dropdownbox:string[]=(await dropdown.allInnerTexts());
 
 /*
 const originallist:string[]=dropdownbox;
 const sortedlist:string[]=dropdownbox.sort();
 if(originallist==sortedlist)
 {
    console.log("true");
 }
 else 
 {
    console.log("false");
 }
*/
//console.log(originallist);
//console.log(sortedlist);

//expect(originallist).toEqual(sortedlist);
 
 const myset=new Set<string>();
 const duplicates:string[]=[];
 
for(const text in dropdownbox)
 {
   if(myset.has(text))
   {
    duplicates.push(text);
   }
   else
    {

      myset.add(text);
    }
    
 }

 console.log("Duplicates are :"+duplicates);



});