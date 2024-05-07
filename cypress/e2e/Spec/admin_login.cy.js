//import cypress from "cypress";
import { LoginPage } from "../pages/loginAdminPage.js"

describe('All Login test', function () {

    beforeEach(function () {
        
        cy.visit("/");
    })
    it('valid login', () => {
        const loginPage = new LoginPage();

        // Access environment variables directly
        // const BASE_URL = Cypress.env('BASE_URL');
        const Email = Cypress.env('Email');
        const Password = Cypress.env('Password');

        loginPage.enterUsername(Email);
        loginPage.enterPassword(Password);
        loginPage.clickContinue();
        cy.url().should('eq', 'https://spoon-admin.x-studio.io/dashboard');
    })

    it('Invalid login', () => {
        const loginPage = new LoginPage();

        // Access environment variables directly
        // const BASE_URL = Cypress.env('BASE_URL');
        const Email = Cypress.env('Invalid_email');
        const Password = Cypress.env('Invalid_password');

        // cy.visit(BASE_URL);
        loginPage.enterUsername(Email);
        loginPage.enterPassword(Password);
        loginPage.clickContinue();
        cy.contains('Invalid credentials.')
        //cy.url().shoulInvalid credentials.d('eq', 'https://spoon-admin.x-studio.io/dashboard');
    })
});
