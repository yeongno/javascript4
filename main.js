let str = `
010-1234-5678
thesecon@gmail.com
http://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

console.log(str.match(/\.$/gim))
// \백슬래쉬 기호로 .라는 명령어 사인을 그대로 쓸 수 있게 사용
