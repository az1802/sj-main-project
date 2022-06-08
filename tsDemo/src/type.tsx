// * object literal syntax

type JSONResponse = {
  version: number;
  optionVal?:boolean;
}


let aaa:JSONResponse = {
  version:2,
}
aaa.version = 1;