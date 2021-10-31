// Just want to test the concept of root hooks
// This is **NOT** the recommended way to do this anymore.
// Root hook plugs are: https://mochajs.org/#root-hook-plugins

before(() => {
  console.log(`🐞 This before  root hook in src/DRY-tests-pt1/rootHook.test.ts runs 🐞`)
})
