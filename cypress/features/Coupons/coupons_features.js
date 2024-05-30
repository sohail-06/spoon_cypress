import { couponPage } from "../../e2e/pages/couponPage";
import { faker } from "@faker-js/faker";
import { format } from "date-fns";
//const name =faker.name.findName()
export const couponFeatures= {
    addCoupon: () => {
        cy.get(couponPage.coupons).click(); 
        cy.get(couponPage.addCoupons).click();
        cy.get(couponPage.couponCode).type(faker.random.alphaNumeric('10')); // Note the correction here
        cy.get(couponPage.discountPercentage).type(Math.floor(Math.random() * 90)); // Note the correction here
        cy.get(couponPage.discountLimit).type(faker.lorem.words(3));
        cy.get(couponPage.minimumCartValue).type(faker.datatype.number({ min: 10, max: 100 }));
        cy.get(couponPage.startDate).type(format(faker.date.birthdate(), 'yyyy-MM-dd')); // Note the correction here
        cy.get(couponPage.endDate).type(format(faker.date.future(), 'yyyy-MM-dd')); // Note the correction here
        cy.get(couponPage.couponSubmitButton).click();
    },

    editCoupon: () =>
        {
            cy.get(couponPage.couponEditButton).click();
            cy.get(couponPage.couponCode).type(faker.random.alphaNumeric('10')); // Note the correction here
            cy.get(couponPage.discountPercentage).type(Math.floor(Math.random() * 90)); // Note the correction here
            cy.get(couponPage.discountLimit).type(faker.lorem.words(3));
            cy.get(couponPage.minimumCartValue).type(faker.datatype.number({ min: 10, max: 100 }));
            cy.get(couponPage.startDate).type(format(faker.date.birthdate(), 'yyyy-MM-dd')); // Note the correction here
            cy.get(couponPage.endDate).type(format(faker.date.future(), 'yyyy-MM-dd')); // Note the correction here
            cy.get(couponPage.couponSubmitButton).click();


        }


}