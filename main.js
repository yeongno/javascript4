const str = `
010-1234-5678
thesecon@gmail.com
http://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

// const regexp = new RegExp('the', 'gi')
//옵션 g는 the라는 문자를 찾는다. gi는 대소문자 가리지 않고 찾는다.
const regexp =/the/gi
console.log(str.match(regexp))