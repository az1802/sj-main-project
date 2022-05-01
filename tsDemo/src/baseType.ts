let num: number = 0b101;
let str: String = String(12);
let bol: boolean = !1;
let sym:symbol = Symbol('a');
let nullName: null = null;
let undefinedName: undefined = undefined;
let voidName:void = undefined; //void类型只能复制undefined  不能赋值null
let neverName:never;
let arr1:Array<number> = [1]
let arr2:number[] = [1]
let all:unknown;
let tuple1:[string,number] = ['1',1]
enum Status {
  Error="Error",
  OK="OK"
}

let a :Status = Status.OK

export {}

