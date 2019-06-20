enum Status {
  Uploading,
  Success,
  Failed
}

console.log(Status.Uploading) // 0 默认0开始

enum Color {
  Red = 2,
  Blue
}

console.log(Color.Blue) // 3

enum NetStatus {
  Success = 200,
  NotFound = 400
}

console.log(NetStatus.Success) // 200
console.log(NetStatus[200]) // 'Success'
console.log(NetStatus['Success']) // 'Success'

enum E {
  A,
  B
}
const getIndex = (enumObj: { A: number }): number => {
  return enumObj.A
}

console.log(getIndex(E)) // 0
