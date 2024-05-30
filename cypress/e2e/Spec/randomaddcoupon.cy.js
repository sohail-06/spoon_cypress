import { LoginPage } from "../pages/loginAdminPage.js";
import {faker} from '@faker-js/faker';
import { format } from 'date-fns';
import { couponPage } from "../pages/couponPage.js";

describe('Create coupon', () => {
    
    it('add coupon', () => {
        const loginPage = new LoginPage();
        const BASE_URL = Cypress.env('BASE_URL');
        const Email = Cypress.env('Email');
        const Password = Cypress.env('Password');

        cy.visit(BASE_URL);
        loginPage.enterUsername(Email);
        loginPage.enterPassword(Password);
        loginPage.clickContinue();
        
        cy.get(couponPage.coupons).click(); 
        cy.get(couponPage.addCoupons).click();
        cy.get(couponPage.couponCode).type(faker.random.alphaNumeric('10')); // Note the correction here
        cy.get(couponPage.discountPercentage).type(Math.floor(Math.random() * 101)); // Note the correction here
        cy.get(couponPage.discountLimit).type(faker.lorem.words(3));
        cy.get(couponPage.minimumCartValue).type(faker.datatype.number({ min: 10, max: 100 }));
        cy.get(couponPage.startDate).type(format(faker.date.birthdate(), 'yyyy-MM-dd')); // Note the correction here
        cy.get(couponPage.endDate).type(format(faker.date.future(), 'yyyy-MM-dd')); // Note the correction here
        cy.get(couponPage.couponSubmitButton).click();
    });
});
