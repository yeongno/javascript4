let x: [string, number];

x = ["hello", 39];
x = ["hello", "momo"];//이렇게 tuple 형식에 맞지않으면 에러 뜸.

x[1] =["helo",23];//인덱스의 length는 맞으나 안됨.
x[2];//index 는 2개인데 3개이므로 에러

const person: [string, number] = ["Mark", 39];


const [first, second, third] = person;