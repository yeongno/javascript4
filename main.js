let str = `
010-1234-5678
thesecon@gmail.com
http://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://localhost:1234
동해물과 백두산이 마르고 닳도록
`

console.log(
  str.match(/^t/gim)
  )
console.log(
  str.match(/h..p/gim)
  )
console.log(
  str.match(/fox|dog/g)
  )//플래그 없을 시 가장 먼저있는 값 반환 fox
console.log(
  str.match(/https?/g)
  )
console.log(
  str.match(/d{2,3}/g)
  )

console.log(
  str.match(/\b\w{2,3}\b/g)
  )
console.log(
  str.match(/[fox]/g)
  )
console.log(
  str.match(/[0-9]{1,}/g)
  )
console.log(
  str.match(/[가-힣]{3,}/g)
  )
console.log(
  str.match(/\w/g)
)
console.log(
  str.match(/\bf\w{1,}\b/g)//소문자 f로 시작하는 영단어
)
console.log(
  str.match(/\b\d{1,}\b/g)
)

const h = `  the hello  world  !

`
console.log(
  h.replace(/\s/g,``)//공백 활용
)

console.log(
  str.match(/.{1,}(?=@)/g)//@기준으로 앞쪽의 패턴이 적합한 값 반환
)
console.log(
  str.match(/(?<=@).{1,}/g)
)