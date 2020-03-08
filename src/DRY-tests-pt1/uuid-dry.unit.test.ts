import * as chai from 'chai'
chai.should()
import * as uut from './uuid'

const VALID_UUID = `88888888-ffff-5aaa-b444-cccccccccccc`
const INVALID_UUID = `88888888-4444-4444-4444-cccccccccccg`
const INVALID_VERSION = `88888888-ffff-6aaa-b444-cccccccccccc`
const INVALID_CLOCK_SEQ_HI = `88888888-ffff-6aaa-5444-cccccccccccc`

const uuidTestCases = [
  {condition: `valid UUID`, value: VALID_UUID, expected: true},
  {condition: `if non hex digit found`, value: INVALID_UUID, expected: false},
  {condition: `when version is not less than 5`, value: INVALID_VERSION, expected: false},
  {condition: `invalid seq_hi nibble`, value: INVALID_CLOCK_SEQ_HI, expected: false},
  {condition: `on empty string `, value: ``, expected: false},
]

describe('UNIT TESTS: utils module ', () => {
  describe('isValidUuid() ', () => {
    uuidTestCases.forEach(test => {
      it(`returns ${test.expected} for ${test.condition}`, () => {
        uut.isValidUuid(test.value).should.equal(test.expected)
      })
    })
  })
})
