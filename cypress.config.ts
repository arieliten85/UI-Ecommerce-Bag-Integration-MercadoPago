import registerCodeCoverageTasks from "@cypress/code-coverage/task";
import { defineConfig } from "cypress";
import dotenv from "dotenv";

dotenv.config();

// https://docs.cypress.io/guides/references/configuration
export default defineConfig({
  screenshotOnRunFailure: false,
  e2e: {
    setupNodeEvents(on, config) {
      registerCodeCoverageTasks(on, config);
      return config;
    },
    baseUrl: "http://localhost:3000",
    specPattern: "cypress/tests/**/*.spec.{js,jsx,ts,tsx}",
  },
});
