import { Given, Then, When } from '@cucumber/cucumber';
import LoginPage from "../../pages/login.page";
import PaymentMethod from '../../pages/paymentmethod';



Given(/^I click User profile link and Add New Payment Method$/, async () => {
    await PaymentMethod.navigateToPaymentPage();

});

Given(/^I click Add Payment Method Link$/, async () => {
    await PaymentMethod.navigateToAddPaymentPage();

});

Given(/^I should see CreditDebit card add page$/, async () => {
    await PaymentMethod.navigateToAddCreditDebitPaymentPage();

});

Given(/^I added CreditDebit details on payment page$/, async () => {
    await PaymentMethod.creditDebitCardDetaills();

});



