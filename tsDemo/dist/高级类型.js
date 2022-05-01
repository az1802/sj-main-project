"use strict";
var t1 = { age: "aa", age_b: 'bb' };
function broken(name) {
    function postfix(epithet) {
        return name.charAt(0) + '.  the ' + epithet; // error, 'name' is possibly null
    }
    return postfix("great");
}
