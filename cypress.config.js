const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter:'cypress-multi-reporters',
  experimentalInteractiveRunEvents:true,
  screenshotOnRunFailure:false,
  reporterOptions:{
    reporterEnabled:'spec,mocha-junit-reporter,mochawesome',
    mochaJunitReporterReporterOptions:{
      mochaFile:'result/test-results.xml'
    },
    mochawesomeReporterOptions:{
      reportFilename: 'customReportFilename',
      quiet: true,
      html:false,
      json:true
    }
  },
  e2e: {
    specPattern:['cypress/e2e/**/*.cy.{js,jsx,ts,tsx}'],
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:'https://demo.testim.io'
  },
  env:{
    Login:{
      username:'John',
      password:'correcto123'
    }
  }
});
