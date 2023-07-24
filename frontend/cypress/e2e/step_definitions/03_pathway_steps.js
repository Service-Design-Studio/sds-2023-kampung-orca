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
  cy.get(`[data-cy="scrollbar"]`).scrollTo(500,0);
  cy.wait(100);
});

Then("I will see the lessons pathway move right", () => {
  //TODO - seed an extra lesson and test with the line right below (will hide the first node)
  // cy.get('a[href="/curriculum/lesson/00001"').should('not.exist');
  cy.get('a[href="/curriculum/lesson/00001"').should('exist');
});

When("I mouse hover on a lesson node on the lessons pathway page", () => {
  cy.get('a[href="/curriculum/lesson/00001"]').trigger('mouseover');
  cy.wait(500);
});

Then("I will see an info box for the lesson", () => {
  cy.get('[data-cy="popup"]').should('exist');
});


Then("I should see the lesson node's icon", () => {
  cy.get('svg').should('exist');

});

Then("I should see the pathway between lesson nodes", () => {
  cy.get('div.css-pokqdi').should('exist');
});

// FIXME: Visit the route in the comment once it has been routed to the error page
When("I make a GET request to lesson 00005", () => {
  // cy.visit(`${gatewayUrl}/curriculum/lesson/00005`);
  cy.visitRoute("bogus link");
});

Then("I should see an error page with a button that redirects me back to the main screen", () => {
  cy.get('p').should('contain', 'Page not found.');
  cy.get('button').should('contain', 'Go to Home');
});










