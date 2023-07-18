import { When, Then, Given} from "@badeball/cypress-cucumber-preprocessor";
import '@testing-library/cypress/add-commands';




When("I click on the button for Google login", () => {
  cy.findByText("Sign in with Google").should("exist");
});

Then("I should see the Google login popup", () => {
  cy.window().then((win) => win.close());
});

When("I visit any page", () => {});

Then("I should see Sign in with Google Button", () => {
  cy.findByText("Sign in with Google").should("exist");
}); 
