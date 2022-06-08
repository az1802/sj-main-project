class TestThis {
  name = "123";
  getName = () => {
    console.log(this.name);
  }
  constructor(name) {
    this.name = name;
  }
}

let t1 = new TestThis("aaaaa");
console.log('t1: ', t1);
let a = t1.getName;
a()