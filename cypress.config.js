const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter:'cypress-multi-reporters',
  experimentalInteractiveRunEvents:true,
  screenshotOnRunFailure:false,
  reporterOptions:{
    configFile:'config-report-chrome.json'
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
