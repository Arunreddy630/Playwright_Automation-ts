import { test} from '../Fixtures/loginPageFixture';

test('login page functionality',async({loginPage})=>
{
   await loginPage.usernameInput.fill("Admin");
   await loginPage.passwordInput.fill("admin123");
   await loginPage.loginButton.click();





});