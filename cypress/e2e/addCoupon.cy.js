import { LoginPage } from "./pages/loginAdminPage.js";

describe('Login Tests', () => {
    it('login', () => {
        const loginPage = new LoginPage();

        // Access environment variables directly
        const BASE_URL = Cypress.env('BASE_URL');
        const Email = Cypress.env('Email');
        const Password = Cypress.env('Password');

        cy.visit(BASE_URL);
        loginPage.enterUsername(Email);
        loginPage.enterPassword(Password);
        loginPage.clickContinue();
        cy.url().should('eq', 'https://spoon-admin.x-studio.io/dashboard');
    });
});