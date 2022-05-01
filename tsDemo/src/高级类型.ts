interface Bird {
  name:string
}

interface Fish {
 age:string
}
interface Fish {
  age_b:string
 }

let t1: 
| Bird
| Fish = {age:"aa",age_b:'bb'};



function broken(name: string | null): string {
  function postfix(epithet: string) {
    return name!.charAt(0) + '.  the ' + epithet; // error, 'name' is possibly null
  }
  return postfix("great");
}



type CustomResponse = {
  data:{
    errcode:number
  }
} 
// type CustomData = CustomResponse.data;  //无法正常访问子类型
type CustomData = CustomResponse["data"];



