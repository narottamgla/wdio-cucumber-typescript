import { Given, Then, When } from '@cucumber/cucumber';
import RegistrationPage from "../../pages/registration.page";
import FriendFamilyPage from '../../pages/friendfamily.page';
import LoginPage from "../../pages/login.page";


When(/^I click User profile link and click Friend Family link$/, async () => {
    let userEmailOfNewUser: any = Math.floor(Math.random() * 66224242) + "testuser512@malinator.com";
    let userPassword: any = "disney@123";
    let userDOB: any = "01-01-1989";
    let userPrefix: any = "Mr";
    let userFirstName: any = "first";
    let userLastName: any = "last";
    let userCountry: any = "United States";
    let address1: any = "address1";
    let address2: any = "address2";
    let city: any = "Newyork";
    let region: any = "NYC"
    let postcode: any = "65554";


    await RegistrationPage.registerNewUser(userEmailOfNewUser, userPassword, userDOB, userPrefix, userFirstName, userLastName, userCountry, address1, address2, city, region, postcode);
    await FriendFamilyPage.clickWelcomeUserLink();
    await FriendFamilyPage.clickFriendFamilyLink();
});

Then(/^I should navigate to Friend Famliy tab$/, async () => {
    //await FriendFamilyPage.navigateToAddNewFamilyFriend("first", "last", "56393586testuser512@malinator.com");
  //  await FriendFamilyPage.clickGuestAddingDone();
    await FriendFamilyPage.navigateToAddNewFamilyFriend("Name", "Seven", "three_fnf@mailinator.com");
    await FriendFamilyPage.clickGuestAddingDone();

    await FriendFamilyPage.navigateToAddNewFamilyFriend("Name", "Name", "one_fnf@mailinator.com");
    await FriendFamilyPage.clickGuestAddingDone();

});

When(/^I login existing user with email (.+) and  password as (.+)$/, async (username:string,password:string) => {
    await LoginPage.loginExistingUser(username, password)
    await browser.pause(4000);
});