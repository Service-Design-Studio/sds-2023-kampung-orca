const pageRouteMap = {
  "lessons pathway": "",
  "lesson view": "lesson-view",
  "lesson completed": "lesson-complete",
  chatroom: "chat",
  "first content": "",
  "second content": "",
};

const errorRouteMap = {
  "Page Not Found": "",
  "Not Authenticated": "",
};

const buttonComponentMap = {
  redirect: "",
  "Google login": "",
  Complete: "#lesson-complete",
};

Cypress.Commands.add("visitRoute", (pageName) => {
  cy.visit(`${Cypress.env("gatewayUrl")}/${pageRouteMap[pageName]}`);
});

Cypress.Commands.add("matchRoute", (pageName) => {
  cy.url().should(
    "match",
    new RegExp(`^${Cypress.env("gatewayUrl")}/${pageRouteMap[pageName]}`)
  );
});

Cypress.Commands.add("clickButton", (buttonName) => {
  cy.get(buttonComponentMap[buttonName]).click();
});

//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
