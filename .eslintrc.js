module.exports = {
  plugins: [
    'testing-library',
  ],
  rules: {
    'testing-library/prefer-screen-queries': [
      'error',
      { ignoreDestructuring: true },
    ],
  },
};
