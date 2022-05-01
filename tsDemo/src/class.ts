abstract class BaseAnimal{
  abstract makeSound():void
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
// d1.age=1
// d1.sex = 'male'
// d1.aliasName = 'aa'
d1.move()
let d2:BaseAnimal = new Snake('snake-a',2); 
// d2.move();

let animalConstructor:typeof Animal= Animal; 
animalConstructor;
console.log(d1)

export {}