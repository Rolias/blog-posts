interface Letters {
  a: string
  b: string
  c: string
  d: string
  z: string
}
// type AllKeyOf<T> = T extends never ? never : keyof T
// type Optional<T, K> = {[P in Extract<keyof T, K>]?: T[P]}
// type WithOptional<T, K extends AllKeyOf<T>> = T extends never ? never : Omit<T, K> & Optional<T, K>

// type PartialLetters = WithOptional<Letters, 'a' | 'z'>
// type Filter<T, U> = T extends U ? never : T

type RemoveProps = 'a' | 'd'
type RenameProps = 'z'
type Remaining = Omit<Letters, RemoveProps>
// type Renamed = Omit<Letters, RenameProps>
type Valid = Omit<Letters, RemoveProps | RenameProps>

// type ValidProps = Exclude<keyof Letters, RemoveProps | RenameProps>
// type Omitted = Record<ValidProps, string>

type ZedNoA = Valid & {
  zed: string
}

const removeA = ({a, d, ...remainder}: Letters): Remaining => remainder
const renameZed = ({z, ...remainder}: Remaining): ZedNoA => ({zed: z, ...remainder})

// type PreferZedNoA = (OmitA | OmitZ) & {zed: string}

describe.only(`spread and union types`, () => {
  console.log(`👉 :`, `HELLO`)
  it(`test remove`, () => {
    const myLetters = {
      a: `eh`,
      b: `be`,
      c: `cee`,
      d: `dee`,
      z: `zee`,
    }
    const noA = removeA(myLetters)
    noA.should.eql({
      b: `be`,
      c: `cee`,
      z: `zee`,
    })
    const zed = renameZed(noA)
    console.log(`👉 :`, zed)
  })
})

export const EXPERIMENT = ``
