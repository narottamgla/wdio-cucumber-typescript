import { Given, Then, When } from '@cucumber/cucumber';
import LoginPage from "../../pages/login.page";
import AccountsettingPage from '../../pages/accountsetting.page';



Given(/^I click User profile link and Add account setting tab$/, async () => {
    await AccountsettingPage.clickAccountSettingLink();

});


Then(/^I should navigate to account setting tab$/, async () => {
    await AccountsettingPage.validateNavigationToAccountSettingPage()

});


When(/^I click change email link to change user email$/, async () => {
    await AccountsettingPage.clickEmailChange()

});

When(/^I click change password link to change user email$/, async () => {
    await AccountsettingPage.clickPasswordChange()

});

Then(/^I should see otp screen to change user email$/, async () => {
    await AccountsettingPage.validateOTPScreen()
    await AccountsettingPage.clickOTPCancel();

});

When(/^I click More security settings tabs$/, async () => {
    await AccountsettingPage.clickMoresecurityLink()

});


Then(/^I should see more security settings page in new window$/, async () => {
    await AccountsettingPage.validateMoresecurityPage()

});

When(/^I enter mobile number to change and click verify link$/, async () => {
    await AccountsettingPage.changeMobileNumber()

});

Then(/^I should see validate code screen$/, async () => {
    await AccountsettingPage.validateSendCodeScreen()

});



