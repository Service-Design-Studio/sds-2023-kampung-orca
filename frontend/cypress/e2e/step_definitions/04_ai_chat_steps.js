import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import '@testing-library/cypress/add-commands';

Given("I am at the second topic lessons pathway page", () => {

});

Given("the post has no comments", () => {
  cy.contains('by Mohammad').click();
  cy.contains("Go Back").should('exist');
  cy.get('[data-cy="comment"]').should('not.exist');
});
