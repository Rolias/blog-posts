import {should} from 'chai'
import sinon, {StubbedInstance, stubInterface} from 'ts-sinon'
import {MainClass} from './MainClass'
import {Helper} from './Helper'

should()

function testSetup(): StubbedInstance<Helper> {
  const stubHelper = stubInterface<Helper>()
  const uut = new MainClass(stubHelper)
  uut.run()
  return stubHelper
}

describe.only(`StubInterface tests`, () => {
  afterEach(() => {
    sinon.restore()
  })
  it(`thing 1 should be called once`, () => {
    const stubHelper = testSetup()
    stubHelper.thing1.callCount.should.eql(1)
  })

  it(`thing 2 should be called once`, () => {
    const stubHelper = testSetup()
    stubHelper.thing2.callCount.should.eql(1)
  })
})
