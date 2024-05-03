export class LoginPage{
    enterUsername(user) {
        cy.get('[name="email"]').type(user)

    }
    enterPassword(pass) {
        cy.get('[type="password"]').type(pass)

    }
    clickContinue() {
        cy.get('[type="submit"]').click()

    }
}