const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:3001",
    // app.currents.dev
    // projectId: "M8jQc8",
    // dashboard.cypress.io
    projectId: "jrfr6n",
  },
});
