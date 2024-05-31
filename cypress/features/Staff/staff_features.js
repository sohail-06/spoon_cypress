import { staffPage } from "../../e2e/pages/staff_page";
import { faker } from "@faker-js/faker";
import 'cypress-network-idle';
const name = faker.name.findName()
export const staffFeatures = {
  staffadd: () => {
    cy.get(staffPage.Manage_staff).click()
    cy.get(staffPage.Add_ManageStaff_button).click()
    cy.get(staffPage.StaffName).type(name)
    cy.get(staffPage.StaffPhoneNo).type('9876756432')
    cy.get(staffPage.StaffEmail).type(faker.internet.email())
    cy.get(staffPage.OutletDropdown).click()
    cy.get(staffPage.Select_Outlet).type("{enter}")
    cy.get(staffPage.Staff_Submit_Button).click()
    cy.contains("Staff added successfully.")

  },
  staffedit: () => {
    cy.scrollTo('bottom')
    cy.get(staffPage.Staff_expose_menu).first().click()
    cy.get(staffPage.Staff_edit_button).click()
    cy.get(staffPage.Staff_Submit_Button).click()
    cy.contains("Staff details updated successfully.")
    cy.waitForNetworkIdle(4000)

  },
  staffDelete: () => {
    cy.scrollTo('bottom')
    cy.get(staffPage.Staff_expose_menu).first().click()
    cy.get(staffPage.staffDelete).click()
    cy.get(staffPage.staffDelete).click()
    // cy.waitForNetworkIdle(4000) 
    cy.contains("Staff deleted successfully.")


  }

}





