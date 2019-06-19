/** 接口 */
interface IInfo {
  firstName: string
  lastName: string
}
const getFullName = ({ firstName, lastName }: IInfo) => {
  console.log(`${firstName}${lastName}`)
}

// 可选属性
interface IVegetables {
  color?: string
  type: string
}

const getVegetables = ({ color, type }: IVegetables) => {
  return `A${color ? color + '' : ''}${type}`
}

// 绕开多余参数检查
// 类型断言
interface IVegetables1 {
  color?: string,
  type: string
}
const getVegetables1 = ({ color, type }: IVegetables1) => {
  return `A${color ? color + '' : ''}${type}`
}
getVegetables1({
  type: 'tomato',
  size: 12,
  price: 1.2
} as IVegetables1)

// 索引签名
interface IVegetables2 {
  color: string
  type: string
  [prop: string]: any
}
const getVegetables2 = ({ color, type }: IVegetables2) => {
  return `A ${color ? color + ' ' : ''}${type}`
}
getVegetables2({
  color: 'red',
  type: 'tomato',
  size: 12,
  price: '11'
})

// 类型兼容性
interface IVegetables3 {
  type: string
}
const getVegetables3 = ({ type }: IVegetables3) => {
  return `A ${type}`
}

const option = { type: 'tomato', size: 12 }
getVegetables3(option)

// 只读属性
// const 用来定义常量，readonly定义对象属性

const NAME: string = 'Lison'
NAME = 'Haha' // 不能给常量赋值

const obj = {
  name: 'lison'
}
obj.name = 'Haha'

interface IInfo1 {
  readonly name: string
}
const info: IInfo1 = {
  name: 'Lison'
}
info['name'] = 'Haha' //  Cannot assign to 'name' because it is a read-only property

// 函数类型

// interface IAddFunc {
//   (num1: number, num2: number): number
// }
type IAddFunc = (num1: number, num2: number) => number
const add: IAddFunc = (n1, n2) => n1 + n2
add(1, 2)

// 继承，可以多个继承
interface IVegetables4 {
  color: string
}
interface IFood {
  type: string
}
interface ITomato extends IFood, IVegetables4 {
  radius: number
}

const tomato: ITomato = {
  type: 'vegetables',
  color: 'red',
  radius: 1.2
}

// 混合类型接口

interface ICounter {
  (): void // 这里定义Counter这个机构必须包含一个函数，函数的要求是无参数，返回值为void，即无返回值
  count: number // 而且这个结构还必须包含一个名为count、值的类型为number类型的属性
}
const getCounter = (): ICounter => { // 这里定义一个函数用来返回这个计数器
  const c = () => { // 定义一个函数，逻辑和前面例子的一样
    c.count++
  }
  c.count = 0 // 再给这个函数添加一个count属性初始值为0
  return c // 最后返回这个函数对象
}
const counter: ICounter = getCounter() // 通过getCounter函数得到这个计数器
counter()
console.log(counter.count) // 1
counter()
console.log(counter.count) // 2
