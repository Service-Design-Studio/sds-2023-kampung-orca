import { Given } from "@badeball/cypress-cucumber-preprocessor";

Given("I am at the {} page", (pageDescription) => {
  cy.visitRoute(pageDescription);
});
