"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BaseAnimal = /** @class */ (function () {
    function BaseAnimal() {
    }
    return BaseAnimal;
}());
var Animal = /** @class */ (function (_super) {
    __extends(Animal, _super);
    function Animal(name, age, sex) {
        if (sex === void 0) { sex = 'male'; }
        var _this = _super.call(this) || this;
        _this.age = 10;
        _this.sex = 'male';
        _this.name = name;
        _this.aliasName = name;
        _this.age = age;
        _this.sex = sex;
        return _this;
    }
    Animal.prototype.makeSound = function () {
        throw new Error("Method not implemented.");
    };
    Animal.prototype.move = function () {
        console.log(this.name + '--正在移动');
    };
    Animal.eat = function () {
        console.log('正在吃东西');
    };
    return Animal;
}(BaseAnimal));
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name, age, sex) {
        if (sex === void 0) { sex = 'male'; }
        return _super.call(this, name, age, sex) || this;
    }
    Dog.prototype.say = function () {
        throw new Error("Method not implemented.");
    };
    Dog.prototype.move = function () {
        console.log("this is a dog");
        _super.prototype.move.call(this);
    };
    return Dog;
}(Animal));
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(name, age, sex) {
        if (sex === void 0) { sex = 'male'; }
        return _super.call(this, name, age, sex) || this;
    }
    Snake.prototype.say = function () {
        throw new Error("Method not implemented.");
    };
    Snake.prototype.move = function () {
        console.log("this is a snake");
        _super.prototype.move.call(this);
    };
    return Snake;
}(Animal));
var d1 = new Dog('dog-a', 1);
// d1.age=1
// d1.sex = 'male'
// d1.aliasName = 'aa'
d1.move();
var d2 = new Snake('snake-a', 2);
// d2.move();
var animalConstructor = Animal;
animalConstructor;
console.log(d1);
