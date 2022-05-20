// 数据结构的描述
interface user{
  readonly name:string,
  age?:number, //可选
  [propName:string]:any //属性key值声明,为string
  [index:number]:any//属性key值声明,为number
}

let u1:user = {
  name:"123",
  bb:"bb"
}
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


interface userFunc{
  (name:string,count:number):string
}

let func1:userFunc = (name,count)=>{
  return name.charAt(count);
}


interface sayClass{
  say():void
}
interface eatClass{
  eat():void
}

class say implements sayClass,eatClass{
  eat(): void {
    throw new Error("Method not implemented.");
  }
  say(): void {
    throw new Error("Method not implemented.");
  }

}

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
export {}