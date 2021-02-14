interface Letters {
  a: string
  z: string
}

type RenamedZed = Omit<Letters, 'z'> & {
  zed: string
}
const renameZed = ({z, ...remainder}: Letters): RenamedZed => ({zed: z, ...remainder})

describe.only(`spread, rest, and rename`, () => {
  it(`test renameZed()`, () => {
    const myLetters = {
      a: `eh`,
      z: `zee`,
    }
    const zed = renameZed(myLetters)
    zed.should.eql({a: `eh`, zed: `zee`})
  })
})

// Prevent Typescript from putting this code in the global scope
export const MAKE_ME_A_MODULE_PART_1: string = ``
