const { defaults: tsJestConfig } = require('ts-jest/presets');

module.exports = {
  ...tsJestConfig,
  preset: 'jest-expo',
  testEnvironment: 'node',
  globals: {
    'ts-jest': {
      diagnostics: false,
    },
  },
  roots: ['<rootDir>'],
  testMatch: [
    '**/tests/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)',
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
    ...tsJestConfig.transform,
  },
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'json',
    'jsx',
    'node',
  ],
  automock: false,
  setupFiles: [
    './setupJest.js',
  ],
};
