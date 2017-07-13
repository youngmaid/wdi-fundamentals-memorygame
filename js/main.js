
//arrray of cards

var cards = [
    {rank: "queen",
   suit: "hearts",
   cardImage: "img/queen-of-hearts.png"
  },
    {rank:"queen",
   suit: "diamonds",
   cardImage: "img/queen-of-diamonds.png"
  },
    {rank: "king",
   suit: "hearts",
   cardImage: "img/king-of-hearts.png"
   },
    {rank: "king",
   suit: "diamonds",
   cardImage:"img/king-of-diamonds.png"
  }
];
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
  console.log("img/queen-of-hearts.png");
  console.log("hearts");
  console.log("User flipped king");
  console.log("img/king-of-hearts.png");
  console.log("hearts");
  console.log("flipped over");
  console.log ("User flipped queen " + cards[cardId].rank);
  cardsInPlay.push(cards[cardId].queen);
  checkForMatch();
}
flipCard(0);
flipCard(2);
