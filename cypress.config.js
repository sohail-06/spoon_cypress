const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    watchForFileChanges:false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  viewportHeight:720,
  viewportWidth:1280
});
