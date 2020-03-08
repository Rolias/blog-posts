import * as chai from 'chai'
chai.should()
import * as uut from './uuid' // uut - unit under test

const VALID_UUID = `88888888-ffff-5aaa-b444-cccccccccccc`

describe(`UNIT TESTS for dataUtils module `, () => {
  it(`isValidUuid() returns true for valid UUID`, () => {
    uut.isValidUuid(VALID_UUID).should.be.true
  })
  it(`isValidUuid() returns false for invalid UUID`, () => {
    uut.isValidUuid(`not a valid uuid`).should.be.false
  })
})
