import { LoginPage } from "./pages/loginAdminPage.js"

it('login', function() {
   
    const loginPage = new LoginPage(); // Create instance inside the test case

    cy.visit('https://spoon-admin.x-studio.io')

    loginPage.enterUsername()
    loginPage.enterPassword()
    loginPage.clickContinue()
});

