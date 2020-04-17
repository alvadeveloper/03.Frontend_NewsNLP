module.exports = {
  roots: ['<rootDir>'],
  transform: {
    '^.+\\.js?$': 'ts-jest'
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.js?$',
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  collectCoverage: true,
  clearMocks: true,
  coverageDirectory: "coverage",
};