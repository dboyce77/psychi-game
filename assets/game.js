
// Next, we give JavaScript a function to execute when onkeyup event fires.

var rand_letter = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'W', 'X', 'Y', 'Z'];
var userMessage = document.getElementById('message');
var actual_letter = "";
var wins = 0;
var loses = 0;
var tries = 0;
var guesses = [];
var isStart = false;



function getRandomLetter() {
    var num = getRandomInt(rand_letter.length);
    actual_letter = rand_letter[num].toLowerCase();
}


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function updateTries() {
    console.log(tries);
    document.getElementById("user-tries").innnerHTML = tries;

}

function updateWins(wins) {
    wins++;
    document.getElementById("user-wins").innerHTML = wins;
}

function updateLoses(loses) {
    loses++;
    document.getElementById("user-loses").innerHTML = loses;
}

function resetGame() {
    tries = 9;
    getRandomLetter();
    guesses = [];
}

document.onkeyup = function (event) {
    var letter = event.key.toLowerCase();
    guesses.push(letter);
    document.getElementById('user-list').innerHTML = guesses;
    console.log("actual letter: " + actual_letter);

    if (actual_letter == letter) {
        wins++;
        resetGame();
        document.getElementById('user-tries').innerHTML = tries;
    }
    if (actual_letter != letter) {
        tries--;
        updateTries();
    }

    if (numTries = 0) { updateLoses(); resetGame();updateTries(); }

};










