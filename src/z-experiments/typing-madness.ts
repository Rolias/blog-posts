type Values = {
  a: {aVal: true}
  b: {bVal: true}
}
type Keys = keyof Values
type InsideKeys = Keys[number]
type aType = {aVal: true}
type bType = {bVal: true}
// that will be resolved asynchronously by some function
type Promises = {[Key in Keys]: Promise<Values[Key]>}
type PromiseA = {a: Promise<aType>}
type PromiseB = {b: Promise<bType>}

type PromiseAVal = Promise<aType>
type PromiseBVal = Promise<bType>
type PromiseAValOrBVal = Promise<aType | bType>

// for every key, the following functions typecheck

const forwardA = (val: Promise<Values['a']>): Promises['a'] => val
const backwardA = (val: Promises['a']): Promise<Values['a']> => val

const forwardB = (val: Promise<Values['b']>): Promises['b'] => val
const backwardB = (val: Promises['b']): Promise<Values['b']> => val

type ValueAorB = Values['a'] | Values[]
const forwardUnion = (val: Promise<Values['a' | 'b']>): Promise<aType | bType> => val
const backwardUnion = (val: Promises['a' | 'b']): Promise<Values['a' | 'b']> => val

// but when generic over keys we get a type error, 'Promise<Values[Key]>' is not assignable to type 'Promise<{ aVal: true; }> & Promise<{ bVal: true; }>
// where does the intersection come from?
// when is a `Promise<Values[Key]>` not a `Promises[Key]` ?
// type ValuesOfKey =
const forward = <Key extends Keys>(val: Promise<Values[Key]>): Promises[Key] => val
const x = forward(Promise.resolve({aVal: true}))
const backward = <Key extends Keys>(val: Promises[Key]): Promise<aType | bType> => val

let tod: Promises['a']
