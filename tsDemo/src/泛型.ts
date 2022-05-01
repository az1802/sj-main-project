


class Animal{
  constructor(public name:string){

  }
  move(){
    console.log('move...')
  }
}
let a1 = new Animal('dog')


function re<T>(arg:T):T{
  if(arg instanceof Animal){
    
  }
  return arg
}

let a =re(a1);


// 接口泛型 接口函数
interface GenericIdentityFn<T>{
  (arg:Array<T>):number
  (arg:T):T,
}

function re_a<T>(arg:T[]):number;
function re_a<T>(arg:T):T;
function re_a<T>(arg:any):T|number{
    if(arg instanceof Array){
    return arg.length;
  }else {
    return arg;
  }
}



type constructorType<T> = new (...args:any[])=>T;
// 构造函数泛型
function createInstance<T extends Object>(C: constructorType<T>): T {
  return new C('aaa');
}

createInstance(Animal);

export {}

export {}