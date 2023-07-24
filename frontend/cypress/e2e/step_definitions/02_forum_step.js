import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import '@testing-library/cypress/add-commands';

Given("the forum box is open", () => {
  cy.visitRoute("lesson view");
  cy.clickButton("forum");
});

Then("I should see the New Post inputs", () => {
  cy.get('button').contains('Post').should('exist');
});

//TODO - Scenario: Posting new thread
When("I enter new post details",() => {

});

//TODO - Posting new thread
Then("I should see the new post", () => {

});

Given("a post with the following details:", (datatable) => {

  datatable.hashes().forEach((element) => {
  cy.contains("Curious about Christianity").click();
  
  
  // cy.get(“#email”).clear();
  
  // cy.get(“#email”).type(element.email);
  
  // cy.get(“#passwd”).clear();
  
  // cy.get(“#passwd”).type(element.validpassword);
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