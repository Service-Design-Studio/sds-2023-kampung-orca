/* eslint-disable cypress/unsafe-to-chain-command */
/* eslint-disable cypress/no-unnecessary-waiting */

const pageRouteMap = {
  home: "",
  login: "login",
  "lessons pathway": "curriculum/topic/:topic_id",
  "lesson view": "curriculum/lesson/:lesson_id",
  "lesson completed": "lesson-complete",
  chatroom: "chat",
  "first content": "",
  "second content": "",
  "topic list": "curriculum/topic",
};

const errorRouteMap = {
  "Page Not Found": "",
  "Not Authenticated": "",
};

const buttonComponentMap = {
  redirect: "",
  Login: "#login-button",
  "Google login": "#google-login",
  Complete: "#lesson-complete",
};

Cypress.Commands.add("visitRoute", (pageName) => {
  cy.visit(`${Cypress.env("gatewayUrl")}/${pageRouteMap[pageName]}`);
});

// Cypress.Commands.add("matchRoute", (pageName) => {
//   cy.url().should(
//     "match",
//     new RegExp(`^${Cypress.env("gatewayUrl")}/${pageRouteMap[pageName]}`)
//   );
// });

Cypress.Commands.add("matchRoute", (pageName) => {
  // eslint-disable-next-line no-useless-escape
  const urlPattern = `^${Cypress.env("gatewayUrl")}/${
    pageRouteMap[pageName]
  }`.replace(/:topic_id|:lesson_id/g, "\\d+");
  const regexPattern = new RegExp(urlPattern);
  cy.url().should("match", regexPattern);
});

Cypress.Commands.add("clickButton", (buttonName) => {
  cy.get(buttonComponentMap[buttonName]).click();
});

// Cypress.Commands.add("loginByGoogleApi", () => {
//   cy.log("Logging in to Google");
//   cy.log({
//     grant_type: "refresh_token",
//     client_id: Cypress.env("googleClientId"),
//     client_secret: Cypress.env("googleClientSecret"),
//     refresh_token: Cypress.env("googleRefreshToken"),
//   });
//   cy.request({
//     method: "POST",
//     url: "https://oauth2.googleapis.com/token",
//     body: {
//       grant_type: "refresh_token",
//       client_id: Cypress.env("googleClientId"),
//       client_secret: Cypress.env("googleClientSecret"),
//       refresh_token: Cypress.env("googleRefreshToken"),
//     },
//     form: true,
//   }).then(({ body }) => {
//     const { access_token, id_token } = body;

//     cy.request({
//       method: "GET",
//       url: "https://www.googleapis.com/oauth2/v3/userinfo",
//       headers: { Authorization: `Bearer ${access_token}` },
//     }).then(({ body }) => {
//       cy.log(body);
//       const userItem = {
//         token: id_token,
//         user: {
//           googleId: body.sub,
//           email: body.email,
//           givenName: body.given_name,
//           familyName: body.family_name,
//           imageUrl: body.picture,
//         },
//       };

//       window.localStorage.setItem("googleCypress", JSON.stringify(userItem));
//       cy.setCookie("token", access_token);
//       cy.visit("/");
//     });
//   });
// });

Cypress.Commands.add("setDataToken", (dataToken) => {
  const googleRefreshToken = Cypress.env("googleRefreshToken");
  Cypress.env("googleRefreshToken", dataToken);
});

Cypress.Commands.add("getDataToken", () => {
  return Cypress.env("googleRefreshToken");
});

Cypress.Commands.add("loginByGoogleApi", () => {
  cy.setCookie("token", "admin");
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
