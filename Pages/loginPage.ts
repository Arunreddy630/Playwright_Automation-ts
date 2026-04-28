import { Locator, Page } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly myinfo: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.locator('//input[@name="username"]');
        this.passwordInput = page.locator('//input[@name="password"]');
        this.loginButton = page.locator("//button[@type='submit']");
        this.myinfo = page.locator('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[6]/a/span');
    }
}