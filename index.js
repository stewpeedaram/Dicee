// Player name
var player1 = "Player 1";
var player2 = "Player 2";

// Dice images array
var diceImages = [
    "images/dice1.png",
    "images/dice2.png",
    "images/dice3.png",
    "images/dice4.png",
    "images/dice5.png",
    "images/dice6.png"
];

// Function to determine the winner and update the text
function updateWinnerText(randomIndex1, randomIndex2) {
    var mainText = document.querySelector("body h1");

    if (randomIndex1 === randomIndex2) {
        mainText.innerHTML = "It's a Draw!";
    } else if (randomIndex1 < randomIndex2) {
        mainText.innerHTML = player2 + " is the Winner! 🚩";
    } else {
        mainText.innerHTML = player1 + " is the Winner! 🚩";
    }
}

// Function to roll the dice
function rollTheDice() {
    var randomIndex1 = Math.floor(Math.random() * diceImages.length);
    var randomIndex2 = Math.floor(Math.random() * diceImages.length);

    document.querySelector(".img1").setAttribute("src", diceImages[randomIndex1]);
    document.querySelector(".img2").setAttribute("src", diceImages[randomIndex2]);

    updateWinnerText(randomIndex1, randomIndex2);
}

// Shuffle the dice images and declare the winner on page load
window.onload = function () {
    var randomIndex1 = Math.floor(Math.random() * diceImages.length);
    var randomIndex2 = Math.floor(Math.random() * diceImages.length);

    document.querySelector(".img1").setAttribute("src", diceImages[randomIndex1]);
    document.querySelector(".img2").setAttribute("src", diceImages[randomIndex2]);

    updateWinnerText(randomIndex1, randomIndex2);
};