module.exports = {
  "*.{js,jsx,ts,tsx}": [
    "eslint --fix",
    "npm run test",
    "npm run test:e2e",
    "git add",
  ],
};
