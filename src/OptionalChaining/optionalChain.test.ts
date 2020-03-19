import * as chai from 'chai'
const should = chai.should()

describe(`UNIT TEST: Optional Chaining vs Non Null assertion`, () => {
  const ANY_TEST_VALUE = 1
  it(`should short-circuit your assertion, test will always pass`, () => {
    let x: any
    x?.nonExistentProperty.should.equal(ANY_TEST_VALUE)
  })

  it(`should run the assertion in TypeScript with non null assertion `, () => {
    let x: any
    try {
      x!.nonExistentProperty.should.equal(ANY_TEST_VALUE)
      true.should.be.false
    } catch (error) {
      should.exist(error)
    }
  })
})
