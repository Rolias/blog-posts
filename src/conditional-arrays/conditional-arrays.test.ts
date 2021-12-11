import * as chai from 'chai'
chai.should()

function getEditingFirst(): string {
  return `I show up first when editing`
}

function getEditingLast(): string {
  return `I show up at the end when editing`
}
function getDisplayData(): string {
  return `I only show up in display mode`
}
function getDisplayAlwaysStuff(): string {
  return `I always show up`
}

function testSetupWithIf(inEditMode: boolean): string[] {
  const arrayOfStuff = [getDisplayAlwaysStuff()]
  if (inEditMode) {
    arrayOfStuff.unshift(getEditingFirst())
    arrayOfStuff.push(getEditingLast())
  } else {
    arrayOfStuff.push(getDisplayData())
  }
  return arrayOfStuff
}

function testSetupLiteral(inEditMode: boolean): string[] {
  return [
    ...(inEditMode ? [getEditingFirst()] : []),
    getDisplayAlwaysStuff(),
    ...(inEditMode ? [getEditingLast()] : []),
    ...(inEditMode ? [] : [getDisplayData()]),
  ]
}

const testCases = [
  {name: `In display Mode`, inEditMode: false},
  {name: `In edit mode`, inEditMode: true},
]

describe(`Conditional Array Literals`, () => {
  testCases.forEach((test) => {
    it(`${test.name}`, () => {
      const inEditMode = test.inEditMode
      const usingIf = testSetupWithIf(inEditMode)
      const usingLiteral = testSetupLiteral(inEditMode)
      usingLiteral.should.eql(usingIf)
    })
  })
})
