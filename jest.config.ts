import type { Config } from "jest";

module.exports = {
  cache: false,
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["@testing-library/jest-dom"],
} satisfies Config;
