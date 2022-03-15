function returnVoid(message: string): void{
  console.log(message);

  return undefined;//undefined만 유일하게 void에 리턴 할 수 있다.
}

const r = returnVoid('리턴이 없다.');
