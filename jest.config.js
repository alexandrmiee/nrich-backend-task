module.exports = {
  verbose: true,
  moduleFileExtensions: ['js'],
  // transform: {
  //   '^.+\\.js$': '<rootDir>/tests/config/jest.transform.js',
  // },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  testMatch: ['**/__tests__/*.test.js'],
  testURL: 'http://localhost:3000/',
  // watchPlugins: ['jest-watch-typeahead/filename', 'jest-watch-typeahead/testname'],
  resetModules: false,
};
