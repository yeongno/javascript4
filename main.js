//JSON (JavaScript Object Notation)
//자바스크립트의 객체 표기법

import myData from './myData.json'

console.log(myData)

const user ={
  name: 'HEROPY',
  age: 85,
  emails:[
    'thesecon@gamil.com',
    'neo@zillinks.com'
  ]
}
console.log('user',user)

const str = JSON.stringify(user)
console.log('str',str)
console.log(typeof str)

const obj =JSON.parse(str)
console.log('obj', obj)