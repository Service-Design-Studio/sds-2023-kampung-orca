import { When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("I click on the button for Google login", () => {
  cy.get("#google-login").click();
});

Then("I should see the Google login popup", () => {
  cy.window().then((win) => win.close());
});

When("I visit any page", () => {});
