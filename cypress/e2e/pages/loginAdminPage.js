export class LoginPage{
    enterUsername() {
        cy.get('[name="email"]').type('admin@itobuz.com')

    }
    enterPassword() {
        cy.get('[type="password"]').type('Admin@1234')

    }
    clickContinue() {
        cy.get('[type="submit"]').click()

    }
}