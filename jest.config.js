const config = {
  rootDir: './',
  testEnvironment: 'node',
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.js?$',
  clearMocks: true,
  testPathIgnorePatterns: ['ignored'],
};

module.exports = config;
