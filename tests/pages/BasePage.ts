
import { ChainablePromiseElement } from 'webdriverio';
import * as fs from 'fs'
const logStep = (logMessage: string) => console.log(`STEP || ${logMessage}`);
export type WebElement = ChainablePromiseElement<WebdriverIO.Element>

export default class BasePage {

    protected async open(path: string) {
        await browser.maximizeWindow();
        await browser.url(path)
    }

    protected async clickElement(element: WebElement) {
        await element.click()
        logStep(`Clicked on Element: ${await element.selector}`);
    }

    protected async waitAndclick(element: WebElement, waitTime?: number) {
        await element.waitForClickable({ timeout: waitTime ? waitTime : 10000, timeoutMsg: "Timeout while clicking" })
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


    public async writeToJson(path: string, username: string,pass:string, rewrite: boolean = true) {

        rewrite=true;
        let data = [{
            username: username,
        }];
        let old_data: any = fs.readFileSync(__dirname + path)
     /**  if (old_data.length == 0 || rewrite == true) {
            fs.writeFileSync(__dirname + path, JSON.stringify(data, null, 2))
            return
        }**/
        let json_obj: any = JSON.parse(old_data) // without brackets it reverts an error
       json_obj.push({username,pass})
        fs.writeFileSync(__dirname + path, JSON.stringify(json_obj, null, 2))
    }

    public async readJsonFile(path: string) {
        let old_data: any = fs.readFileSync(__dirname + path)
        let json_obj: any = JSON.parse(old_data)
        let totalRecords = json_obj.size();
        return json_obj[Math.floor(Math.random() * totalRecords) + 1];
    }





}
