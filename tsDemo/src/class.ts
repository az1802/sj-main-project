// 修饰符
// public,protected,private,readonly,abstract,static
// super
// get,set 获取或者更新值

// 抽象类
abstract class BaseAnimal{
  abstract makeSound():void; //抽象类必须实现
}
class Animal extends BaseAnimal{
  // static name:string = "animal"; //与内置静态属性name冲突
  public fullname:string = "animal";
  public readonly aliasName:string
  protected age:number = 10
  private sex:string = 'male'
  constructor(name:string,age:number,sex='male'){
    super()
    this.fullname = name;
    this.aliasName = name;
    this.age = age
    this.sex = sex
  }
  makeSound(): void {
    throw new Error("Method not implemented.")
  }
  move(){
    console.log(this.fullname+'--正在移动')
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
    console.log("this is a dog");
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


// 派生类的方法进行覆盖时,不能对参数类型进行覆盖
// class Base {
//   greet() {
//     console.log("Hello, world!");
//   }
// }
// class Derived extends Base {
//   // Make this parameter required
//   greet(name: string) {
//     console.log(`Hello, ${name.toUpperCase()}`);
//   }
// }


// 类与接口的异同
// 接口是限定行为,不做具体的实现 ,一个类可以实现多个接口


//静态类型成员不能引用泛型,因为静态值进行更改时Box<number>与Box<string>可能就会不兼容
// class Box<Type> {
//   public static defaultValue: Type; 
// }


class TestThis {
  name:string = "123";
  getName = ():void => {
    console.log(this.name); // 原型方法this指向实例对象,静态方法则执行TestThis类
  }
  constructor(name:string) {
    this.name = name;
  }
  sameAs(other: TestThis) { //this用做类型
    return other.name === this.name;
  }
  isTestThis():this is TestThis{ //this.用作类型守卫
    return this instanceof TestThis;
  }
}


// 抽象类不能被new
// abstract class Base {
//   abstract getName(): string;
 
//   printName() {
//     console.log("Hello, " + this.getName());
//   }
// }
// class BaseClass extends Base{
//   getName():string{
//     return "123"
//   }
// }

// let typeClass = typeof BaseClass;

// function createBase(ctor:typeof Base){
//   return new ctor()
// }
 
// const b = new BaseClass();


class Empty {}
 
function fn(x: Empty) {
  // can't do anything with 'x', so I won't
}
 
// All OK!
fn(window);
fn({});
fn(fn);

export {}
