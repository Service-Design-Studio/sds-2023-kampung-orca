/* eslint-disable cypress/unsafe-to-chain-command */
/* eslint-disable cypress/no-unnecessary-waiting */

const pageRouteMap = {
  home: "",
  login: "login",
  "lessons pathway": "curriculum/topic/00001",
  "lesson view": "curriculum/lesson/00001",
  "lesson completion": "curriculum/lesson/00001/lesson_completed",
  chatroom: "chat",
  "first content": "",
  "second content": "",
  "topic list": "curriculum/topic",
  "bogus link": "curriculum/12345",
  "next lesson": "curriculum/lesson/00002",
  "first lesson completion" : "curriculum/lesson/00001/lesson_completed",
  "last lesson completion" : "curriculum/lesson/00005/lesson_completed",
  "exercise": "curriculum/lesson/00001/exercise",
};

const errorRouteMap = {
  "Page Not Found": "Page not found.",
  "Not Authenticated": "",
};

const buttonComponentMap = {
  Login: "#login-button",
  "Google login": "#google-login",
  Complete: "#lesson-complete",
  "right arrow": '[data-cy="next-page"]',
  "left arrow": '[data-cy="previous-page"]',
  "Go to Home": '[data-cy="go-to-home"]',
  "Complete Lesson": '[data-cy="complete-lesson"]',
  "next lesson": '[data-cy="completion-next-lesson"]',
  redirect: '[data-cy="go-to-home"]',
  forum: '[data-cy="forum-button"]',
  "Create New Post": '[data-cy="create-new-post-button"]',
  Post: '[data-cy="post-button"]',
  "previous lesson" : '[data-cy="completion-previous-lesson"]',
  "Test Your Understanding": '[data-cy="test-your-understanding"]',
  "submit exercise": '[data-cy="exercise-submit-button"]',
  "resubmit exercise": '[data-cy="exercise-resubmit-button"]',
};

const pages = {
  "first page": "1",
  "second page": "2",
  "third page": "3",
};

Cypress.Commands.add("checkErrorMessage", (errorName) => {
  cy.contains(errorRouteMap[errorName]).should("exist");
});

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

Cypress.Commands.add("checkNoButton", (buttonName) => {
  cy.get(buttonComponentMap[buttonName]).should("not.exist");
});

Cypress.Commands.add("checkButton", (buttonName) => {
  cy.get(buttonComponentMap[buttonName]).should("exist");
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

Cypress.Commands.add("loginByGoogleApi", (username) => {
  // username can be [ "aloysius", "thomas", "mohammad" ]
  cy.setCookie("token", username);
  cy.setCookie("user_id","admin");
});

Cypress.Commands.add("checkPage", (page) => {
  cy.get("p").contains(pages[page]).should("exist");
});

// Custom command to check if the post does not contain "X days ago" where X is greater than 3
Cypress.Commands.add('checkRecent', () => {
  const regex = /\b(\d+)\s+days\s+ago\b/i; // Regular expression to match "X days ago" where X is a number
  cy.contains(regex).should(($posts) => {
    const text = $posts.text();
    const daysAgoMatches = text.match(regex);
    if (daysAgoMatches) {
      // NOTE - change minDaysAgo to the number of days ago we would like to check from
      let minDaysAgo = 3;
      const daysAgoValues = daysAgoMatches.map((match) => parseInt(match));
      expect(daysAgoValues.some((daysAgo) => daysAgo > minDaysAgo)).to.be.false;
    } else {
      // If there are no matches, the test will pass as there is no "X days ago" text
      expect(true).to.be.true;
    }
  });
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
