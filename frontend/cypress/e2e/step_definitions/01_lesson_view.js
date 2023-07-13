import {
  Given,
  When,
  Then,
  And,
} from "@badeball/cypress-cucumber-preprocessor";
import { buildRoute, descriptionToRouteMap } from "./steps_helper.cy";

// ----------- helper  ------------------

// Routing
Given("I am on the {string} page", (pageDescription) => {
  cy.visit(buildRoute(pageDescription));
});

Then("I go to the {string} page", (pageDescription) => {
  cy.visit(buildRoute(pageDescription));
});

And("I should be on the {string} page", (pageDescription) => {
  // cy.url().should('eq', buildRoute(pageDescription));
  const startingMatcher = new RegExp("^" + buildRoute(pageDescription));
  cy.url().should("match", startingMatcher);
});

// ----------- lesson_view.feature ------------------

// Scenario: Creation of basic lesson view
Given("that I am at the lessons pathway page", () => {
  cy.visit(buildRoute(descriptionToRouteMap["lesson nodes"]));
});
