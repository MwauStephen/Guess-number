`use strict`;

const btnAgain = document.querySelector(".again");
const btnCheck = document.querySelector(".check");
const displayNumber = document.querySelector(".number");
const displayGuess = document.querySelector(".guess");
const displayMessage = document.querySelector(".message");
const ScoreLabel = document.querySelector(".label-score");
const labelScore = document.querySelector(".score");
const highScoreLabel = document.querySelector(".label-highscore");

let guessNumber = Math.trunc(Math.random() * 20 + 1);
console.log(guessNumber);
let score = 20;
let highscore = 0;

const messageDisplay = function (message) {
  displayMessage.textContent = message;
};

btnCheck.addEventListener("click", function () {
  const guess = +displayGuess.value;
  if (guessNumber === guess) {
    displayNumber.textContent = guess;
  }
});
