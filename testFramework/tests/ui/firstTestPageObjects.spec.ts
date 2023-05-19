import { Options } from "selenium-webdriver/chrome.js";
import TodoPage from '../../pages/todoPage';
import { Builder, Browser, WebDriver } from 'selenium-webdriver';


describe('First test set', function() {
    this.timeout(25000);
    let driver: WebDriver;
    let todoPage: TodoPage;
    const options = new Options();

    this.beforeEach(async function() {
        driver = await new Builder().forBrowser(Browser.CHROME).setChromeOptions(options).build();
        todoPage = new TodoPage(driver);

        // Open website
        todoPage.loadTodoPage()
    })

    it('First test in First test set', async function() {

        try {
            await todoPage.addTodoListItem("webdriver")
            await todoPage.hoverTodoListItem()
            await todoPage.deleteTodoListItem()

        } finally {
            await driver.quit();
        }
    });

});