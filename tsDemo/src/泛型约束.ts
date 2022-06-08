function pick<Type,key extends keyof Type>(obj:Type,key:key ):Type[key]{
  return obj[key];
}

let objTemp1 = {a:'a',b:'b'}
pick(objTemp1,'a')

// keyof 推断
type AnyKeyType = keyof any;
type StringKeyType = keyof string;
type NumberKeyType = keyof number;
type BooleanKeyType = keyof Boolean;
type NullKeyType = keyof null; //never
type UndefinedKeyType = keyof undefined; //never
type ObjectKeyType = keyof Object;
 
type Mapish = { [k: string]: boolean };
type M = keyof Mapish; //因为js对象里面key总是转换为字符串所以这里 M = string | number

type Point = { x: number; y: string };
type PoinyKey = keyof Point; //p的值可以为 'x' | 'y'
// 通过索引访问一个类型
type PointValue = Point[keyof Point]; //string | number

// typeof 根据值的类型自动推断类型
let fn = ()=>{
  return 1;
};

type fnType = typeof fn;
let str = "123";
type strType = typeof str;

// typeof 作用在枚举类型上
enum ColorsA {
    "red",
    " blue",
    " yellow",
 }
 type A = keyof ColorsA; // "toString" | "toFixed" | "toExponential" | "toPrecision" | "valueOf" | "toLocaleString"
 //当把keyof用在number类型的enum上时，会得到Number.prototype上所定义的方法的名字（string格式）的联合类型。
 enum ColorsB {
     red = 'red',
     blue = 'blue',
     yellow = 'yellow'
 }
 type B = keyof ColorsB; // number | "toString" | "charAt" | "charCodeAt" | "concat" | ...27 more... | "padEnd"




// ReturnType 返回函数的返回类型,不能针对值只能针对类型
type Predicate = (x: unknown) => boolean;
type K = ReturnType<Predicate>;

function fn2() {
  return { x: 10, y: 3 };
}
type Paaa = ReturnType<typeof fn2>;


function f() {
  return { x: 10, y: 3 };
}
type P = ReturnType<typeof f>;


// 索引类型
type Person = { age: number; name: string; alive: boolean }
type I1 = Person['age' | 'alive']; // string | number
type I2 = Person[keyof Person];  // string | number | boolean

const MyArray = [
  { name: "Alice", age: 15 },
  { name: "Bob", age: 23 },
  { name: "Eve", age: 38 },
];

type PersonType = typeof MyArray[number]; //{name:string, age:number}
type age = typeof MyArray[number]['age'] //{age:number}



// 条件类型
interface IdLabel {
  id: number /* some fields */;
}
interface NameLabel {
  name: string /* other fields */;
}
 
function createLabel(id: number): IdLabel;
function createLabel(name: string): NameLabel;
function createLabel(nameOrId: string | number): IdLabel | NameLabel;
function createLabel(nameOrId: string | number): IdLabel | NameLabel {
  throw "unimplemented";
}



type NameOrId<T extends number | string> = T extends number
  ? IdLabel
  : NameLabel;

  function createLabelTwo<T extends number | string>(idOrName: T): NameOrId<T> {
    throw "unimplemented";
  }
   
let labelTwoa = createLabelTwo("typescript");
  
let labelTwob = createLabelTwo(2.8);
    
let labelTwoc = createLabelTwo(Math.random() ? "hello" : 42);


// mapped types
type Create<T extends keyof any,P> = {
  [key in T]:P
}
type Coord = Create<"x" | "y", string>;

// 利用- + 对装饰符进行处理
type CoordOptional = {
  x?: number;
  readonly y: number;
}; 
type CoordA = {
  -readonly[K in keyof CoordOptional] -? : number;
};

// 利用as改变key的类型
type Getters<Type> = {
  [Property in keyof Type as `get${Capitalize<string & Property>}`]: () => Type[Property]
};

interface Persona {
  name: string;
  age: number;
  location: string;
}

type LazyPerson = Getters<Persona>;

// 字面意义泛型,即泛型常量
type World = "world";
type Greeting = Uncapitalize<`Hello${World}`>;

// 使用联合类型时,所有的值都会进行循环处理.分布式类型
type EmailLocaleIDs = "welcome_email" | "email_heading";
type FooterLocaleIDs = "footer_title" | "footer_sendoff";
type AllLocaleIDs = `${EmailLocaleIDs}_${FooterLocaleIDs}`;


export {}