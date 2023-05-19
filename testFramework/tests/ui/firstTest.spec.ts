import { assert } from 'chai';
import { Builder, Browser, By, WebDriver, Actions, Key } from 'selenium-webdriver';

describe('First test set', function() {
    this.timeout(0)
    let driver: WebDriver;
    let actions: Actions;


    this.beforeEach(async function() {
        driver = await new Builder().forBrowser(Browser.CHROME).build();

        // Open website
        await driver.get('https://todomvc.com/examples/vanillajs/');
        actions = driver.actions({bridge: true});
    })

    it('First test in First test set', async function() {

        // Add new todo list item text and confirm by enter
        await driver.findElement(By.className('new-todo')).sendKeys('webdriver', Key.RETURN);

        // Hover on added todo list item
        const listElement = await driver.findElement(By.css('.todo-list li'))
        await actions.move({duration: 2000, origin:listElement, x: 1, y: 1}).perform()

        // Delete added todo list item
        await driver.findElement(By.className('destroy')).click()
   
        // Assert todo list item not exist anymore
        await driver.sleep(1000);
        assert.ok(listElement.isDisplayed())
    })

    this.afterEach(async function() {
        await driver.quit();
    })
})
