interface Person2{
  name: string;
  age?: number;//age가 있을 수도 있고 없을 수도 있다.
}

function hello2(person: Person2): void{
  console.log(`안녕하세요! ${person.name} 입니다.`);
}

hello2({name: "Mark, age: 39"});
hello2({name: "Mark"});

const p:Person2={
  name: "snake",
}
hello2(p);