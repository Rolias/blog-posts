interface Letters {
  a: string
  b: string
  c: string
  d: string
  z: string
}

type RemoveProps = 'a' | 'd'
type AfterRemoveProps = Omit<Letters, RemoveProps>
const removeDandA = ({d, a, ...remainder}: Letters): AfterRemoveProps => remainder

type RenameProps = 'z'
type UnchangedProps = Omit<Letters, RemoveProps | RenameProps>
type FinalProps = UnchangedProps & {
  zed: string
}
const renameZed = ({z, ...remainder}: AfterRemoveProps): FinalProps => ({zed: z, ...remainder})

describe.only(`spread and union types`, () => {
  it(`test remove`, () => {
    const myLetters = {
      a: `eh`,
      b: `be`,
      c: `cee`,
      d: `dee`,
      z: `zee`,
    }
    const noDorA = removeDandA(myLetters)
    noDorA.should.eql({
      b: `be`,
      c: `cee`,
      z: `zee`,
    })
    const zed = renameZed(noDorA)
    console.log(`👉 :`, zed)
  })
})

// Prevent Typescript from putting this code in the global scope
export const MAKE_ME_A_MODULE_PART_2: string = ``
