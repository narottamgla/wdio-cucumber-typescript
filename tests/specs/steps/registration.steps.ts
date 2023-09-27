import { Given, When,Then } from '@cucumber/cucumber';
import RegistrationPage from '../../pages/registration.page';
import LoginPage from '../../pages/login.page';
import { generateRandomDataWithSpecialChar } from '../../utils/random';


let randomEmail:any;

Given(/^I open the disneyworld Registration page$/, async () => {
    await RegistrationPage.openApp();
});

When(/^I fill username as (.+) and click continue button$/, async (useremail) => {
    randomEmail = Math.random() * 3242424242 + useremail.replace(/^"|"$/g, '');
    await RegistrationPage.navigateToRegistrationPage(randomEmail);
    await RegistrationPage.verifyUserNavigationToRegistrationPage();
    await browser.pause(8000);
});

When(/^I login with the existing user$/, async () => {
    await LoginPage.loginExistingUser(randomEmail, "disney123")
    await browser.pause(4000);
});

When(/^I login with existing user with password as (.+)$/, async (password:string) => {
    await LoginPage.loginExistingUser(randomEmail, password.replace(/^"|"$/g, ''));
    await browser.pause(4000);
});


When(/^I enter Prefix as (.+), firstname as (.+) ,lastname as (.+)$/, async (prefix, firstname, lastname) => {
    await browser.pause(8000);
    await RegistrationPage.enterUserDetails(prefix, firstname, lastname);
});

When(/^I enter Password as (.+) and Birthdate as (.+)$/, async (password, dob) => {
    await browser.pause(2000);
    await RegistrationPage.enterPasswordDOB(password, dob);
});

When(/^I enter Password with length (.+) and Birthdate as (.+)$/, async (passwordlenth, dob) => {
    await browser.pause(2000);
    let password = generateRandomDataWithSpecialChar(257);
    await RegistrationPage.enterPasswordDOB(password, dob);
});

When(/^I enter Billing address country as (.+), address as (.+), line2 as (.+), city as (.+), region as (.+) and postalcode as (.+)$/, async (country, address1, address2, city, region, postalCode) => {
    await browser.pause(8000);
    await RegistrationPage.enterBillingDetails(country, address1, address2, city, region, postalCode);
});

Then(/^I should see password error message as (.+)$/, async (errorMsg) => {
    await browser.pause(2000);
    await RegistrationPage.validatePasswordErrorMessage(errorMsg);
});


When(/^I click on (.+) on registration page$/, async (name) => {
    await browser.pause(2000);
    RegistrationPage.clickPrivacyAndTNCLinks(name);
});

Then(/^I should see (.+) Page$/, async (name) => {
    await browser.pause(2000);
    await RegistrationPage.validateNewTNCWindow(name);
});


When(/^I selects notification consent as (.+) and disney world consent as (.+)$/, async (consent1: string, consent: string) => {
    await RegistrationPage.selectConsents();
});


When(/^I click on Create registration button$/, async () => {
    await RegistrationPage.clickUserRegistrationButton();
    await browser.pause(12000);
});

When(/^I should see logged user and logout button$/, async () => {
    await RegistrationPage.verifyIsLogOutButtonDisplayed();
});





