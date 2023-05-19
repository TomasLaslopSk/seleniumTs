import { Locator, WebDriver } from "selenium-webdriver";
import { until, Key } from 'selenium-webdriver';

class SeleniumActions {

    driver: WebDriver;

    constructor(driver: WebDriver) {
        this.driver = driver;
    }

    async loadUrl(url: string) {
        await this.driver.get(url).catch(error => { throw(error) });
    }

    async pressElement(locator: Locator) {
        await this.driver.wait(until.elementLocated(locator), 8000)
            .click()
            .catch(error =>  { throw(error) });
    }

    async hoverOnElement(locator: Locator, duration: number) {
        let actions = this.driver.actions({bridge: true});
        const listElement = await this.driver.findElement(locator)
        await actions.move({duration: duration, origin:listElement, x: 1, y: 1})
            .perform()
            .catch(error => { throw(error) });
    }

    async enterTextAndPressEnterKey(locator: Locator, text: string) {
        await this.driver.wait(until.elementLocated(locator), 8000)
            .sendKeys(text, Key.RETURN)
            .catch(error => { throw(error) });
    }

    async waitUntilPageTitleIsDisplayed(title: string) {
        await this.driver.wait(until.titleIs(title), 4000).catch(error =>  { throw(error) });
    }

    async getInnerText(locator: Locator) {
        return await this.driver.wait(until.elementLocated(locator), 4000).getText()
            .catch(error => { throw(error) });
    }
}

export default SeleniumActions;