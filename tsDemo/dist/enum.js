"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Base;
(function (Base) {
    Base[Base["x"] = 1] = "x";
    Base["OK"] = "OK";
    Base["ERROR"] = "ERROR";
})(Base || (Base = {}));
var directions = [0 /* Up */, 1 /* Down */, 2 /* Left */, 3 /* Right */];
window.onmousedown = function (mouseEvent) {
    console.log(mouseEvent.button); //<- Error
};
