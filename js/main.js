


var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];

var cardsInPlay = [];
var scoreDisplay = document.getElementById("score-display");
var score = 0;

var updateScore = function () {
	scoreDisplay.textContent = ("SCORE: " + score);
}

var checkForMatch = function() {
	if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		score++;
		alert("You found a match! We're automatically resetting the board for you. Keep that score climbing!");
		updateScore();
		reset();
	} else {
		alert("No match, sorry! Press the reset button if you want to try again");
		score = 0;
		updateScore();
		}
	}
}

var flipCard = function() {
	var cardId = this.getAttribute("data-id");
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].suit);
	console.log(cards[cardId].cardImage);
	this.setAttribute("src", cards[cardId].cardImage);
	checkForMatch();
};

var createBoard = function() {
	for (i = 0; i < cards.length; i++) {
		var cardElement = document.createElement("img");
		cardElement.setAttribute("src", "images/back.png");
		cardElement.setAttribute("data-id", i);
		cardElement.addEventListener("click", flipCard);
		var resetButton = document.getElementById("reset");
		resetButton.addEventListener("click", reset);
		document.getElementById("game-board").appendChild(cardElement);
	}
}

var reset = function () {
	cardsInPlay.length = 0;
	document.getElementById("game-board").innerHTML = "";
	createBoard();
};



createBoard();
updateScore();

