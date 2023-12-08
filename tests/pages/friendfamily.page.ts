import Page from "../pages/BasePage";



class FriendFamilyPage extends Page {

    get friendFamilyLink() {return $("(//a[@href='/profile/family-friends/'])[2]")};
    get friendFamilyPageHeader() {return $(".list-heading h3")}
    get addFriendFamilyButton() {return $("(//*[contains(text(),'Add a Guest')])[1]")}
    get firstNameTxBx() {return  $("wdpr-input[formcontrolname='firstName']").shadow$("input")}
    get lastNameTxBx() {return  $("wdpr-input[formcontrolname='lastName']").shadow$("input")}

    get emailNameTxBx() {return  $("wdpr-input[formcontrolname='emailOrPhone']").shadow$("input")}
    get searchButton() {return $("//wdpr-button[contains(.,'Search')]")}
    get doneButton() {return $("//wdpr-button[contains(.,'Done')]")}
   
    get sendButton() {return $("//wdpr-button[contains(.,'Send Invite')]")}

    get sentButton() {return $("//wdpr-tab[contains(.,'Sent')]")}
    get ResendButton() {return $$("(//button[@class='button'][contains(.,'Resend')])")}

    get ResendButton1() {return $("(//button[contains(.,'Resend')])")}

    get AllowButton() {return $("(//button[@class='button'][contains(.,'Allow')])[1]")}

    get allowButton() {return $("//wdpr-button[contains(.,'Allow')]")}





    get welcomeUser() { return $("(//a[@href='/profile'])[1]") }
    get accountSettingLink() { return $("//div[text()='Manage how you sign in.']") }


    async clickWelcomeUserLink() {
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
        await browser.pause(900)
        await this.firstNameTxBx.waitForDisplayed({ timeout: 30000 });   
        await expect(this.firstNameTxBx).toBeDisplayed(); 
        await browser.pause(9000)
      //  await this.clickElement(this.firstNameTxBx);  
        await this.enterData(this.firstNameTxBx,firstName);
        await this.enterData(this.lastNameTxBx,lastName);
        await this.enterData(this.emailNameTxBx,email)
        await browser.pause(10000)
        await this.waitAndclick(this.searchButton);
        await browser.pause(10000)
        try {
          await this.waitAndclick(this.allowButton);
        } catch (error) {
          
        }
        await browser.pause(10000)
        await this.clickElement(this.sendButton) ;
        await browser.pause(40000)
      //  await browser.pause(3000)
    }

    async clickGuestAddingDone() {
     // await this.clickElement(this.sentButton) ;
     // await browser.pause(30000) ;
      await this.clickElement(this.ResendButton1) ;
      await browser.pause(10000) ;
      await this. clickElement(this.doneButton);
      await browser.pause(30000) ;

}



//const ReendButton = () => $("(//button[@class='button'][contains(.,'Resend')])");

async  clickReendButtons() {
  const  buttons = await this.ResendButton;
  const count = await buttons.length

  for (const button of buttons) {
    await button.click();
  }

  const remainingButtons = await this.ResendButton;

  if (remainingButtons.length === 0) {
    console.log("No more Resend buttons found.");
  } else {
    console.log(`There are ${remainingButtons.length} Resend buttons remaining.`);
  }
}
}


export default new FriendFamilyPage();
