const getArray = <T>(value: T, times: number = 5): T[] => {
  return new Array(times).fill(value)
}
getArray<number[]>([1, 2], 3).forEach(item => {
  console.log(item.length)
})
getArray<number>(2, 3).forEach(item => {
  console.log(item.length) // 类型“number”上不存在属性“length”
})

// 泛型函数
const getArrayFunc: <T>(arg: T, times: number) => T[] = (arg, times) => {
  return new Array(times).fill(arg)
}

// 类型别名
type GetArrayFunc1 = <T>(arg: T, times: number) => T[]
const getArrayFuncImp: GetArrayFunc1 = <T>(arg: T, times: number): T[] => {
  return new Array(times).fill(arg)
}

// 接口
interface GetArrayFuncIf {
  <T>(arg: T, times: number): T[]
}

// 泛型约束
interface IValueWithLength {
  length: number
}
const v: IValueWithLength = {} // error Property 'length' is missing in type '{}' but required in type 'ValueWithLength'

interface IValueWithLenght1 {
  length: number
}
const getLength = <T extends IValueWithLenght1>(param: T): number => {
  return param.length
}

// 泛型约束中使用类型参数
const getProp = <T, K extends keyof T>(object: T, propName: K) => {
  return object[propName]
}

const strobj = { a: 'aa', b: 'bb' }
getProp(strobj, 'a')
