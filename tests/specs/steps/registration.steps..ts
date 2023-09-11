import { Given, When } from '@cucumber/cucumber';
import RegistrationPage from '../../pages/registration.page';

Given(/^I open the disneyworld Registration page$/, async () => {
    await RegistrationPage.openApp();
});

When(/^I fill username as (.+) and click continue button$/, async (useremail) => {
    await RegistrationPage.navigateToRegistrationPage(useremail);
    await RegistrationPage.verifyUserNavigationToRegistrationPage();
});

When(/^I enter Prefix as (.+), firstname as (.+) ,lastname as (.+)$/, async (prefix, firstname, lastname) => {
    await RegistrationPage.enterUserDetails(prefix, firstname, lastname);
});

When(/^I enter Password as (.+) and Birthdate as (.+)$/, async (password, dob) => {
    await RegistrationPage.enterPasswordDOB(password, dob);
});


When(/^I enter Billing address country as (.+), address as (.+) , line2 as (.+), city as (.+), region as (.+) and postalcode as (.+)$/, async (country, address1, address2, city, region, postalCode) => {
    await RegistrationPage.enterBillingDetails(country, address1, address2, city, region, postalCode);
});

When(/^I selects notification consent as (.+) and disney world consent as (.+)$/, async (consent1: string, consent: string) => {
    await RegistrationPage.selectConsents();
});


When(/^I click on Create registration button$/, async () => {
    await RegistrationPage.clickUserRegistrationButton();
});

When(/^I should see logged user and logout button$/, async () => {
    await RegistrationPage.verifyIsLogOutButtonDisplayed();
});





