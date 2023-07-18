const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;
require("dotenv").config();

module.exports = defineConfig({
  e2e: {
    async setupNodeEvents(on, config) {
      const bundler = createBundler({
        plugins: [createEsbuildPlugin(config)],
      });

      on("file:preprocessor", bundler);
      await addCucumberPreprocessorPlugin(on, config);

      return config;
    },
    env: {
      omitFiltered: true,
      filterSpecs: true,
      gatewayUrl: "http://localhost:3000",
      googleRefreshToken: process.env.GOOGLE_REFRESH_TOKEN,
      googleClientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
      googleClientSecret: process.env.REACT_APP_GOOGLE_CLIENT_SECRET,
    },
    fixturesFolder: false,
    specPattern: "cypress/e2e/features/*.feature",
    baseUrl: "http://localhost:3000/SnapShot#/SnapScout/",
    chromeWebSecurity: false,
    experimentalSessionAndOrigin: true,
    experimentalModifyObstructiveThirdPartyCode: true
  },
});
