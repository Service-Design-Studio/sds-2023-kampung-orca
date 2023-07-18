import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

Given("I am logged in", () => {
  cy.loginByGoogleApi();
});

Given("I am at the {} page", (pageName) => {
  cy.visitRoute(pageName);
});

Then("I should go to the {} page", (pageName) => {
  cy.matchRoute(pageName);
});

When("I click on the {} button", (buttonName)=>{
  cy.clickButton(buttonName);
});

Then("I should see a {} error", (errorName) => {
  cy.checkErrorMessage(errorName);
});


Then("I should not see the {} button", (buttonName) => {
  cy.checkNoButton(buttonName);
});

Then("I should see the {} button", (buttonName) => {
  cy.checkButton(buttonName);
});
