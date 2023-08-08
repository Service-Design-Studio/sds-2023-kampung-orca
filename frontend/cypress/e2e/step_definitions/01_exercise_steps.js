import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import '@testing-library/cypress/add-commands';

Then("I should be on the exercise page", () => {
  cy.visitRoute("exercise");
});

Given("I see a text box to type in an answer", () => {
  cy.get(`[data-cy="exercise-answer-input"]`).should("exist");
});

When("I do not type in anyting in the text box", () => {
  cy.get(`[data-cy="exercise-answer-input"]`).click();
});

Then("I should see that the submit exercise button is disabled", () => {
  cy.get(`[data-cy="exercise-submit-button"]`).should("be.disabled");
});


