import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import '@testing-library/cypress/add-commands';


const today = new Date();
const nextThreeDays = new Date(today.setDate(today.getDate() + 3));

console.log(nextThreeDays);

Given("the post has no comments", () => {
  cy.contains('Hi, I am new here.').click();
  cy.contains("Go Back").should('exist');
  cy.get('[data-cy="comment"]').should('not.exist');
});

Given("the post is 3 days old", () => {
  cy.contains("3 days ago").should('exist');
});
