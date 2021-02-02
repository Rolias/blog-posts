import {should} from 'chai'
import sinon, {StubbedInstance, stubInterface} from 'ts-sinon'
import {MainClass} from './MainClass'
import {Helper} from './Helper'

should()

describe.only(`StubInterface tests`, () => {
  let uut: MainClass
  let stubHelper: StubbedInstance<Helper>
  beforeEach(() => {
    stubHelper = stubInterface<Helper>()
    uut = new MainClass(stubHelper)
  })
  afterEach(() => {
    sinon.restore()
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
