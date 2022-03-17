interface Person3{
  name:string;
  age?:number;
  [index: string]: any;
}

function hello3(person: Person3): void{
  console.log(`안녕하세요${person.name} ${person.systers} ${person.age}입니다.`);
}

const p31:Person3={
  name: 'Mark',
  age: 21,
};

const p32:Person3={
  name: 'Mark2',
  systers: ["Sung", "chan"],
};

const p33:Person3 = {
  name: 'bobo',
  father: p31,
  mother: p32,
}
hello3(p31);
hello3(p32);