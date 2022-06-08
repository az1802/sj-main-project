# TypeScript

* :后面的内容都是声明类型.(const add3 = (x:number)=>number )
* 一个值赋值给另外的值,类型也会跟随.--类型推断



#### 基本类型

number,boolean,string,null,undefined,symbol,bigint

object(function ,array ,object)

数组:number[],<number>[]

元组:[number,string]

interface

class

any

type

泛型

联合类型(|),交差类型(&)

never

Void,unknow



### 接口

1. 对数据结构的描述.
2. 接口的可选,只读,索引属性,方法接口,构造函数接口,私有属性,静态属性.
3. 多次声明相同的接口会自动进行合并.

```js
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
```



### 类

* 利用extends构建继承各个类的继承体系,implement来实现一些约束性的方法和属性
* 一个类可以实现多个接口

1. public 属性 方法,protected 属性 方法,private 属性 方法,readonly 属性 方法,static 属性 方法.

```js
// 抽象类
abstract class BaseAnimal{
  abstract makeSound():void; //抽象类必须实现
}
class Animal extends BaseAnimal{
  public  name:string 
  public readonly aliasName:string
  protected age:number = 10
  private sex:string = 'male'
  constructor(name:string,age:number,sex='male'){
    super()
    this.name = name
    this.aliasName = name;
    this.age = age
    this.sex = sex
  }
  makeSound(): void {
    throw new Error("Method not implemented.")
  }
  move(){
    console.log(this.name+'--正在移动')
  }
  static eat(){
    console.log('正在吃东西')
  }
}

class Dog extends Animal{
  say(): void {
    throw new Error("Method not implemented.")
  }
  constructor(name:string,age:number,sex='male'){
   super(name,age,sex);
  }
  move(){
    console.log("this is a dog")
    super.move();
  }
}

class Snake extends Animal{
  say(): void {
    throw new Error("Method not implemented.")
  }
  constructor(name:string,age:number,sex='male'){
    super(name,age,sex);
  }
  move(){
    console.log("this is a snake")
    super.move();
  }
}

let d1 = new Dog('dog-a',1);
// d1.age=1 // age属性受保护 只能在子类中访问
// d1.sex = 'male'//sex为私有属性 只能在Animal中访问
// d1.aliasName = 'aa' // aliasName为只读属性
d1.move()
let d2:BaseAnimal = new Snake('snake-a',2); 
// d2.move();  //BaseAnimal 不存在move属性

let animalConstructor:typeof Animal= Animal; 
animalConstructor;
console.log(d1)

export {}
```



1. 修饰符

2. 多态

3. 继承

4. 抽象类,抽象方法

5. Super

6. this指向

   

### 函数

1. 函数参数
   * 可选参数
   * reset参数

2. 函数返回值
3. 函数重载
4. 



### 泛型

1. 函数泛型

2. 类泛型

3. 泛型约束

   3.1 extends

   3.2 keyof

   ```typescript
   
   function pick<Type,key extends keyof Type>(obj:Type,key:key ):Type[key]{
     return obj[key];
   }
   
   let objTemp1 = {a:'a',b:'b'}
   pick(objTemp1,'a')
   
   type Arrayish = { [n: number]: unknown };
   type A = keyof Arrayish;
       
    
   type Mapish = { [k: string]: boolean };
   type M = keyof Mapish; //因为js对象里面key总是转换为字符串所以这里 M = string | number
   ```

   3.3 typeof与ReturnType

   ```ts
   // ReturnType 返回函数的返回类型
   type Predicate = (x: unknown) => boolean;
   type K = ReturnType<Predicate>;
   
   function f() {
     return { x: 10, y: 3 };
   }
   type P = ReturnType<typeof f>;
   ```

   3.4 index types.索引类型

   ```ts
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
   ```

   3.5 条件类型

   ```ts
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
   ```

   



### 类型推断



### 类型兼容
