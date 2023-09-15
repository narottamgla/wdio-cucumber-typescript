
import { ChainablePromiseElement } from 'webdriverio';

const logStep = (logMessage: string) => console.log(`STEP || ${logMessage}`);
export type WebElement = ChainablePromiseElement<WebdriverIO.Element>

export default class BasePage {

    protected async open(path: string) {
        await browser.maximizeWindow();
        await browser.url(path);
        // await this.waitForPageLoad(path);
        // await BasePage.waitForPageUrl("disneyworld.disney.go.com/login");
    }

    protected static async waitForTitle(title) {
        return await browser.waitUntil(async () => {
            return browser.getUrl().then((pageTitle) => {
                console.log("Page Title : " + pageTitle);
                return pageTitle.indexOf(title) > -1;
            });
        }, { timeout: 60000, interval: 500, timeoutMsg: "Page Not loaded properly:" + title });
    }

    protected static async waitForPageUrl(path) {
        return await browser.waitUntil(() => {
            return browser.getUrl().then((pageUrl) => {
                console.log("Page Loaded properly: " + path);
                return pageUrl.indexOf(path) > -1;
            });
        }, { timeout: 60000, interval: 500, timeoutMsg: "Page Not loaded properly:" + path });
    }

    protected async clickElement(element: WebElement) {
        await element.click()
        logStep(`Clicked on Element: ${await element.selector}`);
    }

    protected async waitAndclick(element: WebElement, waitTime?: number) {
        await element.waitForClickable({ timeout: waitTime ? waitTime : 10000 })
        await element.click()
        logStep(`clicked on Element: ${await element.selector}`);
    }

    protected async enterData(element: WebElement, value: string | number) {
        await element.clearValue();
        await element.setValue(value);
        logStep(`Entered value : ${value} on element: ${await element.selector}`);
    }

    protected async waitAndEnterData(element: WebElement, value: string | number, waitTime?: number) {
        await element.waitForEnabled({ timeout: waitTime ? waitTime : 10000 });
        await element.clearValue();
        await element.setValue(value);
        logStep(`Entered value: ${value} on Element: ${await element.selector} `);
    }

    protected async scrollToElement(element: WebElement) {
        await element.scrollIntoView();
        logStep(`Scrolled to Element: ${await element.selector}`);
    }

    protected async selectDropdownByText(element: WebElement, text: string) {
        await element.selectByVisibleText(text)
        logStep(`Selected Element: ${await element.selector} by visible text: ${text}`);
    }

}
