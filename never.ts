function error(message: string): never{
  throw new Error(message);
}

function fail(){
  return error('failed');
}

function infiniteLoop(): never{
  while(true){}
}

// let a: string = "hello";
declare const a: string | number;

if(typeof a !== 'string'){
  a;
}

type Indexable<T> = T extends string ? T &{[index: string]: any} : never;

// type ObjectIndexable = Indexable<{}>;
const b: Indexable<{}> = ''