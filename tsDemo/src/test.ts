interface IWithLength {
  length: number;
}

function echoWithLength<T extends IWithLength>(arg:T):T{
  arg.length = 1;
  return arg;
}

let tt1 = echoWithLength([1,2,3]);