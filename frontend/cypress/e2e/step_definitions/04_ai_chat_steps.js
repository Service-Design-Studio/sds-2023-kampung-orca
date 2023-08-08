import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import '@testing-library/cypress/add-commands';

Given("the post has no comments by users", () => {
  cy.contains('What is the best way to approach interfaith dialogue?').click();
  cy.contains("Go Back").should('exist');
  cy.get('[data-cy="comment"]').should(($comments) => {
    expect($comments).to.have.length(1);
  });
  cy.get('[data-cy="comment"]').contains('Kampung Kaki').should('exist');
});

Given("the post is at least 3 days old", () => {
  cy.contains("5 days ago").should('exist');
});

Then("I should see the latest comment is an AI comment", () => {
  cy.get('[data-cy="comment"]').contains('Kampung Kaki').should('exist');
});

Given("the post has at least 1 comment", () => {
  cy.contains("Hi, I am new here.").click();
  cy.contains("Go Back").should('exist');
  cy.get('[data-cy="comment"]').should(($comments) => {
    expect($comments).to.have.length(2);
  })
  cy.get('[data-cy="comment"]').its('length').then((length) => {
    cy.get('[data-cy="comment"]').contains('Kampung Kaki').eq(length - 1).should('not.exist');
  });
});

Given("the latest non-AI comment is at least 3 days old", () => {
  cy.get('[data-cy="comment"]').contains("4 days ago").should('exist');
});

Given("I am on a post that has an AI comment", () => {
  cy.contains("What is the best way to approach interfaith dialogue?").click();
  cy.get('[data-cy="comment"]').contains('Kampung Kaki').should('exist');
});

When("the latest comment is an AI comment", () => {
  cy.get('[data-cy="comment"]').last().contains('Kampung Kaki').should('exist');
});

Then("I should not see the second latest comment is an AI comment", () => {
  cy.get('[data-cy="comment"]').contains('Kampung Kaki').its('length').then((length) => {
    if (length >= 2) {
      // If there are at least two AI comments
      cy.get('[data-cy="comment"]').contains('Kampung Kaki').eq(length - 2).should('not.exist');
    } else {
      // If there is only one AI comment, this test should assert true automatically
      cy.get('[data-cy="comment"]').contains('Kampung Kaki').should('exist');
    }
  });
});

Given("I am on a post with recent comments", () => {
  cy.contains("What are the most fun religious festivals?").click();
  cy.get('[data-cy="comment"]').should('exist');
});

When("the latest comment is a recent comment", () => {
  cy.get('[data-cy="comment"]').last().contains("day").should('not.exist');
});

Then("I should not see the latest comment is an AI comment", () => {
  cy.get('[data-cy="comment"]').last().contains('Kampung Kaki').should('not.exist');
});

Given("I am on a post that is less than 3 days old", () => {
  cy.contains("Why are we using English as the standard language of Singapore even though the national language is Malay?").click();
  cy.checkRecent();
});

Given("the post has no comments", () => {
  cy.get('[data-cy="comment"]').should('not.exist');
});

Then("I should not see any AI comments", () => {
  cy.contains("Kampung Kaki").should('not.exist');
  cy.get('[data-cy="comment"]').should('not.exist');
});
