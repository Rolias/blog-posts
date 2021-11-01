module.exports = {
  "bail":true,
  "verbose": true,
  "reporter": "spec",
  "timeout": 5000,
  "require": [
    "ts-node/register",
    "source-map-support/register",
    "chai",
    "sinon",
    "sinon-chai",
    `chai-as-promised`,
    'chai/register-should',
    `test/mocha-init`
    ],
    recursive: true,
}