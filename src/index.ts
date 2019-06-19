import { Roles, tuple } from './basic/type'
const str: string = 'Hello Orange world'

const h2 = document.createElement('h2')
h2.style.color = 'orange'
h2.innerHTML = str
document.body.appendChild(h2)

const div = document.createElement('div')
div.style.color = '#f00'
div.innerHTML = tuple.toString()
document.body.appendChild(div)

const enumstr = document.createElement('h2')
enumstr.style.color = 'green'
enumstr.innerHTML = Roles[1]
document.body.appendChild(enumstr)
