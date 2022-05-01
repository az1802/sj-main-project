type Alias = { num: number }
interface Interface {
    num: number;
}
declare function aliased(arg: Alias): Alias;
declare function interfaced(arg: Interface): Interface;

// function foo(x: number) {
//   if (x !== 1 || x !== 2) {
//       //         ~~~~~~~
//       // Operator '!==' cannot be applied to types '1' and '2'.
//   }
// }
function assertNever(x: never): never {
  throw new Error("Unexpected object: " + x);
}


// 可辨识联合类型 (kind做为各个类型的常量标识符)
interface Square {
  kind: "square";
  size: number;
}
interface Rectangle {
  kind: "rectangle";
  width: number;
  height: number;
}
interface Circle {
  kind: "circle";
  radius: number;
}
type Shape = Square | Rectangle | Circle;
function area(s: Shape):number {
  switch (s.kind) {
      case "square": return s.size*s.size;
      case "rectangle": return s.height * s.width;
      case "circle": return Math.PI * s.radius ** 2;
      default : assertNever(s);
  }
}

interface userInfo{
  name:string,
  age:number
}

let t3 = {
  name:"sunj",
  age:11
}


type keys_a = keyof userInfo;
let keys_b: keyof userInfo;
let keys_c:keyof typeof t3 ;


// 所有属性转换为可选
type Partial<T> = {
  [K in keyof T]?:T[K]
}

// 所有索引转换为只读属性
type Readonly<T> = {
 readonly [K in keyof T] : T[K]
}

// 可选类型转换为必选
type Required<T> = {
  [K in keyof T]-?: T[K]
 }

//  类型转换 将传入的泛型键值的类型转换为T类型
 type Record<K extends (string | number | symbol),T> = {
   [P in K]:T
 }


//Pick<Type, Keys>  提取属性
type Pick<T,K extends keyof T> = {
  [P in K]?:T[P]
}

// Omit<Type, Keys> 排除type中的keys值
type Omit<T,K extends (string | number | symbol)> = {
  [P in Exclude<keyof T ,K>]:T[P]
}

type Exclude<T,U> = T extends U ? never :T
type Extract<T,U> = T extends U ? U :never
type NoNullType<T,U> = T extends null | undefined ? never : T


// infer相关的扩展
type Parameters<T extends (...arg:any[])=>any> =  T extends (...arg:infer P)=>any ? P : never;
type ConstructorParameters<T extends new (...arg:any[])=>any> = T extends new (...arg:infer P)=>any ? P : never;

export {}