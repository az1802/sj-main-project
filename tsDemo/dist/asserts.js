"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var all = '123';
var str = "aa";
all.charAt(1);
all.toFixed();
var str2 = all;
str2.charAt(1);
var User = /** @class */ (function () {
    function User() {
    }
    User.prototype.say = function () {
    };
    return User;
}());
function isUser(data) {
    if (data instanceof User) {
        return true;
    }
    return false;
}
var obj;
if (isUser(obj)) {
    obj.say();
}
else {
}
