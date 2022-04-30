module.exports = {
  preset: 'ts-jest',
  rootDir: '.',
  testEnvironment: 'node',
  setupFilesAfterEnv: ['./jest-setup.ts']
};
