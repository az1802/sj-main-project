let all:any = '123';
let str:string = "aa";
(all as string ).charAt(1);
(all as number).toFixed();

let str2 = <string>all;
str2.charAt(1)

class User{

  say(){

  }
}

function isUser(data:any):data is User{
  if(data instanceof User){
    return true
  }
  return false
}

let obj:any;
if(isUser(obj)){
  obj.say()
}else{

}

export {}