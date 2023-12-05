import Page from "../pages/BasePage";



class FriendFamilyPage extends Page {

    get friendFamilyLink() {return $("(//a[@href='/profile/family-friends/'])[2]")};
    get friendFamilyPageHeader() {return $(".list-heading h3")}
    get addFriendFamilyButton() {return $("(//*[contains(text(),'Add a Guest')])[1]")}
    get firstNameTxBx() {return  $("wdpr-input[formcontrolname='firstName']")}
    get lastNameTxBx() {return  $("wdpr-input[formcontrolname='lastName']")}

    get emailNameTxBx() {return  $("wdpr-input[formcontrolname='emailOrPhone']")}
    get searchButton() {return $("//wdpr-button[contains(.,'Search')]")}
    get doneButton() {return $("//wdpr-button[contains(.,'Done')}")}
   


    




   // get firstNameTxBx() {return  $("#JB8s4V")}


    get welcomeUser() { return $("(//a[@href='/profile'])[1]") }
    get accountSettingLink() { return $("//div[text()='Manage how you sign in.']") }


    async clickAccountSettingLink() {
        await browser.pause(30000)
        await browser.refresh();
      //  await browser.switchToFrame(null);
      //  await browser.switchToFrame(0);
        await browser.pause(30000)
        await this.welcomeUser.waitForDisplayed({ timeout: 10000 });
        await this.clickElement(this.welcomeUser);

    }

    async clickFriendFamilyLink() {
        await browser.pause(30000)
        await browser.scroll(0,900)
        await browser.pause(30000)
        await this.clickElement(this.friendFamilyLink);
        await this.friendFamilyPageHeader.waitForDisplayed({ timeout: 30000 });   
        await expect(this.friendFamilyPageHeader).toBeDisplayed();     
    }

    async navigateToAddNewFamilyFriend(firstName:string, lastName:string, email:string ){
        await this.clickElement(this.addFriendFamilyButton);
        await browser.pause(90000)
        await this.firstNameTxBx.waitForDisplayed({ timeout: 30000 });   
        await expect(this.firstNameTxBx).toBeDisplayed();   
        await this.enterData(this.firstNameTxBx,firstName);
        await this.enterData(this.lastNameTxBx,lastName);
        await this.enterData(this.emailNameTxBx,email)
        await this.waitAndclick(this.searchButton);
        await this. waitAndclick(this.doneButton);
        await browser.pause(30000)

    }



}

export default new FriendFamilyPage();
