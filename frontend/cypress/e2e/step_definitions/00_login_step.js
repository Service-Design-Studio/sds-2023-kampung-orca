/* eslint-disable cypress/no-unnecessary-waiting */
import { When, Then, Given} from "@badeball/cypress-cucumber-preprocessor";
import '@testing-library/cypress/add-commands';




When("I click on the button for Google login", () => {
  cy.findByText("Sign in with Google").click({ force: true });
  cy.wait(1000);
});

Then("I should see the Google login page", () => {
  cy.origin('https://accounts.google.com', () => {
  cy.get('input[type="email"]').should("exist");
  cy.contains('Sign in with Google').should("exist");
  });
});

When("I visit any page", () => {});

Then("I should see Sign in with Google Button", () => {
  cy.findByText("Sign in with Google").should("exist");
}); 
