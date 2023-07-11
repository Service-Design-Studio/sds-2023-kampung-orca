import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I am at the {} page", (pageName) => {
  cy.visitRoute(pageName);
});

Then("I should go to the {} page", (pageName) => {
  cy.matchRoute(pageName);
});
