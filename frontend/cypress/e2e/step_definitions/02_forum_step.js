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


