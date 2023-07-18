import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
//import { data } from "cypress/types/jquery";

const gatewayUrl = Cypress.env("gatewayUrl");


When("I click on a lesson node", () => {
  cy.get(`a[href="/curriculum/lesson/00001"]`).first().click({ force: true });
});

When("I click on the embedded lesson video", () => {
  cy.get(`iframe[title="kampung"]`)
    .should("be.visible")
    .then(($iframe) => {
      cy.wrap($iframe).click(); // Click on the iframe element
    });
});

Then("I should see the video play", () => {
  cy.get('[data-cy="iframe-playing"]').should('exist');
});


Then(/^I should see the (\w+) page content$/, (phrase) => {
  if (phrase === "first page") {
    cy.get("p").contains("1").should("exist");
  } else if (phrase === "second page") {
    cy.get("p").contains("2").should("exist");
  } else if (phrase === "third page") {
    cy.get("p").contains("3").should("exist");
  }
});

When("I see the last page content", () => {
  cy.get("button").contains("Complete Lesson").should("exist");
});


When("I see the {} content", (pageNumber) => {
  cy.checkPage(pageNumber);
});

When("I enter a lesson with a bogus link", () => {
  cy.visitRoute("bogus link");
});

Then("I should see the lesson completed page", () => {
  cy.get("p").contains("Lesson Completed!").should("exist");
})

Then("I should go to an error page with a redirect button", () => {});

Then("I should go to an error page with a button", () => {});

Then("I should visit the next lesson page", () => {});

When("I have completed the lesson", () => {});
