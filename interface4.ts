interface Person4 {
  name: string;
  age: number;
  hello(): void;
}

const p41: Person4 = {
  name: 'Mark',
  age: 39,
  hello: function(): void{
    console.log(`안녕하세요! ${this.name}입니다.`);
  },
};
const p42: Person4 = {
  name: 'Mark',
  age: 39,
  hello(): void{//function 키워드를 쓰지않아도 별 상관 없음
    console.log(`안녕하세요! ${this.name}입니다.`);
  },
};
const p43: Person4 = {
  name: 'Mark',
  age: 39,
  hello(this:Person4): void{//이렇게 this type을 지정 가능 그러나 void=>{this.name}의 형식은 grobalthis로 불가능
    console.log(`안녕하세요! ${this.name}입니다.`);
  },
};

p41.hello();
p42.hello();