// 函数类型
let funadd: (x: number, y: number) => number
funadd = (arg1: number, arg2: number): number => arg1 + arg2

// 接口定义函数类型
type IAdd = (x: number, y: number) => number
const inaddfunc: IAdd = (arg1: string, arg2: string): string => arg1 + arg2

// 类型别名
type IFuncAdd = (x: number, y: number) => number

const addfunc: IFuncAdd = (x: number, y: number): number => x + y

// 参数
const handleData = (arg1：number, ...args: number[]) => {
  console.log(args)
}

// 函数重载
function handleDataReload(x: string): string[] // 这个是重载的一部分，指定当参数类型为string时，返回值为string类型的元素构成的数组
function handleDataReload(x: number): string // 这个也是重载的一部分，指定当参数类型为number时，返回值类型为string
function handleDataReload(x: any): any { // 这个就是重载的内容了，他是实体函数，不算做重载的部分
  if (typeof x === 'string') {
    return x.split('')
  } else {
    return x
      .toString()
      .split('')
      .join('_')
  }
}
handleData('abc').join('_')
handleData(123).join('_') // error 类型"string"上不存在属性"join"
handleData(false) // error 类型"boolean"的参数不能赋给类型"number"的参数。