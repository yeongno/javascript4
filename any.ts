function returnAny(message: any): any {//noImplicitAny any를 써야하는데 쓰지 않을 경우 에러 

  console.log(message);
}

const any1 = returnAny("리턴은 아무거나");

any1.toString();

let looselyTyped: any = {};

const d = looselyTyped.a.b.c.d;//any가 개체를 통해 전파되어 결국에는 안전성을 잃음

function leakingAny(obj:any){//any를 쓸 수 밖에 없는 상황
  const a = obj.num;
  const b = a + 1;
  return b;
}

const c = leakingAny({num:0});
c.indexOf("0");