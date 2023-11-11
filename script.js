const playerElement = document.querySelector("#player"); 
const computerElement = document.querySelector("#computer");
const resultElement = document.querySelector("#result");
const choiceBtns = document.querySelectorAll(".choiceBtn");

let playerChoice;
let computerChoice;
let gameResult;

choiceBtns.forEach(button => button.addEventListener("click", () => {
  playerChoice = button.textContent.toLowerCase(); // Convert to lowercase
  computerTurn();
  playerElement.textContent = "You chose " + playerChoice;
  computerElement.textContent = "The computer chose " + computerChoice;
  resultElement.textContent = checkWinner();
}));

function computerTurn() {
  const randNum = Math.floor(Math.random() * 3) + 1;
  switch (randNum) {
    case 1:
      computerChoice = "rock";
      break;
    case 2:
      computerChoice = "paper";
      break;
    case 3:
      computerChoice = "scissors";
      break;
  }
}

function checkWinner() {
  if (playerChoice === computerChoice) {
    return "It's a tie!";
  }
  if (playerChoice === "rock") {
    return computerChoice === "paper" ? "You Lose!" : "You Win!";
  }
  if (playerChoice === "paper") {
    return computerChoice === "scissors" ? "You Lose!" : "You Win!";
  }
  if (playerChoice === "scissors") {
    return computerChoice === "rock" ? "You Lose!" : "You Win!";
  }
}
