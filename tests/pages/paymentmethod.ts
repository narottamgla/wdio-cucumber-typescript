import Page from "./BasePage";


class PaymentMethod extends Page {

    get welcomeUser() { return $("(//a[@href='/profile'])[1]") }
    get addPaymentMethod() { return $("//div[text()='Payment Method']") }
    get addNewPaymentMethod() {return $("div.wallet-add-link")}
    get creditDebitCardCheckbox() {return $("div.payment-option-container > label > span")}
    get cardNumberTxBx() {return $("input[formcontrolname='cardNumber']")}
    get cardExpirationTxBx() {return $("input[formcontrolname='expiration']")}

    get cardSecurityCodeTxBx() {return $("input[formcontrolname='securityCode']")}

    get cardholderNameTxBx() {return $("input[formcontrolname='cardholderName']")}

    get addressLine1TxBx() {return $("input[formcontrolname='line1']")}

    get addressLine2TxBx() {return $("input[formcontrolname='line2']")}

    get postalCodeTxBx() {return $("input[formcontrolname='postalCode']")}

    get cityTxBx() {return $("input[formcontrolname='city']")}

    get stateDropdown() {return $("select[formcontrolname='state']")}

    get legalConsentToStoreCard() {return $("[formcontrolname='legalConsentToStoreCard']")} 

    get confirmButton() { return $("//div[text()='Confirm ']") }

    async navigateToPaymentPage() {
       await this.clickElement(this.welcomeUser);
       await  browser.pause(2000);
       await browser.scroll(0, 300);
       await this.addPaymentMethod.waitForDisplayed({ timeout: 25000 });
       await this.clickElement(this.addPaymentMethod);
    }

    async navigateToAddPaymentPage(){
      await browser.pause(16000)
      await browser.switchToFrame(0);
      await browser.pause(6000)
      await this.addNewPaymentMethod.waitForDisplayed({ timeout: 25000 });
     // await expect(await this.addNewPaymentMethod.isDisplayed()).toBe(true);  
      await this.addNewPaymentMethod.click();
    }

    async navigateToAddCreditDebitPaymentPage(){
        await this.creditDebitCardCheckbox.waitForDisplayed({ timeout: 15000 });
        await this.creditDebitCardCheckbox.click();
        console.log("Navigated to add Credit/Debit Page");
      }

      async creditDebitCardDetaills(){
        await this.cardNumberTxBx.waitForDisplayed({ timeout: 15000 });
        await this.enterData(this.cardNumberTxBx,"1234567812345678");
        await this.enterData(this.cardExpirationTxBx,"01/26");
        await this.enterData(this.cardSecurityCodeTxBx,"234");
        await this.enterData(this.cardholderNameTxBx,"Prahalad b");


        await this.enterData(this.addressLine1TxBx,"Address Line1");

        await this.enterData(this.addressLine2TxBx,"Address Line2");

        await this.enterData(this.postalCodeTxBx,"553131");

        await browser.scroll(0, 300);
        await browser.pause(900);

        await this.stateDropdown.click();

        //await this.enterData(this.stateDropdown,"NYC");

      //  await this.confirmButton.click();

        await browser.pause(6000);
        await this.legalConsentToStoreCard.click();


        //await this.cityTxBx.click();

      //  await this.enterData(this.cityTxBx,"NYC");

        await this.confirmButton.click();


        await browser.pause(60000)
        console.log("AddedCredit/Debit Card details on Credit/Debit Page");
      }
}

export default new PaymentMethod();
