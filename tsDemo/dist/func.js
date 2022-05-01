"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function buildName1(firstName, lastName) {
    return firstName + lastName;
}
function buildName2(firstName, lastName) {
    if (lastName === void 0) { lastName = 'b'; }
    return firstName + lastName;
}
function buildName3(firstName, lastName) {
    return firstName + lastName;
}
buildName1('a', 'b');
buildName2('a');
buildName3('a');
var deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    // NOTE: The function now explicitly specifies that its callee must be of type Deck
    createCardPicker: function (name) {
        var _this = this;
        console.log('this: ', this);
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
var cardPicker = deck.createCardPicker('aa');
var pickedCard = cardPicker();
console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
// this指向问题
var Handler = /** @class */ (function () {
    function Handler() {
        var _this = this;
        this.info = "sunj";
        this.onClickGood_a = function (e) { _this.info = e.type; };
        this.onClickGood = function (e) { this.info = e.a; };
    }
    return Handler;
}());
var h1 = new Handler();
h1.onClickGood({ a: "aa" });
console.log(h1.info);
// 函数重载
var suits = ["hearts", "spades", "clubs", "diamonds"];
function pickCard(x) {
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof x == "object") {
        var pickedCard_1 = Math.floor(Math.random() * x.length);
        return pickedCard_1;
    }
    // Otherwise just let them pick the card
    else if (typeof x == "number") {
        var pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}
var myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
var pickedCard1 = myDeck[pickCard(myDeck)];
alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);
var pickedCard2 = pickCard(15);
alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);
