import Page from "./BasePage";


class AccountSettingPage extends Page {

    get inputUsername() { return $("input#InputIdentityFlowValue") }
    get continueBtn() { return $("[data-testid='BtnSubmit']") }
    get inputPassword() { return $('[data-testid="InputPassword"]') }
    get btnSubmit() { return $('[data-testid="BtnSubmit"]') }
    get iframeId() { return $("#oneid-iframe") }
    get signOutLink() { return $("(//a[@href='/authentication/logout/'][contains(.,'Sign Out')])[1]") }
    get welcomeUser() { return $("(//a[@href='/profile'])[1]") }
    get signCreateButton() { return $("(//*[@id='navigationHeader']//div[2]/div[1]/a)[1]") }
    get fnfLink() { return $("//a[contains(@name,'&lid=WDW_Footer_MDX_FamilyFriends')]") }
    get loginErrorMsg() { return $("#InputPassword-error") }

}

export default new AccountSettingPage();
