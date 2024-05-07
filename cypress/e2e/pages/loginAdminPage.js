export class LoginPage{
    
    userName_textbox = '[name="email"]'
    password_textbox = '[type="password"]'
    Login_Button = '[type="submit"]'
    
    enterUsername(user) {
        cy.get(this.userName_textbox).type(user)

    }
    enterPassword(pass) {
        cy.get(this.password_textbox).type(pass)

    }
    clickContinue() {
        cy.get(this.Login_Button).click()

    }
}