import { LoginPageFeatures } from "../../features/Auth/login";

describe('Login Test', () => {
  it('Logs in successfully', () => {
    LoginPageFeatures.login();
  });
});











    //     beforeEach(function () {
        
//         cy.visit("/");
//     })
//     it('valid login', () => {
//         const loginPage = new LoginPage();
//         const Email = Cypress.env('Email');
//         const Password = Cypress.env('Password');

//         loginPage.enterUsername(Email);
//         loginPage.enterPassword(Password);
//         loginPage.clickContinue();
//         cy.url().should('eq', 'https://spoon-admin.x-studio.io/dashboard');
//     })

//     it('Invalid login', () => {
//         const loginPage = new LoginPage();
//         const Email = Cypress.env('Invalid_email');
//         const Password = Cypress.env('Invalid_password');

//         loginPage.enterUsername(Email);
//         loginPage.enterPassword(Password);
//         loginPage.clickContinue();
//         cy.contains('Invalid credentials.')
        
//     })
// });
