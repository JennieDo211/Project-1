module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://localhost:8080",
    env: {
      login: "/login",
      signup: "/register",
    },
  },
};






