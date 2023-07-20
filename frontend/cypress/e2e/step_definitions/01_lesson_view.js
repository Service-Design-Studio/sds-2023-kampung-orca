import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";

// ----------- helper  ------------------

// Routing
Given("I am on the {string} page", (pageDescription) => {
  cy.visit(buildRoute(pageDescription));
});

Then("I go to the {string} page", (pageDescription) => {
  cy.visit(buildRoute(pageDescription));
});

Then("I should be on the {string} page", (pageDescription) => {
  // cy.url().should('eq', buildRoute(pageDescription));
  const startingMatcher = new RegExp("^" + buildRoute(pageDescription));
  cy.url().should("match", startingMatcher);
});

// ----------- lesson_view.feature ------------------

// Scenario: Creation of basic lesson view
Given("that I am at the lessons pathway page", () => {
  cy.visit(buildRoute(descriptionToRouteMap["lesson nodes"]));
});
