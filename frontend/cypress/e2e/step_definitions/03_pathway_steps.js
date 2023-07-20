/* eslint-disable cypress/no-unnecessary-waiting */
import { Given, When, Then, Before } from "@badeball/cypress-cucumber-preprocessor";
//import { data } from "cypress/types/jquery";

const gatewayUrl = Cypress.env("gatewayUrl");


Given("that I am at the topic list page", () => {
  cy.visitRoute("topic list");
});

When("I click on topic {}", (topic_id) => {
  cy.get(`[data-cy="${topic_id}"]`).click();
});


When("I mouse scroll up on the lessons pathway page", () => {
  cy.get('a[href="/curriculum/lesson/00004"]').scrollIntoView().should('be.visible');
});

Then("I will see the lessons pathway move right", () => {
  cy.get('a[href="/curriculum/lesson/00004"]').should('be.visible');
}); 

When("I mouse hover on a lesson node on the lessons pathway page", () => {
  cy.get('a[href="/curriculum/lesson/00001"]').trigger('mouseover');
  cy.wait(500);
});

Then("I will see an info box for the lesson", () => {
  cy.get('[data-cy="popup:00001"]').should('exist');
});


Then("I should see the lesson node's icon", () => {
  cy.get('[data-cy="icon:00001"]').should('exist');
});

Then("I should see the pathway between lesson nodes", () => {
  cy.get('div.css-pokqdi').should('exist');
});










