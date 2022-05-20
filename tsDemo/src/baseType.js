"use strict";
exports.__esModule = true;
var num = 5;
var str = String(12);
var bol = !1;
// let sym:Symbol = Symbol('a');
var nullName = null;
var undefinedName = undefined;
var voidName = undefined; //void类型只能复制undefined  不能赋值null
var neverName;
var arr1 = [1];
var arr2 = [1];
var all;
var tuple1 = ['1', 1];
var Status;
(function (Status) {
    Status["Error"] = "Error";
    Status["OK"] = "OK";
})(Status || (Status = {}));
var a = Status.OK;
