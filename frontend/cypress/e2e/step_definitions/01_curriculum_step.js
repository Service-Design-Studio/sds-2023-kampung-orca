import { Given, When, Then, Before } from "@badeball/cypress-cucumber-preprocessor";
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

When("I click on a lesson node", () => {
  cy.get(`a[href="/lesson-view"]`).first().click({ force: true });
});

When("I click on the embedded lesson video", () => {
  cy.get(`iframe[title="kampung"]`)
    .should("be.visible")
    .then(($iframe) => {
      const $video = $iframe.contents().find("video");
      $video;
    }).click();
});

Then("I should see the video play", () => {
  cy.get(`iframe[title="kampung"]`)
    .should("be.visible")
    .then(($iframe) => {
      const $video = $iframe.contents().find("video");
      cy.wrap($video).should("have.class", "video-playing-mode");
    });
});

Then(/^I [should\s]*see the (\w+) page content$/, (phrase) => {});

When("I enter a lesson with a bogus link", () => {});

Then("I should go to an error page with a redirect button", () => {});

Then("I should go to an error page with a button", () => {});

Then("I should not see the {} button", (buttonName) => {});

Then("I should visit the next lesson page", () => {});

Given("I have completed the lesson", () => {});
