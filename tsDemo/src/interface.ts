// 数据结构的描述
interface user{
  id:number;//必须存在的属性
  readonly name:string, //只读属性
  age?:number, //可选属性
  [propName:string]:any //属性key值声明,为string
  [index:number]:any//属性key值声明,为number
  new(name:string,age:number):void;//构造函数
  (name:string,count:number):string;//普通函数声明
  get size():number;//接口的get ,set
  set size(val:number|string);//接口的get set
}


// 可选属性可能存在误操作
interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): void {
  // ...
}

let squareOptions = { colour: "red", width: 100 };
let mySquare = createSquare(squareOptions); //这可以通过检查是因为 类型的兼容性判断
let t1:SquareConfig = squareOptions;

// 函数类型接口
interface userFunc{
  (name:string,count:number):string
}

let func1:userFunc = (name,count)=>{
  return name.charAt(count);
}

// 利用接口约束类
interface eatClass{
  eat():void
}
interface sayClass{
  say():never
}
class say implements sayClass,eatClass{
  eat(): void {
    throw new Error("Method not implemented.");
  }
  say(): never {
    throw new Error("Method not implemented.");
  }
}

// 接口的继承
class Control {
  private state: any;
}

interface SelectableControl extends Control {
  select(): void;
}

class Button extends Control implements SelectableControl {
  select() { }
}


// let t4:Button ={select(){}}  //含有私有成员的类 无法使用结构类型结构进行判断
let t5:Button =new Button()


//接口 set get
interface test{
  get size():number
  set size(val:number|string);
}

let t3:test = {
  size:1
}
// t3.size = false  //设置值是指定其类型


// 接口合并
interface same_a{
  name:string
}
interface same_a{
  age:number
}
let t4:same_a = {
  name:'sj',
  age:1
}

// 构造函数接口
interface newFunc{
  new(name:string,age:number):void;
  time:number;
}

const TestNewFunc :newFunc = class TestNewFunc {
  static time = 11;
  constructor(name:string,age:number){
    return 123; //这里的return 会被忽视
  }
}

export {}