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
    get regisonTxBx() { return $("[data-testid='BillingAddress-RegionInput']") }
    get postCodeTxBx() { return $("[data-testid='BillingAddress-PostalCode']") }
    get disneyTNC() { return $("[data-testid='WDW-NGE2-TOU']") }
    get createUserButton() { return $("//button[@id='BtnSubmit']") }
    get logoutButton() { return $("(*//a[@href='/authentication/logout/'])[1]") }


    async navigateToRegistrationPage(useremail: string) {
        await console.log("Entering email on registration page")
        await this.iframeId.waitForDisplayed({ timeout: 30000 });
        await browser.switchToFrame(0);
        await browser.pause(2);
        await console.log("Switched to Iframe");
        await this.emailTxBx.waitForDisplayed({ timeout: 50000 });
        await this.emailTxBx.click();
        await this.waitAndEnterData(this.emailTxBx, Math.random() * 3242424242 + useremail);
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
        await browser.pause(3);
        await (await this.logoutButton).waitForDisplayed({ timeout: 30000 });
        await expect(this.logoutButton).toBeExisting();
        console.log("User registration done")
    }


    async enterUserDetails(prefix: string, fname: string, lname: string) {
        await this.waitAndEnterData(this.firstNameTxBx, fname);
        await this.waitAndEnterData(this.lastNameTxBx, lname);

    }

    async enterPasswordDOB(password: string, dob: string) {
        await this.waitAndEnterData(this.passwordTxBx, password);
        await this.waitAndEnterData(this.dateBirthTxBx, dob);

    }


    async enterBillingDetails(country: string, addressLine1: string, addressLine2: string, city: string, region: string, postalCode: string) {
        //  await this.waitAndEnterData(this.inputUsername, country);
        await this.waitAndEnterData(this.billingAddress1, addressLine1);
        await this.waitAndEnterData(this.billingAddress2, addressLine2);
        await this.waitAndEnterData(this.cityTxBx, city);
        await this.waitAndEnterData(this.regisonTxBx, region);
        await this.waitAndEnterData(this.postCodeTxBx, postalCode);
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
        await super.open('https://disneyworld.disney.go.com/registration/');
        await browser.setTimeout({ 'pageLoad': 10000 })
        console.log("Opened registration page")
    }
}

export default new RegistrationPage();
