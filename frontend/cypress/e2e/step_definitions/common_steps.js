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
  cy.contains(buttonName).click();
});

Then("I should see a {} error with a {} button", (errorName, buttonName) => {});
