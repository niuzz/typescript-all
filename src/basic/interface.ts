/** 接口 */
interface IInfo {
  firstName: string
  lastName: string
}
const getFullName = ({ firstName, lastName }: IInfo) => {
  console.log(`${firstName}${lastName}`)
}

interface IVegetables {
  color?: string
  type: string
}

const getVegetables = ({ color, type }: IVegetables) => {
  return `A${color ? color + '' : ''}${type}`
}
