/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  clearMocks: true,
  setupFilesAfterEnv: ['<rootDir>/src/singleton.ts'],
};
