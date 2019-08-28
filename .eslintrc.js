module.exports = {
  env: {
    browser: true,
    es6: true,
    'jest/globals': true
  },
  plugins: [
    'jest'
  ],
  extends: [
    'standard'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
  }
}
