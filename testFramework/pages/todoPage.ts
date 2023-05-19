import { Driver } from "selenium-webdriver/chrome";
import { By, WebDriver } from 'selenium-webdriver';
import seleniumactions from '../utils/seleniumActions';

class TodoPage {
    seleniumactions: seleniumactions;

    // Locators

    newTodoInputField = By.className('new-todo')
    todoListElement = By.css('.todo-list li')
    destroyButtonForTodoListElement = By.className('destroy')

    constructor(driver: WebDriver) {
        this.seleniumactions = new seleniumactions(driver);
    }

    async loadTodoPage() {
        const url = 'https://todomvc.com/examples/vanillajs/'
        await this.seleniumactions.loadUrl(url)
    }

    async addTodoListItem(text: string) {
        await this.seleniumactions.enterTextAndPressEnterKey(this.newTodoInputField, text)
    }

    async hoverTodoListItem() {
        await this.seleniumactions.hoverOnElement(this.todoListElement, 2000)
    }

    async deleteTodoListItem() {
        await this.seleniumactions.pressElement(this.destroyButtonForTodoListElement)
    }
}

export default TodoPage;