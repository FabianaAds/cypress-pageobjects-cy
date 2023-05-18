const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://magento.softwaretestingboard.com/",
    viewportWidth: 1336,
    viewportHeight: 960
    
    },
    
  });
 

