import { Given, When } from "@badeball/cypress-cucumber-preprocessor";

// Given("I am at a lesson view page", () => {
//   cy.visit("http://localhost:3000/lesson-view/2");
// });

When("I click on a lesson", () => {
  cy.get(`a[href="/lesson-view"]`).first().click();
});
