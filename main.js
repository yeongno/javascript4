const user ={
  name: 'HEROPY',
  age: 85,
  emails:[
    'thesecon@gamil.com',
    'neo@zillinks.com'
  ]
}

//localStorage.setItem('user', JSON.stringify(user))
// console.log(JSON.parse(localStorage.getItem('user')))
// localStorage.removeItem('user')

const str = localStorage.getItem('user')
const obj = JSON.parse(str)
obj.age = 22
console.log(obj)
localStorage.setItem('user',JSON.stringify(obj))