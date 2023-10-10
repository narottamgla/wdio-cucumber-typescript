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
    get loginErrorMsg() { return $("#InputPassword-error") }

    async switchToFrame() {
        await browser.switchToFrame(0);
        await console.log("Switched to frame")
    }

    async login(username: string, password: string) {
        await this.iframeId.waitForDisplayed({ timeout: 30000 });
        await browser.switchToFrame(1);
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
        try {
            await browser.pause(8000);
            await browser.switchToParentFrame();
            await browser.pause(8000);
        } catch (error) {
            console.log("Error while switching to parent frame")
        }
        try{
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

        }catch(error){
        console.log("Error while switching to Child frame")
        await browser.switchToParentFrame();
        await browser.switchToFrame(1);
        await (await this.inputUsername).waitForDisplayed({ timeout: 30000 });
        await this.inputUsername.click();
        await this.waitAndEnterData(this.inputUsername, username);
        await this.clickElement(this.continueBtn);
        await this.waitAndEnterData(this.inputPassword, password);
        await this.waitAndclick(this.btnSubmit);
        await browser.pause(18000);
        }
    }

    async validateLogin() {

        try {
            await browser.pause(18000);
            await browser.switchToParentFrame();

            if (await (await this.signOutLink).isExisting()) {
                await this.signOutLink.waitForDisplayed({ timeout: 10000 });
                await expect(this.signOutLink).toBeExisting();
                await expect(this.welcomeUser).toBeExisting();
                await expect(this.fnfLink).toBeDisplayed();
            } else {
                // Handle the "else" case when this.signOutLink doesn't exist
                console.error("Sign Out link not found.");
                // You can add further error handling or logging here if needed
            }

            if (await this.continueBtn.isExisting()) {
                await expect(this.continueBtn).toBeExisting();
            } else {
                // Handle the "else" case when this.continueBtn doesn't exist
                console.error("Continue button not found.");
                // You can add further error handling or logging here if needed
            }
        } catch (error) {
            // Handle any other unexpected errors
            console.error("An error occurred:", error.message);
            // You can add further error handling or logging here if needed
        }
    }

    async validateLoginError() {
        await browser.pause(18000);
        /// await browser.switchToParentFrame();
        await this.loginErrorMsg.waitForDisplayed({ timeout: 10000 });
        await expect( this.loginErrorMsg.isDisplayed()).toBe(true);
    }

    async validateLoginErrorMessage(errorMsg: string) {
        await browser.pause(18000);
        await browser.switchToFrame(null);
        await this.loginErrorMsg.waitForDisplayed({ timeout: 10000 });
        await expect((await this.loginErrorMsg.getText()).indexOf(errorMsg) > -1).toBe(true);
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
        await browser.deleteSession();

    }


}

export default new LoginPage();
