
//arrray of cards

var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

//user flipped

//card one

var cardOne = cards [0];
cardsInPlay.push(cardOne);

console.log ("User flipped queen");

//card two

var cardTwo = cards [2];
cardsInPlay.push(cardTwo);

console.log("User flipped king");

//logic statement

if (cardsInPlay.length === 2) {
  if (cardsInPlay[0] === cardsInPlay[1]) {
     alert("You found a match!");
  } else {
     alert("Sorry, try again.");
  }
}
