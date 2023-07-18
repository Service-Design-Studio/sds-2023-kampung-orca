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






// TODO: DRY this out
Then("I should not see the left arrow button", () => {
  cy.get(".chakra-icon css-1ev3uyk").should("not.exist");
});

When("I see the last page content", () => {
  // check for complete lesson text in the page
  cy.get("button").contains("Complete Lesson").should("exist");
});

// TODO: DRY this out
Then("I should not see the right arrow button", () => {
  cy.get(".chakra-button css-crvxvb").should("not.exist");
});

When("I enter a lesson with a bogus link", () => {
  cy.visit(`${gatewayUrl}/lesson-view?lessonId=1234567890`);
});

Then("I should see a Page Not Found error with a redirect button", () => {
  cy.get("p").contains("Page Not Found").should("exist");
  cy.get("button").contains("Go to Home").should("exist");
});

When("I click on the redirect button", () => {
  cy.get("button").contains("Go to Home").click();
});


//TODO: check the route in commands.js for redirect button

Then("I should go to the lesson completed page", () => {
  cy.get("p").contains("Lesson Completed!").should("exist");
  cy.get("button").contains("Go to Home").should("exist");
});



When("I click on the Next Lesson button", () => {
  cy.get("button").contains("Next Lesson").click();
});

Then("I should visit the next lesson page", () => {
  // check for "Back to Lessons" text within the button class
  cy.get("button").contains("Back to Lessons").should("exist");
});

When("I enter a lesson with a bogus link", () => {});

Then("I should go to an error page with a redirect button", () => {});

Then("I should go to an error page with a button", () => {});

Then("I should not see the {} button", (buttonName) => {});

Then("I should visit the next lesson page", () => {});

When("I have completed the lesson", () => {});
