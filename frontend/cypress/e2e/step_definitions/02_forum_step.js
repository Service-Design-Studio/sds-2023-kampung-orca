import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import '@testing-library/cypress/add-commands';

Given("the forum box is open", () => {
  cy.visitRoute("lesson view");
  cy.clickButton("forum");
});

Then("I should see the New Post inputs", () => {
  cy.get('button').contains('Post').should('exist');
});

Given("a post with the following details:", (datatable) => {
  datatable.hashes().forEach((element) => {
  cy.contains("Curious about Christianity").click();
  });

  });

Given("a comment with the following details:", (datatable) => {
    datatable.hashes().forEach((element) => {
    cy.contains("I want to know more!")
    cy.contains("Go Back").click()
    });
    });

Given("I am on the forum home page", () => {
  cy.get('[data-cy="forum-close-button"]').should('exist');
})

When("I create a post with the following details:", (datatable) => {
  cy.contains("Create New Post").click();
  datatable.hashes().forEach((element) => {
  cy.get('[data-cy="post-title-input"]').type(element.Title);
  cy.get('[data-cy="post-content-input"]').type(element.Content);
  cy.get('[data-cy="post-button"]').click()
  // cy.get(“#email”).clear();

  // cy.get(“#email”).type(element.email);

  // cy.get(“#passwd”).clear();

  // cy.get(“#passwd”).type(element.validpassword);
  });
  });

  Then("I should see the post on the forum home page",()=>{
    cy.contains("Internalised Racism").should('exist');
  })

  When("I try to create a post with the following details:", (datatable) => {
    cy.contains("Create New Post").click();
    datatable.hashes().forEach((element) => {
    cy.get('[data-cy="post-title-input"]').type(element.Title);
    cy.get('[data-cy="post-content-input"]').type(element.Content);
    });
    });

  Then("The Post button should be disabled", ()=>{
    cy.get('[data-cy="post-button"]')
    });

  When("I click on the post titled {}", (postTitle)=>{
    cy.contains(postTitle).click();
  });

  Then("I should see the forum post page", ()=>{
    cy.contains("Go Back").should('exist');
  });
  Given("I am on the forum post page", ()=>{
    cy.contains('by Thomas').click();
    cy.contains("Go Back").should('exist');
  });

  Then("I should see no comments",()=>{
    cy.get('[data-cy="comment"]').should('not.exist');
  });

  Then("I should see the interface to create a new comment",()=>{
    cy.get('[data-cy="post-comment-button"]').should('exist');
  });

  Then("I have created a post", ()=>{
    cy.contains('by Thomas').click();
  });

  When("I edit my post with the following details:", (datatable) => {
    cy.get('[data-cy="edit-post-button"]').click();
    datatable.hashes().forEach((element) => {
    cy.get('[data-cy="edit-content-text-area"]').clear();
    cy.get('[data-cy="edit-content-text-area"]').type(element.Content);
    });
    cy.get('[data-cy="confirm-edit-post"]').click();
    });

    Then("the content should be updated on the forum post page",()=>{
      cy.contains("Does internalised racism really exist?").should('exist');
    })