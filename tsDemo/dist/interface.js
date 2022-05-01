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
var u1 = {
    name: "123",
    bb: "bb"
};
function createSquare(config) {
    // ...
}
var squareOptions = { colour: "red", width: 100 };
var mySquare = createSquare(squareOptions); //这可以通过检查是因为 类型的兼容性判断
var t1 = squareOptions;
var func1 = function (name, count) {
    return name.charAt(count);
};
var say = /** @class */ (function () {
    function say() {
    }
    say.prototype.eat = function () {
        throw new Error("Method not implemented.");
    };
    say.prototype.say = function () {
        throw new Error("Method not implemented.");
    };
    return say;
}());
var Control = /** @class */ (function () {
    function Control() {
    }
    return Control;
}());
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Button.prototype.select = function () { };
    return Button;
}(Control));
// let t4:Button ={select(){}}  //含有私有成员的类 无法使用结构类型结构进行判断
var t5 = new Button();
var t3 = {
    size: 1
};
var t4 = {
    name: 'sj',
    age: 1
};
