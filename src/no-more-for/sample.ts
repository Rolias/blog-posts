import * as faker from 'faker'

const MAX_COUNT = 10
const RADIX = 10
interface IdName {
  id: string
  name: string
}

function getFakeDataViaIndex(index: number): IdName {
  return {
    id: index.toString(RADIX),
    name: faker.name.lastName(),
  }
}
const testDataIndexMap = [...Array(MAX_COUNT).keys()].map(i => getFakeDataViaIndex(i + 1))
console.log(`👉 testDataIndexMap:`, testDataIndexMap)

function getFakeData(): IdName {
  return {
    id: faker.random.uuid(),
    name: faker.name.firstName(),
  }
}

function getSomeTestDataForLoop(): IdName[] {
  let data: IdName[] = []
  for (let index = 0; index < MAX_COUNT; ++index) {
    data.push(getFakeData())
  }
  return data
}

function getSomeTestDataMap(): IdName[] {
  return [...Array(MAX_COUNT)].map(() => getFakeData())
}

const testData = getSomeTestDataForLoop()
console.log(`👉 Standard For:`, testData)

const testDataMap = getSomeTestDataMap()
console.log(`👉  Map:`, testDataMap)

// ==========================================================================
// a deeper look into the Array constructor
// ==========================================================================

const mt = new Array(5)
console.log(`👉 mt:`, mt)
const sameMt = Array(5)
console.log(`👉 sameMt:`, sameMt)
const notMt = [...new Array(5).keys()]
console.log(`👉 notMt:`, notMt)
console.log(`👉 :`, mt.toString())

function create(e: number): string {
  return `this is ${e}`
}
const elements = [...Array(5).keys()].map(e => create(e))
console.log(`👉 :elements`, elements)
