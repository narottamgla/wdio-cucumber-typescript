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

When(/^I enter mobile number to change and click Done Button$/, async () => {
    await AccountsettingPage.changeMobileNumber()

});


When(/^I enter home number to change and click Done Button$/, async () => {
    await AccountsettingPage.changeMobileNumber()

});
When(/^I enter mobile number to change and click verify link$/, async () => {
    await AccountsettingPage.verifyMobilenNumber()
    await AccountsettingPage.clickOTPCancel();
});

Then(/^I should see validate code screen$/, async () => {
    await AccountsettingPage.validateSendCodeScreen()

});


When(/^I click Learn More Link tabs$/, async () => {
    await AccountsettingPage.clickLearnMoreLink();
});

Then(/^I should see Learn More  page in new window$/, async () => {
    await AccountsettingPage.validateLearnMoreTab()

});


When(/^I click Manage Email subscription$/, async () => {
    await AccountsettingPage.ClickManageEmailSubscription();
});

Then(/^I should see Manage Email subscription  page in new window$/, async () => {
    await AccountsettingPage.validateManageEmailSubscripionTav()

});


When(/^I update the billing address on billing address update page as pincode (.+) and city as (.+)$/, async (pincode:string,city:string) => {
    await AccountsettingPage.changeBillingAddress(pincode,city);
});

Then(/^I should see updated billing address as pincode (.+) and city as (.+)$/, async (pincode:string,city:string) => {
    await AccountsettingPage.validateUpdatedBillingAddress(pincode,city);

});


When(/^I update the shipping address on shipping address update page as pincode (.+) and city as (.+)$/, async (pincode:string,city:string) => {
    await AccountsettingPage.changeBillingAddress(pincode,city);
});

Then(/^I should see updated shipping address as pincode (.+) and city as (.+)$/, async (pincode:string,city:string) => {
    await AccountsettingPage.validateUpdatedBillingAddress(pincode,city);

});






