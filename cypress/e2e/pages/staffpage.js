import { faker } from '@faker-js/faker';
export class Staff {

    addStaff() {
        const name = faker.name.findName()

        // cy.url().should('eq', 'https://spoon-admin.x-studio.io/dashboard');
        cy.xpath('//span[normalize-space()="Manage Staff"]').click()
        cy.xpath('//div[contains(@title,"staff/delivery partner")]').click()
        cy.xpath('//input[@name="name"]').type(name)
        cy.xpath('//input[@name="phoneNumber"]').type(faker.phone.number())
        cy.xpath('//div[@class="multi-select__input-container css-19bb58m"]').click()
        cy.get('#react-select-3-option-1').type("{enter}")
        cy.xpath('//input[@name="email"]').type(faker.internet.email())
        cy.xpath('//button[@type="submit"]').click()
        cy.contains("Staff added successfully.")
        cy.wait(3000)

    }
    editStaff() {

        // cy.url().should('eq', 'https://spoon-admin.x-studio.io/dashboard');
        //cy.xpath('//span[normalize-space()="Manage Staff"]').click()
        cy.url().should('eq', 'https://spoon-admin.x-studio.io/user?page=1')
        cy.wait(4000)
        cy.get('tbody .cursor-pointer').first().click()
        cy.xpath('//td[6]//button[1]').click()
        cy.xpath('//button[@type="submit"]').click()
        cy.contains("Staff details updated successfully.")
        cy.wait(2000)

    }
    deleteStaff() {
        //cy.xpath('//span[normalize-space()="Manage Staff"]').click()
        cy.url().should('eq', 'https://spoon-admin.x-studio.io/user?page=1')
        cy.get('tbody .cursor-pointer').first().click()
        cy.xpath('//button[normalize-space()="Delete"]').click()
        cy.xpath('//button[normalize-space()="Delete"]').click()
        cy.contains("Staff deleted successfully.")
    }

}
export default Staff
