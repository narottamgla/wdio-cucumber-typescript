import Page from "./BasePage";


class AccountSettingPage extends Page {

    get accountSettingLink() { return $("//div[text()='Manage how you sign in.']") }
    get accountSettingPageTitle() { return $("h1#Title span") }
    get changeEmailLink() { return $('[data-testid="Email_edit-btn"]') }
    get changePasswordLink() { return $('[data-testid="Password_edit-btn"]') }

    get otpCodeInput() { return $('div.otp-code-input') }
    get btnSubmit() { return $('[data-testid="BtnSubmit"]') }

    get btnCancel() { return $('[data-testid="BtnCancel"]') }
    get welcomeUser() { return $("(//a[@href='/profile'])[1]") }

    get moreSecurityLink() {return $("//a[text()='More security settings']")}
    get createAccountButton() {return $("h1.headline__title ")}

    get changeMobilePhoneTxBx() {return $("[data-testid='Phone_MOBILE_PhoneNumberInput-container'] input")}
    get changeHomePhoneTxBx() {return $("[data-testid='Phone_NIGHT_PhoneNumberInput'] input")}
    get verifyMobileNumberLink() {return $("//a[text()='Verify your mobile number']")}


    async clickAccountSettingLink() {
        await this.welcomeUser.waitForDisplayed({ timeout: 10000 });
        await this.clickElement(this.welcomeUser);
        await this.clickElement(this.accountSettingLink);

    }

    async validateNavigationToAccountSettingPage() {
        await browser.pause(20000)
        await browser.switchToParentFrame();
        await browser.switchToFrame(1);
        await this.accountSettingPageTitle.waitForDisplayed({ timeout: 10000 });
        await expect(this.accountSettingPageTitle).toBeDisplayed();
    }

    async clickEmailChange() {
        await browser.pause(20000)
        await this.clickElement(this.changeEmailLink)
    }

    async clickPasswordChange() {
        await browser.pause(20000)
        await this.clickElement(this.changePasswordLink)
    }

    async clickOTPCancel() {
        await browser.pause(20000)
        await this.clickElement(this.btnCancel)
    }

    async validateOTPScreen() {
        await this.otpCodeInput.waitForDisplayed({ timeout: 10000 });
        await expect(this.otpCodeInput).toBeDisplayed();
        await expect(this.btnCancel).toBeDisplayed();
        await expect(this.btnSubmit).toBeDisplayed();
    }

    async clickMoresecurityLink() {
        await browser.pause(20000)
        await this.clickElement(this.moreSecurityLink)
    }

    async validateMoresecurityPage() {
        await browser.pause(20000)

        const handles = await browser.getWindowHandles()
        for (var i = 0; i < (await browser.getWindowHandles()).length; i++) {
            console.log("Handles::" + handles[i])
            await browser.switchToWindow(handles[i])
        }
        await browser.pause(20000)
        await expect(await this.createAccountButton.isDisplayed()).toBe(true);
    }

    async changeMobileNumber(){
        await this.waitAndEnterData(this.changeMobilePhoneTxBx,"3232131231")
        await browser.pause(20000)
        await this.waitAndclick(this.changeMobilePhoneTxBx)
        await this.waitAndclick(this.verifyMobileNumberLink)
        await browser.pause(20000)

    }

    async changeHomeNumberNumber(){
        await this.waitAndEnterData(this.changeHomePhoneTxBx,"3232131231")
        await browser.pause(20000)
        await this.waitAndclick(this.verifyMobileNumberLink)
        await browser.pause(20000)
    }

    async validateSendCodeScreen(){
        await expect(await this.btnSubmit.isDisplayed()).toBe(true);

    }

    
    async clickMayBeLaterButton(){
        await this.waitAndclick(this.btnCancel);

    }

}

export default new AccountSettingPage();
