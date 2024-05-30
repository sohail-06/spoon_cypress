import { couponPage } from "../../e2e/pages/couponPage";
import { faker } from "@faker-js/faker";
import { format } from "date-fns";
import 'cypress-network-idle';
//const name =faker.name.findName()
export const couponFeatures= {
    addCoupon: () => {
        cy.get(couponPage.coupons).click(); 
        cy.wait(2000)
        cy.get(couponPage.addCoupons).click();
        cy.get(couponPage.couponCode).type(faker.random.alphaNumeric('10')); // Note the correction here
        cy.get(couponPage.discountPercentage).type(Math.floor(Math.random() * 100)); // Note the correction here
        cy.get(couponPage.discountLimit).type(faker.lorem.words(3));
        cy.get(couponPage.minimumCartValue).type(faker.datatype.number({ min: 10, max: 100 }));
        cy.get(couponPage.startDate).type(format(faker.date.birthdate(), 'yyyy-MM-dd')); // Note the correction here
        cy.get(couponPage.endDate).type(format(faker.date.future(), 'yyyy-MM-dd')); // Note the correction here
        cy.get(couponPage.couponSubmitButton).click();
        cy.contains("Coupon has been created succesfully!")
        cy.waitForNetworkIdle(4000);
        
    },
    editCoupon: () =>
        {
            cy.scrollTo('top');
            cy.get(couponPage.couponExposeMenu).eq(1).click();
            cy.get(couponPage.couponEditButton).first().click()
            cy.get(couponPage.couponCode).clear().type(faker.random.alphaNumeric('10')); // Note the correction here
            cy.get(couponPage.discountPercentage).clear().type(Math.floor(Math.random() * 100)); // Note the correction here
            cy.get(couponPage.discountLimit).clear().type(faker.lorem.words(3));
            cy.get(couponPage.minimumCartValue).clear().type(faker.datatype.number({ min: 10, max: 100 }));
            cy.get(couponPage.startDate).clear().type(format(faker.date.birthdate(), 'yyyy-MM-dd')); // Note the correction here
            cy.get(couponPage.endDate).clear().type(format(faker.date.future(), 'yyyy-MM-dd')); // Note the correction here
            cy.get(couponPage.couponSubmitButton).click();
        },
        deleteCoupon: () =>
            {
            cy.get(couponPage.couponExposeMenu).eq(1).click();
            cy.get(couponPage.couponEditButton).eq(1).click();
            cy.waitForNetworkIdle(3000);
            cy.get(couponPage.couponDelete).click()
            cy.contains('Coupon has been deleted succesfully')

            }

    


}