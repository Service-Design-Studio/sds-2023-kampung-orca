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
  cy.get(`[data-cy="scrollbar"]`).scrollTo("right", { duration: 500 });
  cy.wait(100);
});

Then("I will see the lessons pathway move right", () => {
  cy.get('[data-cy="scrollbar"]').should(($element) => {
    const scrollPosition = $element[0].scrollLeft;
    const isScrolledToRight = scrollPosition === $element[0].scrollWidth - $element[0].clientWidth;
    expect(isScrolledToRight).to.be.true;
  });
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
  cy.get(`[data-cy="line"]`).should('exist');
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

Then("I should be able to see the graphics on the lessons pathway", () => {
  cy.get('.chakra-stack.css-o73i9').should('exist');
});

Given("I am at the topic list page ", () => {
  cy.visitRoute("topic list");
});

When("I mouse hover on an in progress lesson node on the lessons pathway page", () => {
  cy.get('#node-1').trigger('mouseover');
});

Then("I will see that the lesson is in progress", () => {
  const infobox = cy.get('#node-1').trigger('mouseover');
  cy.wait(500);
  infobox.get('p').should('contain', 'In Progress');
});

When("I mouse hover on a completed lesson node on the lessons pathway page", () => {
  cy.get('#node-0').trigger('mouseover');
});

Then("I will see that the lesson is completed", () => {
  const infobox = cy.get('#node-0').trigger('mouseover');
  cy.wait(500);
  infobox.get('p').should('contain', 'Completed');
});

When("I mouse hover on a locked lesson node on the lessons pathway page", () => {
  cy.get('#node-2').trigger('mouseover');
});

Then("I will see that the lesson is locked", () => {
  const infobox = cy.get('#node-2').trigger('mouseover');
  cy.wait(500);
  infobox.get('p').should('contain', 'Locked');
});

Then("I will not be able to click on the lesson node", () => {
  cy.get('svg').should('not.have.attr', 'pointer-events', 'auto');
});

