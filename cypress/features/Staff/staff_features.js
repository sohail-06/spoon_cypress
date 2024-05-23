import { staffPage } from "../../e2e/pages/staff_page";
import { faker } from "@faker-js/faker";
const name =faker.name.findName()
export const staffFeatures = {
    staff: () => {
       cy.get(staffPage.Manage_staff).click()
      cy.get(staffPage.Add_ManageStaff_button).click()
      cy.get(staffPage.StaffName).type(name) 
      cy.get(staffPage.StaffPhoneNo).type(faker.phone.number())
      cy.get(staffPage.StaffEmail).type(faker.internet.email())
      cy.get(staffPage.OutletDropdown).click()
      cy.get(staffPage.Select_Outlet).type("enter")
      cy.get(staffPage.Staff_Submit_Button).click()
      cy.contains("Staff added successfully.")

    }
}


