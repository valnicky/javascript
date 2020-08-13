//
// Blackjack 
// by Valeria
//

// Card variables
//variables DOM
let hitBtn = document.getElementById("hit-button");
let newGameBtn = document.getElementById("new-game-button");
let stayBtn = document.getElementById("stay-button");
let txtArea = document.getElementById("text-area");

//variables juego
let suits = ["Hearts", "Clubs", "Spades", "Diamonds"];
let values = [
  "Ace",
  "King",
  "Queen",
  "Jack",
  "Ten",
  "Nine",
  "Eight",
  "Seven",
  "Six",
  "Five",
  "Four",
  "Three",
  "Two"
];

let gameStart = false,
  gameOver = false;
let dealerCards = [],
  playerCards = [];
let playerWon = false;
let playerScore = 0,
  dealerScore = 0;
let cards = [];

hitBtn.style.display = "none";
stayBtn.style.display = "none";
showStatus();

//create Deck with all cards
function createDeck() {
  let cards = [];
  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < values.length; j++) {
      let card = {
        suit: suits[i],
        value: values[j]
      };
      cards.push(card);
    }
  }
  return cards;
}

//when click btn newGame
newGameBtn.addEventListener("click", function () {
  stayBtn.style.display = "inline";
  hitBtn.style.display = "inline";
  newGameBtn.style.display = "none";
  gameStart = true;
  gameOver = false;
  playerWon = false;

  cards = createDeck();
  shuffle(cards);

  dealerCards = [getNextCard(), getNextCard()];
  playerCards = [getNextCard(), getNextCard()];

  showStatus();
});

//shuffle the cards
function shuffle(cards) {
  for (let a = 0; a < cards.length; a++) {
    let cardIdx = Math.trunc(Math.random() * cards.length);
    let tmp = cards[cardIdx];
    cards[cardIdx] = cards[a];
    cards[a] = tmp;
  }
}

//show status
function showStatus() {
  if (!gameStart) {
    txtArea.innerText = "Welcome to Blackjack!";
    return;
  }

  let playerCardString = "",
    dealerCardString = "";
  for (let i = 0; i < playerCards.length; i++) {
    playerCardString += getCardString(playerCards[i]) + "\n";
  }
  for (let i = 0; i < dealerCards.length; i++) {
    dealerCardString += getCardString(dealerCards[i]) + "\n";
  }
  for (let i = 0; i < cards.length; i++) {
    txtArea.innerText += getCardString(cards[i]) + "\n";
  }
  updateScores();

  txtArea.innerText =
    "Dealer has: \n" +
    dealerCardString +
    " (score: " +
    dealerScore +
    ")\n\n" +
    "Player has: \n" +
    playerCardString +
    " (score: " +
    playerScore +
    ")";

  if (gameOver) {
    if (playerWon) {
      txtArea.innerHTML += '<br><span class="win_lose">YOU WIN</span>';
    } else {
      txtArea.innerHTML += '<br><span class="win_lose">DEALER WINS</span>';
    }
    hitBtn.style.display = "none";
    stayBtn.style.display = "none";
    newGameBtn.style.display = "inline";
  }
}

//getNextCard
function getNextCard() {
  return cards.shift();
}

function getCardString(card) {
  return card.value + " of " + card.suit;
}

function getCardNumericValue(card) {
  switch (card.value) {
    case "Ace":
      return 1;
    case "Two":
      return 2;
    case "Three":
      return 3;
    case "Four":
      return 4;
    case "Five":
      return 5;
    case "Six":
      return 6;
    case "Seven":
      return 7;
    case "Eight":
      return 8;
    case "Nine":
      return 9;
    case "Ten":
      return 10;
    case "Jack":
      return 12;
    case "Queen":
      return 13;
    case "King":
      return 14;
    default:
      return 0;
  }
}

function getScore(cardArray) {
  let score = 0;
  let hasAce = false;
  for (let i = 0; i < cardArray.length; i++) {
    let card = cardArray[i];
    score += getCardNumericValue(card);
    if (card.value == "Ace") {
      hasAce = true;
    }
  }
  if (hasAce && score + 10 <= 21) {
    return score + 10;
  }
  return score;
}

function updateScores() {
  dealerScore = getScore(dealerCards);
  playerScore = getScore(playerCards);
}

hitBtn.addEventListener("click", function () {
  playerCards.push(getNextCard());
  dealerCards.push(getNextCard());
  checkForEndOfGame();
  showStatus();
});

stayBtn.addEventListener("click", function () {
  gameOver = true;
  checkForEndOfGame();
  showStatus();
});

function checkForEndOfGame() {
  updateScores();

  if (gameOver) {
    //let dealer take cards
    while (dealerScore < playerScore && dealerScore < 21 && playerScore < 21) {
      dealerCards.push(getNextCard());
      updateScores();
    }
  }

  if (playerScore > 21 && dealerScore > 21) {
    gameOver = true;
    //alert('There are not any winner! ');
  } else if (playerScore > 21) {
    playerWon = false;
    gameOver = true;
  } else if (dealerScore > 21) {
    playerWon = true;
    gameOver = true;
  } else if (playerScore === dealerScore) {
    gameOver = false;
  } else if (gameOver) {
    if (playerScore > dealerScore && playerScore <= 21) {
      playerWon = true;
    } else if (playerScore === 21) {
      playerWon = true;
    } else if (dealerScore === 21) {
      playerWon = false;
    } else {
      playerWon = false;
    }
  }
}