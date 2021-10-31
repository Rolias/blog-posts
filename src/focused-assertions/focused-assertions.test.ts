import * as chai from 'chai'
chai.should()

import {randomUUID} from 'crypto'

interface MyObj {
  pk: string
  b: number
  c: number
  d: number
}

function testSetup() {
  return {
    pk: ``,
    b: 1,
    c: 2,
    d: 3,
  }
}

function dbInsert(payload: any): MyObj {
  const pk = randomUUID()
  return {...payload, pk}
}

describe(`Focused assertions using TypeScript`, () => {
  it(`should test the object (without the primary key field)`, () => {
    const testObj = testSetup()
    const result = dbInsert(testObj)
    const removePk = ({pk, ...remainder}: MyObj) => remainder
    const expected = removePk(testObj)
    removePk(result).should.eql(expected)
  })
})
