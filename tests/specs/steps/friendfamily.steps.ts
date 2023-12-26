import { Given, Then, When } from '@cucumber/cucumber';
import RegistrationPage from "../../pages/registration.page";
import FriendFamilyPage from '../../pages/friendfamily.page';
import LoginPage from "../../pages/login.page";

const userEmailOfFirstNewUser: any = Math.floor(Math.random() * 166224242) + "testuser512@mailinator.com";
const userEmailOfSecondNewUser: any = Math.floor(Math.random() * 66224243) + "testuser512@mailinator.com";
const userEmailOfThirdNewUser: any = Math.floor(Math.random() * 66224244) + "testuser512@mailinator.com";



When(/^I click First User profile link and click Friend Family link$/, async () => {
   // let userEmailOfNewUser: any = Math.floor(Math.random() * 66224242) + "testuser512@malinator.com";
   console.log(`Random Email: ${userEmailOfFirstNewUser}`);

   let userPassword: any = "disney123";
   let userDOB: any = "01-01-1989";
   let userPrefix: any = "Mr";
   let userFirstName: any = "first";
   let userLastName: any = "last";
   let userCountry: any = "United States";
   let address1: any = "925 4th Ave";
   let address2: any = "address2";
   let city: any = "Seattle";
   let region: any = "Washington"
   let postcode: any = "98012";

    await RegistrationPage.registerNewUser(userEmailOfFirstNewUser, userPassword, userDOB, userPrefix, userFirstName, userLastName, userCountry, address1, address2, city, region, postcode);
    await FriendFamilyPage.clickWelcomeUserLink();
    await FriendFamilyPage.clickFriendFamilyLink();

});


When(/^I click Second User profile link and click Friend Family link$/, async () => {
    // let userEmailOfNewUser: any = Math.floor(Math.random() * 66224242) + "testuser512@malinator.com";

    console.log(`Random Email: ${userEmailOfSecondNewUser}`);

    let userPassword: any = "disney123";
    let userDOB: any = "01-01-1989";
    let userPrefix: any = "Mr";
    let userFirstName: any = "first";
    let userLastName: any = "last";
    let userCountry: any = "United States";
    let address1: any = "925 4th Ave";
    let address2: any = "address2";
    let city: any = "Seattle";
    let region: any = "Washington"
    let postcode: any = "98012";

     await RegistrationPage.registerNewUser(userEmailOfSecondNewUser, userPassword, userDOB, userPrefix, userFirstName, userLastName, userCountry, address1, address2, city, region, postcode);
     await FriendFamilyPage.clickWelcomeUserLink();
     await FriendFamilyPage.clickFriendFamilyLink();
 });

 When(/^I click Third User profile link and click Friend Family link$/, async () => {
    // let userEmailOfNewUser: any = Math.floor(Math.random() * 66224242) + "testuser512@malinator.com";

    console.log(`Random Email: ${userEmailOfThirdNewUser}`);

     let userPassword: any = "disney123";
     let userDOB: any = "01-01-1989";
     let userPrefix: any = "Mr";
     let userFirstName: any = "first";
     let userLastName: any = "last";
     let userCountry: any = "United States";
     let address1: any = "925 4th Ave";
     let address2: any = "address2";
     let city: any = "Seattle";
     let region: any = "Washington"
     let postcode: any = "98012";
 
     await RegistrationPage.registerNewUser(userEmailOfThirdNewUser, userPassword, userDOB, userPrefix, userFirstName, userLastName, userCountry, address1, address2, city, region, postcode);
 });
 
 Then(/^I should navigate to Friend Famliy tab$/, async () => {

    await FriendFamilyPage.clickWelcomeUserLink();
    await FriendFamilyPage.clickFriendFamilyLink();

 });
 


 Then(/^I should navigate to Friend Famliy AddGuest Search fields$/, async () => {
   // await FriendFamilyPage.navigateToAddNewFamilyFriend("name", "seven", "three_fnf@mailinator.com");

   await FriendFamilyPage.navigateToAddNewFamilyFriend("first", "last", "first_fnf@mailinator.com");

  });



  Then(/^I selected the displayed Guest$/, async () => {
    await FriendFamilyPage.performsendButton();
  });

  Then(/^I should see Pending Invites$/, async () => {
    await FriendFamilyPage.clickPendingInvites();
  });


Then(/^I should navigate to Friend Famliy tab$/, async () => {

   // await FriendFamilyPage.navigateToAddNewFamilyFriend("name", "name", "one_fnf@mailinator.com");
   // await FriendFamilyPage.clickGuestAddingDone();

   // await FriendFamilyPage.navigateToAddNewFamilyFriend("name", "seven", "three_fnf@mailinator.com");
    //await FriendFamilyPage.clickGuestAddingDone();

    //await FriendFamilyPage.navigateToAddNewFamilyFriend("first", "last", "56393586testuser512@malinator.com");
  //  await FriendFamilyPage.clickGuestAddingDone();
   //await FriendFamilyPage.navigateToAddNewFamilyFriend("first", "last", userEmailOfSecondNewUser);
   // await FriendFamilyPage.clickGuestAddingDone();

   await FriendFamilyPage.navigateToAddNewFamilyFriend("first", "last", userEmailOfFirstNewUser);
    await FriendFamilyPage.clickGuestAddingDone();
});





When(/^I login existing user with email (.+) and  password as (.+)$/, async (username:string,password:string) => {
    await LoginPage.loginExistingUser(username, password)
    await browser.pause(4000);
});


Then(/^I should navigate to SignOut$/, async () => {
    await FriendFamilyPage.clickSignout();

});

Then(/^I should navigate to First User as a Guest in Search fields who doesnt have disney account$/, async () => {
    await FriendFamilyPage.navigateToAddNewFamilyFriend("first1", "last", userEmailOfFirstNewUser);
     await FriendFamilyPage.clickManagedGuestLink();

 });
 
