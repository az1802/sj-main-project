"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// function foo(x: number) {
//   if (x !== 1 || x !== 2) {
//       //         ~~~~~~~
//       // Operator '!==' cannot be applied to types '1' and '2'.
//   }
// }
function assertNever(x) {
    throw new Error("Unexpected object: " + x);
}
function area(s) {
    switch (s.kind) {
        case "square": return s.size * s.size;
        case "rectangle": return s.height * s.width;
        case "circle": return Math.PI * Math.pow(s.radius, 2);
        default: assertNever(s);
    }
}
var t3 = {
    name: "sunj",
    age: 11
};
var keys_b;
var keys_c;
