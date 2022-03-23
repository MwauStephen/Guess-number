`use strict`;

const btnAgain = document.querySelector(".again");
const btnCheck = document.querySelector(".check");
const displayNumber = document.querySelector(".number");
const displayGuess = document.querySelector(".guess");
const displayMessage = document.querySelector(".message");
const ScoreLabel = document.querySelector(".label-score");
const valueScore = document.querySelector(".score");
const highScoreLabel = document.querySelector(".highscore");
const bodyEl = document.querySelector("body");

let secretNumber = Math.trunc(Math.random() * 20 + 1);
console.log(secretNumber);
let score = 20;
let highscore = 0;

const messageDisplay = function (message) {
  displayMessage.textContent = message;
};

btnCheck.addEventListener("click", function () {
  const guess = +displayGuess.value;
  //   1.check for empty value
  if (!guess) {
    messageDisplay("No number!🤦‍♂️");
  }
  //   check if number is correct
  else if (secretNumber === guess) {
    if (score > highscore) {
      highscore = score;
      highScoreLabel.textContent = highscore;
    }
    bodyEl.style.background = "#ff4500";
    displayNumber.style.width = "30rem";
    displayMessage.textContent = "Correct answer 🏆🏆";

    displayNumber.textContent = guess;
  }
  //   check if number is incorrect
  else if (secretNumber !== guess) {
    if (score > 0) {
      messageDisplay(
        guess > secretNumber
          ? `You guess is too high ⬆`
          : `Your guess is to low ⬇`
      );
      score--;

      valueScore.textContent = score;
    }
  }
});

// reset the game using the again button
