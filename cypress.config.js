const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter:'cypress-multi-reporters',
  experimentalInteractiveRunEvents:true,
  screenshotOnRunFailure:false,
  reporterOptions:{
    reporterEnabled:'spec,mocha-junit-reporter,mochawesome',
    mochaJunitReporterReporterOptions:{
      mochaFile:'result/test-results-[hash].xml'
    },
    mochawesomeReporterOptions:{
      reportFilename: '[status]-[name]-report',
      quiet: true,
      html:true,
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
    ClasificarDest:{
      planet:['Madan','Shenji','Tongli','Flagstaff','Sant Cugat Del Valles','Shaheying','Tayabamba','Babahoyo','Cuozhou'],
      color:['Green','Red','Blue','Brown','Purple']
    },
    Login:{
      username:'John',
      password:'correcto123'
    }
  }
});
