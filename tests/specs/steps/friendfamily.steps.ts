import { Given, Then, When } from '@cucumber/cucumber';
import AccountSetting from "../../pages/accountsetting.page";
import FriendFamilyPage from '../../pages/friendfamily.page';

When(/^I click User profile link and click Friend Family link$/, async () => {
    await FriendFamilyPage.clickAccountSettingLink();
    await FriendFamilyPage.clickFriendFamilyLink();
});

Then(/^I should navigate to Friend Famliy tab$/, async () => {
    await FriendFamilyPage.navigateToAddNewFamilyFriend("firstname","lastname","one_fnf@mailinator.com");
});