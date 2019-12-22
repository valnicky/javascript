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
newGameBtn.addEventListener("click", function() {
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
    default:
      return 10;
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
  if (hasAce && score + 11 <= 21) {
    return score + 11;
  }
  return score;
}

function updateScores() {
  dealerScore = getScore(dealerCards);
  playerScore = getScore(playerCards);
}

hitBtn.addEventListener("click", function() {
  playerCards.push(getNextCard());
  checkForEndOfGame();
  showStatus();
});

stayBtn.addEventListener("click", function() {
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

  if (playerScore > 21) {
    playerWon = false;
    gameOver = true;
  } else if (dealerScore > 21) {
    playerWon = true;
    gameOver = true;
  } else if (gameOver) {
    if (playerScore > dealerScore) {
      playerWon = true;
    } else {
      playerWon = false;
    }
  }
}





/*
let suits = ['Hearts', 'Clubs', 'Diamonds', 'Spades'];

let values = ['Ace', 'King', 'Queen', 'Jack', 'Ten', 'Nine',
	 'Eight', 'Seven', 'Six', 'Five', 'Four', 'Three', 'Two'];

// DOM variables 
let textArea = document.getElementById('text-area');
let newGameBtn = document.getElementById('new-game-button');
let hitBtn = document.getElementById('hit-button');
let stayBtn = document.getElementById('stay-button');

// Game variables
let gameStarted = false,
	gameOver = false,
	playerWon = false,
	dealerCards = [],
	playerCards = [],
	dealerScore = 0,
	playerScore = 0,
	deck = [];

hitBtn.style.display = 'none';
stayBtn.style.display = 'none';
showStatus();

newGameBtn.addEventListener('click', function(){
	gameStarted = true;
	gameOver = false;
	playerWon = false;

	deck = createDeck();
	shuffleDeck(deck);
	dealerCards = [ getNextCard(), getNextCard()];
	playerCards = [ getNextCard(), getNextCard()];

	newGameBtn.style.display = 'none';
	hitBtn.style.display = 'inline';
	stayBtn.style.display = 'inline';
	showStatus();
});

hitBtn.addEventListener('click', function(){
	playerCards.push(getNextCard());
	checkForEndOfGame();
	showStatus();
});

stayBtn.addEventListener('click', function(){
	gameOver = true;
	checkForEndOfGame();
	showStatus();
});


function checkForEndOfGame(){
	updateScores();

	if(gameOver) {
		//let dealer take cards
		while(dealerScore < playerScore && playerScore <= 21
			&& dealerScore <= 21) {
			dealerCards.push(getNextCard());
		updateScores();
		}
	}

	if(playerScore > 21) {
		playerWin = false;
		gameOver = true;
	} else if (dealerScore >21 ) {
		playerWon = true;
		gameOver = true;
	} else if (gameOver) {
		if(playerScore > dealerScore){
			playerWon = true;
		} else {
			playerWon = false;
		}

		
	}

};

function createDeck() {
	let deck = [];
	for(let idxSuits = 0; idxSuits < suits.length; idxSuits++) {
		for(let idxValues = 0; idxValues < values.length; idxValues++){
			let card = {
				suit: suits[idxSuits],
				value: values[idxValues]
			};
		deck.push(card);
		}
	}
	return deck;
}

function shuffleDeck(deck) {
	for( let i =0; i < deck.length; i++) {
		let swapIdx = Math.trunc(Math.random() * deck.length);  //a num between 0 and 52
		let tmp = deck[swapIdx];  //we save it temporally into a tmp variable
		deck[swapIdx] = deck[i];  //deck[i] we put it into swap indx
		deck[i] = tmp;  //we swap deck[i] with deck[swapIdx]
	}
}

function getCardString(card) {
	return card.value + ' of ' + card.suit;
}

function getCardNumericValue(card) {
	switch(card.value){
		case 'Ace':
			return 1;
		case 'Two':
			return 2;
		case 'Three':
			return 3;
		case 'Four':
			return 4;
		case 'Five':
			return 5;
		case 'Six':
			return 6;
		case 'Seven':
			return 7;
		case 'Eight':
			return 8;
		case 'Nine':
			return 9;
		default:
			return 10;
	}
}

function getScore(cardArray) {
	let score = 0;
	let hasAce = false;
	for(let i = 0; i < cardArray.length; i++ ){
		let card = cardArray[i];
		score += getCardNumericValue(card);
		if(card.value === 'Ace'){
			hasAce = true;
		}
	}
	if(hasAce && score +10 <= 21) {
		return score +10;
	}
	return score;
}

function updateScores(){
	dealerScore = getScore(dealerCards);
	playerScore = getScore(playerCards);
}


function showStatus() {
	if(!gameStarted) {
		textArea.innerText = "Welcome to Blackjack!";
		return;
	}

	let dealerCardString = '';
	for(let i = 0; i < dealerCards.length; i++) {
		dealerCardString += getCardString(dealerCards[i]) + '\n';
	}


	let playerCardString = "";
	for(let i = 0; i < playerCards.length; i++ ){
		playerCardString += getCardString(playerCards[i]) + '\n';
	}

	for(var i = 0; i< deck.length; i++) {
		textArea.innerText += '\n' + getCardString(deck[i]);
	}

	updateScores();

	textArea.innerText = 
		'Dealer has:\n' + dealerCardString + '(score: ' + dealerScore +
		 ')\n\n' + 
	 	'Player has:\n' + playerCardString + '(score: ' + playerScore + 
	 	')\n\n';

	if(gameOver) {
		if(playerWon){
			textArea.innerText += "YOU WIN!";
		} else {
			textArea.innerText += "DEALER WINS";
		}

		newGameBtn.style.display = "inline";
		hitBtn.style.display = "none";
		stayBtn.style.display = "none";
	}


	}

function getNextCard(){
	return deck.shift();
}


*/


