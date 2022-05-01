function buildName1(firstName:string,lastName:string):string{
  return firstName+lastName
}
function buildName2(firstName:string,lastName:string='b'):string{
  return firstName+lastName
}
function buildName3(firstName:string,lastName?:string):string{
  return firstName+lastName
}


buildName1('a','b')
buildName2('a')
buildName3('a')



interface Card {
  suit: string;
  card: number;
}
interface Deck {
  suits: string[];
  cards: number[];
  createCardPicker(this: Deck,name:string): () => Card; //this指明函数运行时的this指向类型,保证this指向正确默认放在第一位
}
let deck: Deck = {
  suits: ["hearts", "spades", "clubs", "diamonds"],
  cards: Array(52),
  // NOTE: The function now explicitly specifies that its callee must be of type Deck
  createCardPicker: function(this: Deck,name:string) { //声明this类型
    console.log('this: ', this);
      return () => {
          let pickedCard = Math.floor(Math.random() * 52);
          let pickedSuit = Math.floor(pickedCard / 13);

          return {suit: this.suits[pickedSuit], card: pickedCard % 13};
      }
  }
}

let cardPicker = deck.createCardPicker('aa');
let pickedCard = cardPicker();

console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
// this指向问题
class Handler {
  info: string="sunj";
  onClickGood_a = (e: Event) => { this.info = e.type } 
  onClickGood = function (this:Handler,e:{a:"aa"}){ this.info = e.a }
}

let h1 = new Handler();
h1.onClickGood({a:"aa"})
console.log(h1.info)



// 函数重载

let suits = ["hearts", "spades", "clubs", "diamonds"];

function pickCard(x: {suit: string; card: number; }[]): number;
function pickCard(x: number): {suit: string; card: number; };
function pickCard(x:any): any {
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof x == "object") {
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    // Otherwise just let them pick the card
    else if (typeof x == "number") {
        let pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}

let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
let pickedCard1 = myDeck[pickCard(myDeck)];
alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);

let pickedCard2 = pickCard(15);
alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);



export {}