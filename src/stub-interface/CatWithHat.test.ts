import {should} from 'chai'
import {StubbedInstance, stubInterface} from 'ts-sinon'
import {CatWithHat} from './CatWithHat'
import {Helper} from './Helper'

should()

function testSetup(): StubbedInstance<Helper> {
  const stubHelper = stubInterface<Helper>()
  const uut = new CatWithHat(stubHelper)
  uut.run()
  return stubHelper
}

describe(`StubInterface tests`, () => {
  it(`thing 1 should be called once`, () => {
    const stubHelper = testSetup()
    stubHelper.thing1.callCount.should.eql(1)
  })

  it(`thing 2 should be called once`, () => {
    const stubHelper = testSetup()
    stubHelper.thing2.callCount.should.eql(1)
  })
})
