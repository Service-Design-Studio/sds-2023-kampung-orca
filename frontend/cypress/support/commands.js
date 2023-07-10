const pageRouteMap = {
  "lessons pathway": "",
  chatroom: "chat",
};

Cypress.Commands.add("visitRoute", (pageName) => {
  cy.visit(`${Cypress.env("gatewayUrl")}/${pageRouteMap[pageName]}`);
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
