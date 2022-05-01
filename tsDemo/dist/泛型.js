"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.move = function () {
        console.log('move...');
    };
    return Animal;
}());
var a1 = new Animal('dog');
function re(arg) {
    if (arg instanceof Animal) {
    }
    return arg;
}
var a = re(a1);
function re_a(arg) {
    if (arg instanceof Array) {
        return arg.length;
    }
    else {
        return arg;
    }
}
// 构造函数泛型
function createInstance(C) {
    return new C('aaa');
}
createInstance(Animal);
