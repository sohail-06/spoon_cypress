import { LoginPage } from '../../e2e/pages/loginPage';

export const LoginPageFeatures = {
  login: () => {
    cy.visit('/');
    cy.get(LoginPage.userName_textbox).type(Cypress.env('Email'));
    cy.get(LoginPage.password_textbox).type(Cypress.env('Password'));
    cy.get(LoginPage.loginButton).click();
    cy.contains('Welcome Spoon Admin')
  }
};
