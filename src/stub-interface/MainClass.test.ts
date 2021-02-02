import {should} from 'chai'
import sinon, {StubbedInstance, stubInterface} from 'ts-sinon'
import {MainClass} from './MainClass'
import {Helper} from './Helper'

should()

describe.only(`StubInterface tests`, () => {
  let uut: MainClass
  const stubHelper: StubbedInstance<Helper> = stubInterface<Helper>()
  beforeEach(() => {
    uut = new MainClass(stubHelper)
  })
  afterEach(() => {
    sinon.restore()
    stubHelper.thing1.resetHistory()
    stubHelper.thing2.resetHistory()
  })
  it(`thing 1 should be called once`, () => {
    uut.run()
    stubHelper.thing1.callCount.should.eql(1)
  })

  it(`thing 2 should be called once`, () => {
    uut.run()
    stubHelper.thing2.callCount.should.eql(1)
  })
})
