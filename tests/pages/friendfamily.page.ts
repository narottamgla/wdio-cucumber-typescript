import Page from "../pages/BasePage";
import LoginPage from "../pages/login.page";



class FriendFamilyPage extends Page {

  get friendFamilyLink() { return $("(//a[@href='/profile/family-friends/'])[2]") };
  get friendFamilyPageHeader() { return $(".list-heading h3") }
  get addFriendFamilyButton() { return $("(//*[contains(text(),'Add a Guest')])[1]") }
  get firstNameTxBx() { return $("wdpr-input[formcontrolname='firstName']").shadow$("input") }
  get lastNameTxBx() { return $("wdpr-input[formcontrolname='lastName']").shadow$("input") }

  get emailNameTxBx() { return $("wdpr-input[formcontrolname='emailOrPhone']").shadow$("input") }
  get searchButton() { return $("//wdpr-button[contains(.,'Search')]") }
  get doneButton() { return $("//wdpr-button[contains(.,'Done')]") }

  get sendButton() { return $("//wdpr-button[contains(.,'Send Invite')]") }

  get sentButton() { return $("//wdpr-tab[contains(.,'Sent')]") }
  get ResendButton() { return $$("(//button[@class='button'][contains(.,'Resend')])") }

  get ResendButton1() { return $("(//button[contains(.,'Resend')])") }

  get AllowButton() { return $("(//button[@class='button'][contains(.,'Allow')])[1]") }

  get allowButton() { return $("//wdpr-button[contains(.,'Allow')]") }

  get signOutLink() { return $("(//a[@href='/authentication/logout/'][contains(.,'Sign Out')])[1]") }

  get welcomeUser() { return $("(//a[@href='/profile'])[1]") }
  get accountSettingLink() { return $("//div[text()='Manage how you sign in.']") }

  get ListSearchSettings() { return $("(//wdpr-button[contains(.,'List & Search Settings')])])") }
  get AddManagedGuest() { return $("//a[@href='/profile/family-friends/add-managed-guest']") }

  get InviteGuestLink() { return $("(//h4[@class='title'][contains(.,'Invite This Guest to Create an Account')])") }
  get ManageGuestLink() { return $("(//div[@class='suggestion'][contains(.,'Great for children and those who prefer not to use the website or app')])") }
  get ManageGuestAge() { return $("(//wdpr-single-select[contains(@formcontrolname, 'age')])") }

  //get ManageGuestAgeOption() { return $("(//wdpr-single-select[contains(@formcontrolname, 'age')])").shadow$("//*[contains(text(),'18+')]") }

  get ManageGuestAgeOption() { return $(" /html/body/fnf-root/profile-layout/div/fnf-add-managed-guest/div/fnf-guest-form/div/form/div[3]/div[1]/wdpr-single-select") }


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
    await browser.pause(3000)
    await browser.scroll(0, 900)
    await browser.pause(3000)
    await this.clickElement(this.friendFamilyLink);
    await this.friendFamilyPageHeader.waitForDisplayed({ timeout: 3000 });
    await expect(this.friendFamilyPageHeader).toBeDisplayed();
  }

  async navigateToAddNewFamilyFriend1(firstName: string, lastName: string, email: string) {
    await this.AllowingButton();
    for (let i = 0; i < 3; i++) {
      try {

        await browser.refresh();
        await this.clickElement(this.addFriendFamilyButton);
        await browser.pause(900)
        await this.firstNameTxBx.waitForDisplayed({ timeout: 300 });
        await expect(this.firstNameTxBx).toBeDisplayed();
        await browser.pause(900)
        //  await this.clickElement(this.firstNameTxBx);  
        await this.enterData(this.firstNameTxBx, firstName);
        await this.enterData(this.lastNameTxBx, lastName);
        await this.enterData(this.emailNameTxBx, email)
        await browser.pause(1000)
        await this.waitAndclick(this.searchButton);
      }
      catch (error) {
        console.log("Error occurred with getting search " + i)
      }
      await browser.pause(1000)
      await this.AllowingButton();

      await browser.pause(1000)
      await this.clickElement(this.sendButton);

      await browser.pause(400)
      //  await browser.pause(3000)
    }
  }


  async navigateToAddNewFamilyFriend(firstName: string, lastName: string, email: string) {
    await this.clickElement(this.addFriendFamilyButton);
    await browser.pause(900)
    await this.firstNameTxBx.waitForDisplayed({ timeout: 30000 });
    await expect(this.firstNameTxBx).toBeDisplayed();
    await browser.pause(9000)
    //  await this.clickElement(this.firstNameTxBx);  
    await this.enterData(this.firstNameTxBx, firstName);
    await this.enterData(this.lastNameTxBx, lastName);
    await this.enterData(this.emailNameTxBx, email)
    await browser.pause(10000)
    await this.waitAndclick(this.searchButton);
    await browser.pause(10000)
    try {
      await this.waitAndclick(this.allowButton);
    } catch (error) {

    }
    await browser.pause(50000)
    try {
      await this.clickElement(this.sendButton);
    } catch (error) {

    }
    await browser.pause(40000)
    //  await browser.pause(3000)
  }

  async clickGuestAddingDone() {
    // await this.clickElement(this.sentButton) ;
    // await browser.pause(30000) ;
    await this.clickElement(this.ResendButton1);
    await browser.pause(10000);
    await this.clickElement(this.doneButton);
    await browser.pause(30000);

  }




  async AllowingButton() {
    for (let i = 0; i < 5; i++) {

      try {
        await this.clickElement(this.allowButton);
      } catch (error) {
        console.log("Error occurred with Allow button " + i)

      }
    }

    try {
      await this.clickElement(this.AllowButton);
    } catch (error) {
      console.log("Error occurred with Allow button ")

    }
  }



  async performsendButton() {
    for (let i = 0; i < 3; i++) {

      try {
        await this.clickElement(this.sendButton);
        await console.log("click on performsendButton trying : " + i)
        break;

      } catch (error) {
        console.log("Error click on performsendButton trying: " + i)
      }
    }
    await browser.pause(9000);

    await this.clickElement(this.doneButton);
    await browser.pause(30000);
  }



  async clickPendingInvites() {
    await browser.pause(7000);
    await this.clickElement(this.sentButton);
    await this.clickResendButtons();
  }



  //const ReendButton = () => $("(//button[@class='button'][contains(.,'Resend')])");

  async clickResendButtons() {
    const buttons = await this.ResendButton;
    const count = await buttons.length;
    console.log(count + "count Resend buttons.");
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


  async clickSignout() {
    await LoginPage.performLogout();

  }


  async clickListSearchSettings() {
    await browser.pause(7000);
    await this.clickElement(this.ListSearchSettings);
    await this.clickResendButtons();
  }


  async clickManagedGuestLink() {
    console.log("Click 'Add a new Guest who doesn't have a Disney account'")
    await browser.scroll(0, 900)
    await browser.pause(3000)

    try {

      await this.clickElement(this.AddManagedGuest);
      await browser.pause(11000);
      await this.clickElement(this.InviteGuestLink);
    } catch (error) {
      console.log(`Error occurred with clickManagedGuestLink : `);
    }
    await browser.pause(10000);
    await this.ClickManageGuestAge();
    await browser.pause(10000);

    await this.clickElement(this.doneButton);
    await browser.pause(30000);

  }


  async navigateToAddUnRegisteredFamilyFriend(firstName: string, lastName: string, email: string) {
    await this.AllowingButton();

    for (let i = 0; i < 1; i++) {
      try {
        await browser.refresh();
        await this.clickElement(this.addFriendFamilyButton);
        await browser.pause(900);
        await this.firstNameTxBx.waitForDisplayed({ timeout: 3000 });

        await this.enterData(this.firstNameTxBx, firstName);
        await this.enterData(this.lastNameTxBx, lastName);
        await this.enterData(this.emailNameTxBx, email);
        await this.waitAndclick(this.searchButton);
        await browser.pause(1000);
        await this.AllowingButton();
        await browser.pause(1000);
        await this.waitAndclick(this.searchButton);
        await browser.pause(10000);
      } catch (error) {
        console.log(`Error occurred with getting search attempt ${i + 1}: ${error}`);
      }
    }
  }

  async ClickManageGuestAge() {
    await browser.scroll(0, 900)
    await browser.pause(3000)

    try {
      await this.ManageGuestAge.click();
    //  browser.execute("arguments[0].click();", this.ManageGuestAgeOption);

      //browser.execute("document.querySelector('button#custom-dropdown-button li#option-13').click()") 


      await this.ManageGuestAgeOption.click();
      console.log("Clicked on Age option")
      await browser.pause(100000);
    } catch (error) {
      console.log(`Error occurred with ClickManageGuestAge1 : `);
    }

  }

}

export default new FriendFamilyPage();