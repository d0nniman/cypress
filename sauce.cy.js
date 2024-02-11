


const not_existing_username = 'no';
const username = 'standard_user';
const password = 'secret_sauce';
const firstname = 'First Name';
const lastname = 'Last Name';
const postalcode = 'Zip/Postal Code';


describe('Testing Sauce', () => {
    //Заход на сайт
    beforeEach('Заход на сайт', () => {
        cy.visit('https://www.saucedemo.com/', {failOnStatusCode: true});  
    })

    //"Обход" 401 ошибки
    /*
    it('"Все-В-Одном" Тест', () => {
        
        //Вход в несуществующий акаунт
        cy.get('input[id="user-name"]').type(not_existing_username)
        cy.get('input[id="password"]').type(password)
        cy.get('input[id="login-button"]').click()

        //Очистка Инпутов
        cy.get('input[id="user-name"]').clear()
        cy.get('input[id="password"]').clear()

        //Вход в аккаунт
        cy.get('input[id="user-name"]').type(username)
        cy.get('input[id="password"]').type(password)
        cy.get('input[id="login-button"]').click()

        //Добавление товаров в корзину
        cy.get('button[id="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('button[id="add-to-cart-sauce-labs-fleece-jacket"]').click()
        cy.get('button[id="add-to-cart-sauce-labs-onesie"]').click()

        //Вход в корзину
        cy.get('div[id="shopping_cart_container"]').click()

        //Удаление товаров из корзины
        cy.get('button[id="remove-sauce-labs-backpack"]').click()
        cy.get('button[id="remove-sauce-labs-fleece-jacket"]').click()
        cy.get('button[id="remove-sauce-labs-onesie"]').click()

        //Заполнение информации покупателя
        cy.get('button[id="checkout"]').click()
        cy.get('input[id="first-name"]').type(firstname)
        cy.get('input[id="last-name"]').type(lastname)
        cy.get('input[id="postal-code"]').type(postalcode)

        //Покупка "ничего" (покупка товаров работает без товаров в корзине) и возвращение на главную
        cy.get('input[id="continue"]').click()
        cy.get('button[id="finish"]').click()
        cy.get('button[id="back-to-products"]').click()
    })
    */

    it('Тестирование входа в несуществующий аккаунт', () => {
        cy.get('input[id="user-name"]').type(not_existing_username)
        cy.get('input[id="password"]').type(password)
        cy.get('input[id="login-button"]').click()
    })

    it('Тестирование входа в аккаунт', () => {
        //Очистка Инпутов
        cy.get('input[id="user-name"]').clear()
        cy.get('input[id="password"]').clear()

        //Ввод данных
        cy.get('input[id="user-name"]').type(username)
        cy.get('input[id="password"]').type(password)
        cy.get('input[id="login-button"]').click()
    })

    //Тестирование функцуионала корзины
    it('Добавление товаров в корзину', () => {
        cy.get('button[id="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('button[id="add-to-cart-sauce-labs-fleece-jacket"]').click()
        cy.get('button[id="add-to-cart-sauce-labs-onesie"]').click()
    })

    it('Переход в корзину, удаление товаров из корзины', () => {
        //Переход в корзину
        cy.get('div[id="shopping_cart_container"]').click()

        //Удаление товаров из корзины
        cy.get('button[id="remove-sauce-labs-backpack"]').click()
        cy.get('button[id="remove-sauce-labs-fleece-jacket"]').click()
        cy.get('button[id="remove-sauce-labs-onesie"]').click()
    })

    it('Заполнение информации покупателя', () => {
        //Переход на страницу заполнения данных покупателя
        cy.get('button[id="checkout"]').click()

        //Заполнение данных покупателя
        cy.get('input[id="first-name"]').type(firstname)
        cy.get('input[id="last-name"]').type(lastname)
        cy.get('input[id="postal-code"]').type(postalcode)
    })

    //Покупка товаров работает и без товаров в корзине
    it('Покупка и возвращение на главную страницу', () => {
        cy.get('input[id="continue"]').click()
        cy.get('button[id="finish"]').click()
        cy.get('button[id="back-to-products"]').click()
    })
})