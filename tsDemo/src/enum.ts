
enum Base{
  x=1,
  OK="OK",
  ERROR="ERROR"
}


// 枚举类型本身变成了每个枚举成员的 联合
declare enum FileAccess{
  None,
  Read=1<<1,
  Write=1<<2,
  ReadWrite=Read | Write

}


// 常量枚举 编译的时候会被删除
 const enum Directions {
  Up,
  Down,
  Left,
  Right,
}


let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right]



window.onmousedown = function(mouseEvent:any) {
  console.log(mouseEvent.button);  //<- Error
};

export {}