import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import '@testing-library/cypress/add-commands';

When("I click on the forum button", () => {
  cy.clickButton("Forum");
});

Then("I should see the forum page", () => {
  cy.findByText("Create Post").should("exist");
});
