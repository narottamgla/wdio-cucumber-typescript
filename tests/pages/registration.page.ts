import { password } from "../data/random";
import Page from "../pages/BasePage";

class RegistrationPage extends Page {


    get emailTxBx() { return $("div input#InputIdentityFlowValue") }
    get emailTxBx1() { return $("#InputIdentityFlowValue") }
    get continueBtn() { return $("[data-testid='BtnSubmit']") }
    get createAccountPageTitle() { return $('#Title span') }
    get iframeId() { return $("#oneid-iframe") }
    get regFrame() { return $("oneid-wrapper") }
    get prefixDropDown() { return $('div #InputPrefix') }
    get prefixOption() { return $("//*[@id='InputPrefix']/option[text()='Miss']") }
    get firstNameTxBx() { return $("[data-testid='InputFirstName']") }
    get lastNameTxBx() { return $("[data-testid='InputLastName']") }
    get passwordTxBx() { return $("[data-testid='password-new']") }

    get passwordTxBxPortal() { return $("[data-testid='InputPassword']") }

    get dateBirthTxBx() { return $("[data-testid='InputDOB']") }

    get billingAddress1() { return $("[data-testid='BillingAddress-Line1Input']") }
    get billingAddress2() { return $("[data-testid='BillingAddress-Line2Input']") }
    get cityTxBx() { return $("[data-testid='BillingAddress-CityInput']") }
    get regisonTxBx() { return $("//select[@id='BillingAddress-RegionSelect']") }
    get postCodeTxBx() { return $("[data-testid='BillingAddress-PostalCode']") }
    get disneyTNC() { return $("[data-testid='WDW-NGE2-TOU']") }
    get disneyTNC1() { return $("[data-testid='GTOU']") }

    get disneyTNC2() { return $("[data-testid='GTOU-text']") }

    get disneyTNC3() { return $("[data-testid='ppv2_pp-supplement-my']") }

    get disneyTNC4() { return $("[data-testid='DISNEY-EU-SHAREINFO-COOKIE-ACCEPT-text']") }


    get createUserButton() { return $("//button[@id='BtnSubmit']") }
    get logoutButton() { return $("(*//a[@href='/authentication/logout/'])[1]") }
    get passwordError() { return $("span[data-testid='password-new-error']") }
    get billingCountry() { return $("//select[@id='BillingAddress-CountrySelect']") }
    get termOfUsePageText() { return $(".fl-post-header h1") }
    get privacyPolicyPageText() { return $(".animated.bounceInUp h1") }
    get disneyExpHeaderText() { return $(".header-text h1"); }
    get editCountryButton() { return $("#UpdateLegalCountry > a"); }
    get changeCountryDropdown() { return $("//select[@id='InputSelect']") }
    get changeCountryDoneButton() { return $("[data-testid='BtnSubmit']") }
    get countryNameLabelOnRegPage() { return $("#UpdateLegalCountry") };

    get termsAndConditionOnLogin() { return $("[data-testid='DLR-NGE-TOU']") }
    get termsAndConditionOnLoginCruise() { return $("[data-testid='DCL-NGE-TOU-text']") }
    get agreeAndContinueButton() { return $("[data-testid='BtnSubmit']") }
    get signMeOutButton() { return $("[data-testid='BtnCancel']") }
    //disneyland

    get SignInRegister() { return $("(//*[contains(@class, 'accountContainer')])[1]") }

    async navigateToRegistrationPage(useremail: any) {
        await console.log("Entering email on registration page")
        try {
            await browser.switchToParentFrame();
        } catch (error) {
            console.error("Error while switching to parent frame")
            await browser.switchToFrame(null);
        }
        for (let i = 0; i < 3; i++) {

            try {
                console.log("Entering user registered email")
                await browser.pause(10000);
                await this.iframeId.waitForDisplayed({ timeout: 1000 });
                //  await browser.switchToParentFrame();
                await browser.pause(5000);
                await browser.switchToFrame(i);
                await this.emailTxBx.waitForDisplayed({ timeout: 5000 });
                await this.emailTxBx.click();
                await this.waitAndEnterData(this.emailTxBx, useremail);
                await this.clickElement(this.continueBtn);
                await console.log("Entered email on registration page done with Frame : " + i)
                break;

            } catch (error) {
                await browser.switchToParentFrame();
                console.log("Error occurred with frame Id: " + i)
            }
        }
        await browser.pause(14000);
        await browser.switchToParentFrame();
        await browser.pause(4000);
        await console.log("Entered email on registration page done")
    }

    async navigateToTermsAndConditionPage(useremail: string, password: string) {
        await console.log("Entering email on registration page")
        for (let i = 0; i < 4; i++) {
            try {
                await browser.pause(5000);
                await browser.switchToParentFrame();
                await this.iframeId.waitForDisplayed({ timeout: 5000 });
                await browser.pause(2000);
                await browser.switchToFrame(i);
                await browser.pause(2000);
                await console.log("Switched to Iframe: " + i);
                await this.emailTxBx1.waitForDisplayed({ timeout: 5000 });
                // await this.emailTxBx1.click();
                await console.log("Clicked email Text Box")
                await (await this.emailTxBx1).setValue(useremail);
                await console.log("Entered value to email Text Box")
                await this.clickElement(this.continueBtn);
                console.log("switched with frame id:" + i)
                await browser.pause(5000);
                break;

            } catch (error) {
                console.log("In Error Block of Email Text Box: " + error)
            }
        }

        console.log("Entered email on registration page done")

        for (let i = 0; i < 5; i++) {
            try {
                console.log("Entering password ..");
                await browser.switchToParentFrame();
                await browser.pause(4000);
                await browser.switchToFrame(i)
                // await this.passwordTxBx.setValue(password);
                await this.passwordTxBxPortal.setValue("disney123");
                await this.continueBtn.click();
                await browser.pause(4000);
                console.log("Entered password and clicked continue button..");
                break;
            }
            catch (error) {
                console.log("Error occurred while entering password: " + i)

            }
        }
    }

    async verifyUserNavigationToRegistrationPage() {
        await browser.pause(10000);
        await browser.switchToFrame(null);
        // await this.regFrame.waitForDisplayed({ timeout: 30000 });
        try {
            // await browser.switchToParentFrame();
            await browser.switchToFrame(0);
            console.log("Verifying navigation to registration page")
            await this.createAccountPageTitle.waitForDisplayed({ timeout: 10000 });
            await expect(this.createAccountPageTitle).toBeExisting();
            console.log("Navigation done to User Registration page")
        } catch (error) {
            console.log("In Error Block")
            await browser.switchToParentFrame();
            await browser.switchToFrame(1);
            await this.createAccountPageTitle.waitForDisplayed({ timeout: 10000 });
            await expect(this.createAccountPageTitle).toBeExisting();
            console.log("Navigation done to User Registration page")

        }
    }

    async validateTermsAndConditionPage(portalName: string) {
        if (portalName == "disneyland") {
            await browser.pause(30000);
            browser.switchToParentFrame();
            browser.switchToFrame(0);
            await this.termsAndConditionOnLogin.waitForDisplayed({ timeout: 30000 });
            await this.termsAndConditionOnLogin.click();
            await expect(await this.agreeAndContinueButton.isDisplayed()).toBe(true);
            await expect(await this.signMeOutButton.isDisplayed()).toBe(true);
        }

        if (portalName == "disneycruise") {
            await browser.pause(30000);
            browser.switchToParentFrame();
            browser.switchToFrame(0);
            await this.termsAndConditionOnLoginCruise.waitForDisplayed({ timeout: 30000 });
            await this.termsAndConditionOnLoginCruise.click();
            await expect(await this.agreeAndContinueButton.isDisplayed()).toBe(true);
            await expect(await this.signMeOutButton.isDisplayed()).toBe(true);
        }

    }

    async loginToOtherPortals(randomEmail: any, password: string, portalName: string) {
        if (portalName == "disneyland") {
            await this.SignInRegister.waitForDisplayed({ timeout: 30000 });
            await this.clickElement(this.SignInRegister);
            await this.navigateToTermsAndConditionPage(randomEmail, password);
        }

        if (portalName == "disneycruise") {
            await this.SignInRegister.waitForDisplayed({ timeout: 30000 });
            await this.clickElement(this.SignInRegister);
            await this.navigateToTermsAndConditionPage(randomEmail, password);
        }

    }


    async verifyIsLogOutButtonDisplayed() {
        await browser.pause(30000);
        browser.switchToParentFrame();
        await this.logoutButton.waitForDisplayed({ timeout: 30000 });
        await expect(this.logoutButton).toBeExisting();
        console.log("User registration done")
    }


    async enterUserDetails(prefix: string, fname: string, lname: string) {
        await this.waitAndEnterData(this.firstNameTxBx, fname);
        await this.waitAndEnterData(this.lastNameTxBx, lname);

    }

    async enterPasswordDOB(password: string, dob: string) {
        await browser.pause(10000);
        try {
            await browser.pause(10000);
            await this.waitAndEnterData(this.passwordTxBx, password);
            await browser.pause(2000);
            await this.waitAndEnterData(this.dateBirthTxBx, dob);
            await browser.pause(9000);
        } catch (error) {
            try {
                console.log("Error occurred - Retry 2")
                await browser.pause(2000);
                await browser.switchToParentFrame();//testing 
                await browser.switchToFrame(0)
                await browser.pause(10000);
                await this.waitAndEnterData(this.passwordTxBx, password);
                await browser.pause(2000);
                await this.waitAndEnterData(this.dateBirthTxBx, dob);
                await browser.pause(9000);
            } catch (error) {
                await browser.pause(2000);
                await browser.switchToParentFrame();//testing 
                await browser.switchToFrame(1)
                await browser.pause(10000);
                await this.waitAndEnterData(this.passwordTxBx, password);
                await browser.pause(2000);
                await this.waitAndEnterData(this.dateBirthTxBx, dob);
                await browser.pause(9000);
            }
        }
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


    async selectConsentsForMalaysia() {
        await this.disneyTNC.click();
        await this.disneyTNC1.click();
        await this.disneyTNC2.click();
        await this.disneyTNC3.click();
        await this.disneyTNC4.click();


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

        const handles = await browser.getWindowHandles()
        console.log("Total Opened Window handle: " + handles.length)
        if (handles.length > 1) {
            await browser.switchToWindow(handles[1]);
            await browser.closeWindow();
            console.log("Closed window handle: " + handles[1])
            await browser.switchToWindow(handles[0]);

        }

    }

    async openAppWithUrl(url: string) {
        await browser.newWindow(url);
        await browser.setTimeout({ 'pageLoad': 10000 })
        console.log("Opened registration page")

        /**  const handles = await browser.getWindowHandles()
          console.log("Total Opened Window handle: "+ handles.length)
          if(handles.length>1){
              await browser.switchToWindow(handles[1]);
              await browser.closeWindow();
              console.log("Closed window handle: "+ handles[1])
              await browser.switchToWindow(handles[0]);
      
          }**/
    }

    async validatePasswordErrorMessage(errorMsg: string) {
        await browser.switchToParentFrame();
        await browser.switchToFrame(0);
        await this.passwordError.waitForDisplayed({ timeout: 10000 });
        //  expect(await this.passwordError.getText()).toHaveTextContaining(errorMsg);
    }

    parentWindow: any;
    async clickPrivacyAndTNCLinks(name: any) {
        this.parentWindow = browser.getWindowHandle()

        console.log("Clicking TNC links for :" + name);
        await browser.pause(8000);
        await browser.scroll(0, 1300)
        try {
            await (await $("//a[text()='" + name + "']")).click();
            /** await browser.switchToParentFrame();
               await browser.pause(8000);
               await browser.switchToFrame(0);
               console.log("Scrolling down to page")
               console.log(await browser.execute(() => window.scrollY)) // returns 200
               console.log("Scrolled down to page")
               await browser.pause(4000);
               await $("//a[text()='" + name + "']").click();
               await console.log("Clicked on TNC link " + name)**/
        } catch (error) {
            console.log("Error Block clicking TNC links")
            await browser.switchToParentFrame();
            await browser.pause(8000);
            await browser.switchToFrame(0);
            await browser.pause(4000);
            await (await $("//a[text()='" + name + "']")).click();
            console.log("Clicked on TNC link " + name)
        }
        await browser.pause(8000);
    }

    async validateNewTNCWindow(name: any) {
        console.log("Validating navigation to:" + name)

        if (name == "Terms of Use") {
            await browser.pause(8000);
            const handles = await browser.getWindowHandles()
            for (var i = 0; i < (await browser.getWindowHandles()).length; i++) {
                console.log("Handles::" + handles[i])
                await browser.switchToWindow(handles[i])
            }
            await expect(await this.termOfUsePageText.getText()).toEqual("English – Disney Terms of Use – United States");
            console.log("Validation done for " + name)
            await browser.closeWindow();
            await browser.switchToWindow(handles[0]);
        }

        if (name == "Privacy Policy") {
            await browser.pause(8000);
            const handles = await browser.getWindowHandles()
            for (var i = 0; i < (await browser.getWindowHandles()).length; i++) {
                console.log("Handles::" + handles[i])
                await browser.switchToWindow(handles[i])
            }
            await expect(await this.privacyPolicyPageText.getText()).toEqual("PRIVACY POLICY");
            console.log("Validation done for " + name)
            await browser.closeWindow();
            await browser.switchToWindow(handles[0]);

        }

        if (name == "My Disney Experience Terms and Conditions") {
            await browser.pause(8000);
            const handles = await browser.getWindowHandles()
            for (var i = 0; i < (await browser.getWindowHandles()).length; i++) {
                console.log("Handles::" + handles[i])
                await browser.switchToWindow(handles[i])
            }
            await browser.pause(8000);
            await expect(await this.disneyExpHeaderText.getText()).toEqual("My Disney Experience Terms and Conditions");
            console.log("Validation done for " + name)
            await browser.closeWindow();
            await browser.switchToWindow(handles[0]);

        }

    }

    async editCountry(country: string) {
        console.log("Changing country as country: " + country)
        console.log("Scrolling down to change country")
        await browser.pause(8000);
        await this.waitAndclick(this.editCountryButton);
        await browser.pause(8000);

        /**  try{
         await browser.pause(8000);
         await browser.switchToParentFrame();
         await browser.pause(8000);
         await browser.switchToFrame(1);
         await this.waitAndclick(this.editCountryButton);
         }catch(error){
             console.log("Error while clicking edit country and retrying ")
             await browser.switchToParentFrame();
             await browser.pause(8000);
             await browser.switchToFrame(0);
             await this.waitAndclick(this.editCountryButton);
         }**/
        try {
            await browser.pause(8000);
            await browser.switchToParentFrame();
            await browser.pause(8000);
            await browser.switchToFrame(0);
            await browser.pause(8000);
            await this.changeCountryDropdown.click();
            await this.selectDropdownByText(this.changeCountryDropdown, country);
            await this.changeCountryDoneButton.click();
            await browser.switchToParentFrame();
        } catch (error) {
            await browser.switchToParentFrame();
            await browser.pause(8000);
            await browser.switchToFrame(1);
            console.log("Retrying as Error occurred while Changing country as country: " + country)
            await browser.pause(1000);
            await this.changeCountryDropdown.click();
            await this.selectDropdownByText(this.changeCountryDropdown, country);
            await this.changeCountryDoneButton.click();
            await browser.switchToParentFrame();
        }

    }


    async validateChangeCountry(country: string) {
        console.log("Validate Change country")
        await browser.pause(1000);
        await browser.scroll(0, 1300)

        for (let i = 0; i < 3; i++) {
            try {
                await browser.switchToFrame(null);
                await browser.switchToFrame(i);
                await this.countryNameLabelOnRegPage.waitForDisplayed({ timeout: 1000 });
                await expect(await this.countryNameLabelOnRegPage.getText()).toContain(country);
                await console.log("Worked with Frame : " + i)
                break;
            } catch (error) {
                await console.log("Error occurred with Frame")
            }

        }
    }

}

export default new RegistrationPage();
