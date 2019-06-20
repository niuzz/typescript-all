// tuple
let tuple: [string, number, boolean]
tuple = ['a', 2, false]
tuple = ['b', 3, false]
export { tuple }

// enum
enum Roles {
  SUPER_ADMIN = 1,
  ADMIN = 2
}

// symbol

const str1 = Symbol('Jason')
const str2 = Symbol('Jason')
console.log(str1 === str2) // false
const s1 = Symbol.for('Jason')
const s2 = Symbol.for('Jason')
console.log(s1 === s2) // true

const name = Symbol()
const obj = {
  [name]: 'Jason',
  age: 18
}

console.log(Object.keys(obj)) // age
console.log(Reflect.ownKeys(obj)) // [age, Symbol(name)]
console.log(Object.getOwnPropertySymbols(obj)) // [Symbol(name)]

export { Roles }

export default {}
