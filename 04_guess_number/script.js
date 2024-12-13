let randomNum = parseInt(Math.random() * 100 + 1); // Generate random number
console.log(randomNum); // For debugging

const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 1) {
    alert("Please enter a number greater than 1");
  } else if (guess > 100) {
    alert("Please enter a number less than 100");
  } else {
    prevGuess.push(guess);
    displayGuess(guess);
    if (numGuess === 11) {
      displayMessage(`Game Over! Random number was ${randomNum}`);
      endGame();
    } else {
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNum) {
    displayMessage("You guessed it right!");
    endGame();
  } else if (guess < randomNum) {
    displayMessage("Number is too low");
  } else if (guess > randomNum) {
    displayMessage("Number is too high");
  }
}

function displayGuess(guess) {
  numGuess++; // Increment guesses first
  userInput.value = "";
  guessSlot.innerHTML += `${guess}, `;
  remaining.innerHTML = `${10 - numGuess}`; // Update remaining guesses
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector("#newGame");
  newGameButton.addEventListener("click", function () {
    randomNum = parseInt(Math.random() * 100 + 1); // Reset random number
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = "";
    remaining.innerHTML = `10`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
    lowOrHi.innerHTML = ""; // Clear messages
    playGame = true;
  });
}
