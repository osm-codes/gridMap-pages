import type { Config } from 'jest';
import { JSDOM } from 'jsdom';

// Setup the jsdom environment
const jsdom = new JSDOM('<html lang="en"><body></body></html>', {
  url: 'http://localhost:3000',
});
const { window } = jsdom;

const config: Config = {
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    html: '<html lang="en"><body></body></html>',
    url: 'http://localhost:3000',
    userAgent: 'Agent/007'
  },
  globals: {
  },
  collectCoverageFrom: [
    '**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!node_modules/**',
    '!**/vendor/**',
    '!**/coverage/**',
    '!out/**',
    '!jest.config.ts',
    '!**/*.test.{js,jsx,ts,tsx}',
    '!**/*.css',
    '!**/*.scss',
  ],
  roots: ['<rootDir>/src', '<rootDir>/node_modules'],
  moduleDirectories: ['<rootDir>/node_modules'],
  setupFilesAfterEnv: ['<rootDir>/src/utils/testFileSetup.ts'],
  transformIgnorePatterns: [
    '<rootDir>/node_modules/',
    '/node_modules/(?!ol/).+\\.js$',
  ],
  transform: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/jest-config/fileMock.cjs',
    '\\.(css|less)$': '<rootDir>/jest-config/styleMock.cjs',
    'ol(.*)$': '<rootDir>/jest-config/styleMock.cjs',
    '^.+\\.(js|jsx|ts|tsx)$': 'ts-jest',

  },
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy',
    'ol/Map$': '<rootDir>/jest-config/MapMock.cjs',
    'ol/layer/Tile$': '<rootDir>/jest-config/TileMock.cjs',
    'ol/source/OSM$': '<rootDir>/jest-config/OSMMock.cjs',
    'ol/View$': '<rootDir>/jest-config/ViewMock.cjs',
    
  },
  modulePathIgnorePatterns: ['<rootDir>/node_modules/ol/'],
};

export default config;
