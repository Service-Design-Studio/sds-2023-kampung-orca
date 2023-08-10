import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import '@testing-library/cypress/add-commands';

Then("I should be on the exercise page", () => {
  cy.visitRoute("exercise");
});

Given("I see a text box to type in my answer", () => {
  cy.get(`[data-cy="exercise-answer-input"]`).should("exist");
});

When("I do not type in anything in the text box", () => {
  cy.get(`[data-cy="exercise-answer-input"]`).click();
});

Then("I should see that the submit exercise button is disabled", () => {
  cy.get(`[data-cy="exercise-submit-button"]`).should("be.disabled");
});

Given("I type in an unintended answer in the text box", () => {
  cy.get(`[data-cy="exercise-answer-input"]`).type("Interfaith dialogue is not important!");
});

Given("I see that the submit exercise button is enabled", () => {
  cy.get(`[data-cy="exercise-submit-button"]`).should("be.enabled");
});

When("I press the submit exercise button", () => {
  cy.get(`[data-cy="exercise-submit-button"]`).click();
});

Then("I should see a message to tell me if I want to confirm my answer", () => {
  cy.get(`[data-cy="exercise-submit-alert"]`).should("exist");
});

Then("I can press the cancel button to cancel my submission", () => {
  cy.get(`[data-cy="exercise-submit-alert-cancel-button"]`).click();
});

Given("I type in an intended answer in the text box", () => {
  cy.get(`[data-cy="exercise-answer-input"]`).type("Interfaith dialogue is important!");
});

When("I press the confirm button on the confirmation message", () => {
  cy.get(`[data-cy="exercise-submit-alert-button"]`).click();
});

Then("I should see my answer in the answer box", () => {
  cy.wait(1000);
  cy.get(`[data-cy="exercise-answer-input"]`).should("not.exist");
});

Then("I should see a confirmation message that my answer is submitted", () => {
  cy.get(`[data-status="success"]`).should("exist");
});

Given("I have submitted and confirmed my answer", () => {
  cy.get(`[data-cy="exercise-answer-input"]`).type("Interfaith dialogue is important!");
  cy.get(`[data-cy="exercise-submit-button"]`).click();
  cy.get(`[data-cy="exercise-submit-alert-button"]`).click();
  cy.wait(5000);
});

When("I see an empty AI response", () => {
  cy.get(`[data-cy="exercise-ai-response"]`).should("have.value", "");
});

Then("I should see a loading spinner while waiting for an AI response", () => {
  cy.get(`[data-cy="exercise-spinner"]`).should("exist");
});

Then("I should see the AI response in the AI response box", () => {
  cy.get(`[data-cy="exercise-ai-response"]`).should("exist");
});

Given("I see an AI response", () => {
  cy.get(`[data-cy="exercise-ai-response"]`).should("exist");
});

// When("I click on the resubmit exercise button", () => {
//   cy.get(`[data-cy="exercise-resubmit-button"]`).click();
// });

Then("I should be able to resubmit my answer", () => {
  cy.get(`[data-cy="exercise-answer-input"]`).should("exist");
  cy.get(`[data-cy="exercise-submit-button"]`).should("exist");
});

When("I go to the lesson completion page", () => {
  cy.get(`a[href="/curriculum/lesson/00001/lesson_completed"]`).click();
});

When("I return to the exercise page", () => {
  cy.get(`[data-cy="test-your-understanding"]`).click();
});

Then("I should see my previous answer in the text box as a placeholder", () => {
  cy.get(`[data-cy="exercise-answer-input"]`).should("have.attr", "placeholder", "Previous Answer: Interfaith dialogue is important!");
});

Then("I should see the previous AI response", () => {
  cy.get(`[data-cy="exercise-ai-response"]`).should("exist");
});















