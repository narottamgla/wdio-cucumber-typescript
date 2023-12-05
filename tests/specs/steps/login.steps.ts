import { Given, Then, When } from '@cucumber/cucumber';
import LoginPage from "../../pages/login.page";
import RegistrationPage from '../../pages/registration.page';


Given(/^I am on the login page$/, async () => {
    await LoginPage.openApp()

});

When(/^I login with (.+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
    await browser.pause(4000);

});

Then(/^I should see a home page of disney world$/, async () => {
    await LoginPage.validateLogin();
});

Then(/^I should see logerror message$/, async () => {
    await LoginPage.validateLoginError();
});


Then(/^I should see logerror message as (.+)$/, async (errorMsg:string) => {
    await LoginPage.validateLoginErrorMessage(errorMsg);
});

When(/^I click logout button of disney world app$/, async () => {
    await LoginPage.performLogout();
});

Then(/^I should logout and see login page$/, async () => {
    await LoginPage.validateLogout();
});

When(/^I read the login data and login$/, async () => {
    let data = await RegistrationPage.readJsonFile("logindata.json");
    await LoginPage.login(data.username, data.pass);
    await browser.pause(4000);
});





