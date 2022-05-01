namespace Sunj{
  export type name = string
  export class Animal{
    constructor(public name:string){}
  }
}

import polygons = Sunj.Animal;

let a1 = new polygons('1')