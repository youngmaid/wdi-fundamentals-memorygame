
//arrray of cards

var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

//checking for match

var checkForMatch = function() {
  if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
      alert("You found a match!");
    } else {
     alert("Sorry, try again.");
  }
 }
}

// flipCard function
var flipCard = function(cardId) {
  console.log ("User flipped queen");
  console.log("User flipped king");
  console.log("flipped over");
  console.log ("User flipped queen " + cards[cardId]);
  cardsInPlay.push(cards[cardId]);
  checkForMatch();
}
flipCard(0);
flipCard(2);
