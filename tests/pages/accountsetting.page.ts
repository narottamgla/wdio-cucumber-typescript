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
    get createAccountButton() {return $("h1.headline__title")}

    get changeMobilePhoneTxBx() {return $("[data-testid='Phone_MOBILE_PhoneNumberInput-container'] input")}
    get changeHomePhoneTxBx() {return $("[data-testid='Phone_NIGHT_PhoneNumberInput'] input")}
    get verifyMobileNumberLink() {return $("//a[text()='Verify your mobile number']")}
    get countryropdown() {return $("select#Phone_MOBILE_CountryCodeSelect")}
    get countryropdownOption() {return $("//*[@id='Phone_MOBILE_CountryCodeSelect']/option[text()='United States']")}

    
    get learnMorePage() {return $("div h1 span.product-name")}
    get learnMoreLink() {return $("//a[text()='Learn More']")}

    get manageEmailSubscriptionLiink() {return $("//a[text()='Manage your email subscriptions']")}

    get emailSubscriptionPageTitle() {return $("div h1.emailPreferencesTitle")}

    get changeBillingAddressLink() {return $("[data-testid='Address-BILLING_edit-btn'] svg")}

    get updateShippingAddress() {return $("[data-testid='Address-SHIPPING_edit-btn'] svg")}

    get billingAddress() {return $("(//*[@class='field__content']/address)[1]")}

    get shippingAddress() {return $("(//*[@class='field__content']/address)[2]")}

    get cityUpdateTxBx() {return $("input.input-BillingAddress-CityInput")}

    get pincodeUpdateTxBx() {return $("input.input-BillingAddress-PostalCode")}


    async clickAccountSettingLink() {
        await browser.pause(30000)
        await this.welcomeUser.waitForDisplayed({ timeout: 10000 });
        await this.clickElement(this.welcomeUser);
        await this.clickElement(this.accountSettingLink);

    }

    async validateNavigationToAccountSettingPage() {
        await browser.pause(30000)
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
        await browser.pause(40000);
        await this.moreSecurityLink.click();
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

    async clickLearnMoreLink() {
        await browser.pause(20000);
        await this.learnMoreLink.click();
    }

    async ClickManageEmailSubscription() {
        await browser.pause(20000);
        await this.manageEmailSubscriptionLiink.click();
    }
    async validateLearnMoreTab() {
        await browser.pause(20000)

        const handles = await browser.getWindowHandles()
        for (var i = 0; i < (await browser.getWindowHandles()).length; i++) {
            console.log("Handles::" + handles[i])
            await browser.switchToWindow(handles[i])
        }
        await browser.pause(20000)
        await expect(await this.learnMorePage.isDisplayed()).toBe(true);
    }


    async validateManageEmailSubscripionTav() {
        await browser.pause(20000)

        const handles = await browser.getWindowHandles()
        for (var i = 0; i < (await browser.getWindowHandles()).length; i++) {
            console.log("Handles::" + handles[i])
            await browser.switchToWindow(handles[i])
        }
        await browser.pause(20000)
        await expect(await this.emailSubscriptionPageTitle.isDisplayed()).toBe(true);
    }

    async verifyMobilenNumber(){
        await this.waitAndclick(this.verifyMobileNumberLink)
        await browser.pause(20000)

    }


    async changeMobileNumber(){
        await browser.scroll(0, 300)
        await browser.pause(20000)
        await this.waitAndEnterData(this.changeMobilePhoneTxBx,"3232131231")
        await browser.pause(40000)
        await this.countryropdown.click();
        await this.countryropdownOption.click();
        await browser.pause(20000)

    }


    async changeHomeNumber(){
        await browser.scroll(0, 300)
        await browser.pause(20000)
        await this.waitAndEnterData(this.changeHomePhoneTxBx,"3232131231")
        await browser.pause(40000)
        await this.countryropdown.click();
        await this.countryropdownOption.click();
        await browser.pause(20000)

    }

    async changeHomeNumberNumber(){
        await this.waitAndEnterData(this.changeHomePhoneTxBx,"3232131231")
        await browser.pause(20000)
        await this.waitAndclick(this.verifyMobileNumberLink)
        await browser.pause(20000)
    }

    async validateSendCodeScreen(){
        try {
            await browser.pause(20000);
            await this.btnSubmit.waitForDisplayed({ timeout: 20000 });
            await expect(await this.btnSubmit.isDisplayed()).toBe(true);
        } catch (error) {
            console.log("Catch Block success");
            await browser.switchToParentFrame();
            await browser.switchToFrame(0);    
            await this.btnSubmit.waitForDisplayed({ timeout: 20000 });
            await expect(await this.btnSubmit.isDisplayed()).toBe(true);
        }
    }
    async clickDoneButton() {
        await this.waitAndclick(this.btnSubmit);
    }
    
    async clickMayBeLaterButton(){
        await this.waitAndclick(this.btnCancel);

    }

    async validateUpdatedBillingAddress(pincode: string, city: string) {
        await expect(await (await this.billingAddress).getText()).toContain(city);
        await expect(await (await this.billingAddress).getText()).toContain(pincode);
    }
    async changeBillingAddress(pincode: string, city: string) {
        this.changeBillingAddressLink.click();
        this.waitAndEnterData(this.pincodeUpdateTxBx,pincode);
        this.waitAndEnterData(this.cityUpdateTxBx,city);
        this.btnSubmit.click();
    }


    async changeShippingAddress(pincode: string, city: string) {
        this.updateShippingAddress.click();
        this.waitAndEnterData(this.pincodeUpdateTxBx,pincode);
        this.waitAndEnterData(this.cityUpdateTxBx,city);
        this.btnSubmit.click();
    }

    async validateUpdatedShippingAddress(pincode: string, city: string) {
        await expect(await (await this.shippingAddress).getText()).toContain(city);
        await expect(await (await this.shippingAddress).getText()).toContain(pincode);
    }
    

}

export default new AccountSettingPage();
