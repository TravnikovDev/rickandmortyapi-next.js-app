module.exports = {
  "*.{js,jsx,ts,tsx}": [
    "eslint --fix",
    "npm run test:e2e",
    "npm run test",
    "git add",
  ],
};
