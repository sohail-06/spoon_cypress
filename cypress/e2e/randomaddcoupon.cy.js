import { LoginPage } from "./pages/loginAdminPage.js";
import {faker} from '@faker-js/faker';

describe('Create coupon', () => {
    
    it('add coupon', () => {
        const loginPage = new LoginPage();
        const alphanumericString = faker.random.alphaNumeric(10);
        console.log(alphanumericString);
        
        // Access environment variables directly
        const BASE_URL = Cypress.env('BASE_URL');
        const Email = Cypress.env('Email');
        const Password = Cypress.env('Password');

        cy.visit(BASE_URL);
        loginPage.enterUsername(Email);
        loginPage.enterPassword(Password);
        loginPage.clickContinue();
        
        cy.get('[href="/coupons?page=1"]').click(); 
        cy.get('[class="pe-3"]').click();
        cy.get('[name="couponCode"]').type(faker.random.alphaNumeric('10')); // Note the correction here
        cy.get('[name="discountPercentage"]').type(faker.datatype.bigInt({ min: 10, max: 100 })); // Note the correction here
        cy.get('[name="discountLimit"]').type(faker.lorem.words(3));
        cy.get('[name="minimumCartValue"]').type(faker.datatype.bigInt({ min: 10, max: 100 }));
        cy.get('[placeholder="Start Date"]').type(faker.date.birthdate); // Note the correction here
        cy.get('[placeholder="End Date"]').type(faker.date.future()); // Note the correction here
        cy.get('[type="submit"]').click();
    });
});
