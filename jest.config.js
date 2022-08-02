// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: '.'
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy'
  },
  testEnvironment: 'jest-environment-jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/components/**/index.ts(x)?',
    '!src/**/mock.ts',
    '!src/pages/**/*.tsx',
    '!src/services/**/*.ts',
    '!src/**/stories.tsx',
    '!src/styles/**/*.ts',
    '!src/types/**/*.d.ts',
    '!src/utils/**/*.ts(x)'
  ]
}

module.exports = createJestConfig(customJestConfig)
