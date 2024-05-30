import { staffPage } from "../../e2e/pages/staff_page";
import { faker } from "@faker-js/faker";
const name =faker.name.findName()
export const staffFeatures = {
    staffadd: () => {
      cy.get(staffPage.Manage_staff).click()
      cy.get(staffPage.Add_ManageStaff_button).click()
      cy.get(staffPage.StaffName).type(name) 
      cy.get(staffPage.StaffPhoneNo).type(faker.phone.number())
      cy.get(staffPage.StaffEmail).type(faker.internet.email())
      cy.get(staffPage.OutletDropdown).click()
      cy.get(staffPage.Select_Outlet).type("enter")
      cy.get(staffPage.Staff_Submit_Button).click()
      cy.contains("Staff added successfully.")

    },
        staffedit: () => {
        cy.url().should('eq', 'https://spoon-admin.x-studio.io/user?page=1')
        cy.wait(4000)
        cy.get(staffPage.Staff_expose_menu).first().click()
        cy.get(staffPage.Staff_edit_button).click()
        cy.get(staffPage.Staff_Submit_Button).click()
        cy.contains("Staff details updated successfully.")
        cy.wait(2000)

    }

}

   

   

