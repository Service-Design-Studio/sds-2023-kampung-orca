import { Given, When, Then, Before, And } from "@badeball/cypress-cucumber-preprocessor";
import { data } from "cypress/types/jquery";

const gatewayUrl = Cypress.env("gatewayUrl");

const tokenInCache = false;
const dataToken = null;

Before(() => {
  console.log('test')
  if (!tokenInCache){
    cy.getDataToken().then((dataToken)=> {
      cy.setDataToken(dataToken);
      tokenInCache = true;
      console.log("token cached")
    })
  }
});

When("I click on a topic", () => {
  // check for a button that has a div with the following class: css-1omwhl
  cy.get('button').contains('div.css-1omwhlw').should('exist');
});

Then("I should go to the lessons pathway page", () => {
  cy.matchRoute('lessons-pathway');
});

When("I mouse scroll up on the lessons pathway page", () => {
  cy.get('a[href="/curriculum/lesson/4"]').scrollIntoView().should('be.visible');
});

Then("I will see the lessons pathway move right", () => {
  cy.get('a[href="/curriculum/lesson/4"]').should('be.visible');
});

When("I mouse hover on a lesson node on the lessons pathway page", () => {
  cy.get('a[href="/curriculum/lesson/1"]').trigger('mouseover');
});

Then("I will see an info box for the lesson", () => {
  cy.get('div.chakra-popover__body css-rfb739').should('exist');
});

And("I will see the progress bar in the info box", () => {
  cy.get('div[role="progressbar"]').should('exist');
});

Then("I should see the lesson node's icons", () => {
  cy.get('div.chakra-icon css-18ajio').should('exist');
});

Then("I should see the pathway between lesson nodes", () => {
  cy.get('div.css-pokqdi').should('exist');
});









