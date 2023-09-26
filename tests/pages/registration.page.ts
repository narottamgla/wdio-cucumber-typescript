import Page from "../pages/BasePage";

class RegistrationPage extends Page {

    get emailTxBx() { return $("div input#InputIdentityFlowValue") }
    get continueBtn() { return $("[data-testid='BtnSubmit']") }
    get createAccountPageTitle() { return $('#Title span') }
    get iframeId() { return $("#oneid-iframe") }
    get regFrame() { return $("oneid-wrapper") }
    get prefixDropDown() { return $('div #InputPrefix') }
    get prefixOption() { return $("//*[@id='InputPrefix']/option[text()='Miss']") }
    get firstNameTxBx() { return $("[data-testid='InputFirstName']") }
    get lastNameTxBx() { return $("[data-testid='InputLastName']") }
    get passwordTxBx() { return $("[data-testid='password-new']") }
    get dateBirthTxBx() { return $("[data-testid='InputDOB']") }

    get billingAddress1() { return $("[data-testid='BillingAddress-Line1Input']") }
    get billingAddress2() { return $("[data-testid='BillingAddress-Line2Input']") }
    get cityTxBx() { return $("[data-testid='BillingAddress-CityInput']") }
    get regisonTxBx() { return $("//select[@id='BillingAddress-RegionSelect']") }
    get postCodeTxBx() { return $("[data-testid='BillingAddress-PostalCode']") }
    get disneyTNC() { return $("[data-testid='WDW-NGE2-TOU']") }
    get createUserButton() { return $("//button[@id='BtnSubmit']") }
    get logoutButton() { return $("(*//a[@href='/authentication/logout/'])[1]") }
    get passwordError() { return $("#password-new-error") }



    get billingCountry() { return $("//select[@id='BillingAddress-CountrySelect']") }

    async navigateToRegistrationPage(useremail: string) {
        await console.log("Entering email on registration page")
        await this.iframeId.waitForDisplayed({ timeout: 30000 });
        await browser.switchToFrame(0);
        await browser.pause(2);
        await console.log("Switched to Iframe");
        await this.emailTxBx.waitForDisplayed({ timeout: 50000 });
        await this.emailTxBx.click();
        await this.waitAndEnterData(this.emailTxBx, useremail);
        await this.clickElement(this.continueBtn);
        // await browser.pause(40);
        await browser.switchToParentFrame();
        await browser.pause(4);
        await console.log("Entered email on registration page done")
    }


    async verifyUserNavigationToRegistrationPage() {
        await browser.pause(2);
        console.log("Verifying Navigation to reg page")
        // await this.regFrame.waitForDisplayed({ timeout: 30000 });
        await browser.switchToFrame(0);
        console.log("Verifying navigation to registration page")
        await this.createAccountPageTitle.waitForExist({ timeout: 30000 });
        await this.createAccountPageTitle.waitForDisplayed({ timeout: 10000 });
        await expect(this.createAccountPageTitle).toBeExisting();
        console.log("Navigation done to User Registration page")

    }


    async verifyIsLogOutButtonDisplayed() {
        await browser.pause(3000);
        browser.switchToParentFrame();
        await (await this.logoutButton).waitForDisplayed({ timeout: 30000 });
        await expect(this.logoutButton).toBeExisting();
        console.log("User registration done")
    }


    async enterUserDetails(prefix: string, fname: string, lname: string) {
        await this.waitAndEnterData(this.firstNameTxBx, fname);
        await this.waitAndEnterData(this.lastNameTxBx, lname);

    }

    async enterPasswordDOB(password: string, dob: string) {
        await browser.pause(2000);
        await this.waitAndEnterData(this.passwordTxBx, password);
        await browser.pause(2000);

        await this.waitAndEnterData(this.dateBirthTxBx, dob);
        await browser.pause(9000);


    }

    async enterBillingDetails(country: string, addressLine1: string, addressLine2: string, city: string, region: string, postalCode: string) {
        await browser.pause(3000);
        await this.clickElement(this.billingCountry);
        await browser.pause(1000);
        await this.selectDropdownByText(this.billingCountry, country);
        await browser.pause(2000);
        await this.waitAndEnterData(this.billingAddress1, addressLine1);
        await this.waitAndEnterData(this.billingAddress2, addressLine2);
        await this.waitAndEnterData(this.cityTxBx, city);
        await browser.pause(1000);
        await this.waitAndEnterData(this.postCodeTxBx, postalCode);
        await browser.pause(8000);
        /*  await this.clickElement(this.regisonTxBx);
          await browser.pause(1000);
          await this.selectDropdownByText(this.regisonTxBx, region);
          */

        try {
            if (await (await this.regisonTxBx).isExisting()) {
                //await this.clickElement(this.regisonTxBx);
                await browser.pause(1000);
                await this.selectDropdownByText(this.regisonTxBx, region);
            }
        } catch (error) {
            // Handle the case where this.regisonTxBx does not exist
            console.error("Element not found:", error.message);
            // You can add further error handling or logging here if needed
        }

        await browser.pause(8000);
        await browser.pause(8000);
    }


    async selectConsents() {
        await this.disneyTNC.click();

    }


    async clickUserRegistrationButton() {
        await browser.pause(8000);
        await this.createUserButton.click();
        await browser.switchToParentFrame();
    }

    async openApp() {
        await super.open('https://disneyworld.disney.go.com/login/');
        await browser.setTimeout({ 'pageLoad': 10000 })
        console.log("Opened registration page")
    }

    async validatePasswordErrorMessage(errorMsg: string) {
        await expect(await this.passwordError.getText()).toEqual(errorMsg);

    }

    async clickPrivacyAndTNCLinks(name: any) {

        (await $("=" + name + "")).click();
        const handles = await browser.getWindowHandles()
        await browser.switchToWindow(handles[1])
    }
}

export default new RegistrationPage();
