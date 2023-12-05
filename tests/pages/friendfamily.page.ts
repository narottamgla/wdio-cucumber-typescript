import Page from "../pages/BasePage";



class FriendFamilyPage extends Page {

    get friendFamilyLink() {return $("(//a[@href='/profile/family-friends/'])[1]")};
    get friendFamilyPageHeader() {return $(".list-heading h3")}
    get addFriendFamilyButton() {return $("(//*[contains(text(),'Add a Guest')])[1]")}
    get firstNameTxBx() {return  $("[formcontrolname='firstName']").shadow$('#JB8s4V')}

    get welcomeUser() { return $("(//a[@href='/profile'])[1]") }
    get accountSettingLink() { return $("//div[text()='Manage how you sign in.']") }


    async clickAccountSettingLink() {
        await browser.pause(30000)
        await browser.switchToFrame(null);
        await browser.switchToFrame(0);
        await this.welcomeUser.waitForDisplayed({ timeout: 10000 });
        await this.clickElement(this.welcomeUser);
        await this.clickElement(this.accountSettingLink);

    }

    async clickFriendFamilyLink() {
        await browser.switchToFrame(null);
        await browser.switchToFrame(0);
        await this.clickElement(this.friendFamilyLink);
        await this.friendFamilyPageHeader.waitForDisplayed({ timeout: 30000 });   
        await expect(this.friendFamilyPageHeader).toBeDisplayed();     
    }

    async navigateToAddNewFamilyFriend(){
        await this.clickElement(this.addFriendFamilyButton);
        await this.firstNameTxBx.waitForDisplayed({ timeout: 30000 });   
        await expect(this.firstNameTxBx).toBeDisplayed();     
    }



}

export default new FriendFamilyPage();
