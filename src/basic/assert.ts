/** 类型断言 */
const getStrLength = (target: string|number): number => {
  if ((target as string).length) { // 另一种禁止写法  <type>value
    return (target as string).length
  } else {
    return target.toString().length
  }
}
