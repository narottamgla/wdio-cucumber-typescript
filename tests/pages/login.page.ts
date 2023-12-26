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
        try {
            await this.iframeId.waitForDisplayed({ timeout: 30000 });
            await browser.switchToFrame(0);
            await browser.pause(2000);
            await (await this.inputUsername).waitForDisplayed({ timeout: 50000 });
            await this.inputUsername.click();
            await this.waitAndEnterData(this.inputUsername, username);
            await this.clickElement(this.continueBtn);
            await this.waitAndEnterData(this.inputPassword, password);
            await this.waitAndclick(this.btnSubmit);
            await browser.pause(18000);
        } catch (error) {
            console.log("Error occurred with Frame-0, Trying with frame-1");
            await browser.switchToParentFrame();
            await this.iframeId.waitForDisplayed({ timeout: 30000 });
            await browser.switchToFrame(1);
            await browser.pause(2000);
            await (await this.inputUsername).waitForDisplayed({ timeout: 50000 });
            await this.inputUsername.click();
            await this.waitAndEnterData(this.inputUsername, username);
            await this.clickElement(this.continueBtn);
            await this.waitAndEnterData(this.inputPassword, password);
            await this.waitAndclick(this.btnSubmit);
            await browser.pause(18000);

        }
    }

    async loginExistingUser(username: string, password: string) {
        var entered = false;
        try {
            // await browser.switchToFrame(null);
            await browser.pause(8000);
            //  await browser.switchToParentFrame();
            await browser.pause(8000);
            await this.waitAndEnterData(this.inputUsername, username);
            await this.clickElement(this.continueBtn);
            await this.waitAndEnterData(this.inputPassword, password);
            await this.waitAndclick(this.btnSubmit);
            entered = true;
        } catch (error) {
            console.log("Error while switching to parent frame" + error)
        }

        for (var i = 0; i < 3 && !entered; i++) {
            try {
                await this.iframeId.waitForDisplayed({ timeout: 30000 });
                await browser.switchToParentFrame();
                await browser.switchToFrame(0);
                await browser.pause(2000);
                await (await this.inputUsername).waitForDisplayed({ timeout: 30000 });
                await this.inputUsername.click();
                await this.waitAndEnterData(this.inputUsername, username);
                await this.clickElement(this.continueBtn);
                await this.waitAndEnterData(this.inputPassword, password);
                await this.waitAndclick(this.btnSubmit);
                await browser.pause(8000);
                console.log("Working with frame input login :" + i)

            } catch (error) {
                console.log("Error while entering user name:" + username)
            }
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
        await browser.pause(1000);
        /// await browser.switchToParentFrame();
        await this.loginErrorMsg.waitForDisplayed({ timeout: 10000 });
        await expect(this.loginErrorMsg.isDisplayed()).toBe(true);
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
        try {
            const signOutLink = await this.signOutLink;
            if (signOutLink) {
                await signOutLink.click();
                await browser.refresh();

                console.log('Clicked on Sign Out link.');
            } else {
                console.log('Sign Out link not found.');
                await browser.deleteAllCookies();
            }
        } catch (error) {
            console.error('Error occurred during logout:', error.message);
        }
    }

    async validateLogout() {
        await browser.pause(8000);
        await this.signCreateButton.waitForExist({ timeout: 10000 });
        await expect(await this.signCreateButton.getText()).toContain("Sign In or Create Account");
        await browser.deleteSession();

    }

    async closeFirstTab() {
        // Get the current window handle
        const currentHandle = await browser.getWindowHandle();

        // Close the current window using JavaScript executor
        await browser.execute(() => {
            window.close();
        });

        // Switch back to the original window or any other window if needed
        const allHandles = await browser.getWindowHandles();
        const remainingHandles = allHandles.filter(handle => handle !== currentHandle);

        if (remainingHandles.length > 0) {
            await browser.switchToWindow(remainingHandles[0]);
        }


    }



}

export default new LoginPage();
