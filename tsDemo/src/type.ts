// * object literal syntax

type JSONResponse = {
  version: number,
  optionVal?:boolean,
  update:(a:number, b:number)=>void,
  update(a:number): void,
  
}