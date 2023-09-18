import Page from "../pages/BasePage";


class LoginPage extends Page {

    get inputUsername() { return $("input#InputIdentityFlowValue") }
    get continueBtn() { return $("[data-testid='BtnSubmit']") }
    get inputPassword() { return $('[data-testid="InputPassword"]') }
    get btnSubmit() { return $('[data-testid="BtnSubmit"]') }
    get iframeId() { return $("#oneid-iframe") }
    get signOutLink() { return $("(//a[@href='/authentication/logout/'][contains(.,'Sign Out')])[1]") }
    get welcomeUser() { return $("(//a[@href='/profile'])[1]") }
    get signCreateButton() { return $("(//*[@id='navigationHeader']//div[2]/div[1]/a)[1]") }
    get fnfLink() { return $("//a[contains(@name,'&lid=WDW_Footer_MDX_FamilyFriends')]") }
    get loginErrorMsg(){ return $("#InputPassword-error")}



    async switchToFrame() {
        await browser.switchToFrame(0);
        await console.log("Switched to frame")
    }

    async login(username: string, password: string) {
        await this.iframeId.waitForDisplayed({ timeout: 30000 });
        await browser.switchToFrame(0);
        await browser.pause(2);
        await (await this.inputUsername).waitForDisplayed({ timeout: 30000 });
        await this.inputUsername.click();
        await this.waitAndEnterData(this.inputUsername, username);
        await this.clickElement(this.continueBtn);
        await this.waitAndEnterData(this.inputPassword, password);
        await this.waitAndclick(this.btnSubmit);
        await browser.pause(18000);
    }

    async loginExistingUser(username: string, password: string) {
      //  await browser.pause(8000);
       // await browser.switchToParentFrame();
        await browser.pause(8000);
        await this.iframeId.waitForDisplayed({ timeout: 30000 });
        await browser.switchToFrame(0);
        await browser.pause(2000);
        await (await this.inputUsername).waitForDisplayed({ timeout: 30000 });
        await this.inputUsername.click();
        await this.waitAndEnterData(this.inputUsername, username);
        await this.clickElement(this.continueBtn);
        await this.waitAndEnterData(this.inputPassword, password);
        await this.waitAndclick(this.btnSubmit);
        await browser.pause(18000);
    }

    async validateLogin() {
        await browser.pause(18000);
        await browser.switchToParentFrame();
        await this.signOutLink.waitForDisplayed({ timeout: 10000 });
        await expect(this.signOutLink).toBeExisting();
        await expect(this.welcomeUser).toBeExisting();
        await expect(this.fnfLink).toBeDisplayed();
    }

    async validateLoginError(){
        await browser.pause(18000);
       /// await browser.switchToParentFrame();
        await this.loginErrorMsg.waitForDisplayed({ timeout: 10000 });
        await expect(this.loginErrorMsg).toBeExisting();
    }

    async openApp() {
        await super.open('https://disneyworld.disney.go.com/login');
        await browser.setTimeout({ 'pageLoad': 10000 })
    }

    async performLogout() {
        await (await this.signOutLink).click();
    }

    async validateLogout() {
        await browser.pause(8000);
        await this.signCreateButton.waitForExist({ timeout: 10000 });
        await expect(await this.signCreateButton.getText()).toContain("Sign In or Create Account");
    }


}

export default new LoginPage();
