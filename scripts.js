console.log("Game started!");
function getComputerChoice() {
  const computerInput = Math.floor(Math.random() * 10);
  return computerInput;
}
function getStringChoice() {
  const computerNumber = getComputerChoice();
  let computerString;
  if (computerNumber <= 3) {
    computerString = "rock";
  } else if (computerNumber > 3 && computerNumber <= 6) {
    computerString = "paper";
  } else if (computerNumber > 6) {
    computerString = "scissor";
  }
  return computerString;
}

function getHumanChoice(
  promptMessage = "choose between rock, paper or scissor"
) {
  const lowerChoice = prompt(promptMessage).toLowerCase();
  if (
    lowerChoice === "rock" ||
    lowerChoice === "paper" ||
    lowerChoice === "scissor"
  ) {
    return lowerChoice;
  } else {
    getHumanChoice("Invalid input: choose from scissor, paper or rock");
  }
}

let humanScore = 0;
let computerScore = 0;
let counter = 5;

function playRound(computerChoice, hummanChoice) {
  computerChoice = getStringChoice();
  hummanChoice = getHumanChoice();
  console.log(`computer choice: ${computerChoice}`);
  console.log(`Player choice: ${hummanChoice}\n\n`);
  if (computerChoice === hummanChoice) {
    console.log("Deduce\n");
  } else if (eatenBy()) {
    console.log("Player Win \n");
    humanScore += 1;
  } else {
    console.log("Computer win \n");
    computerScore += 1;
  }
  console.log("Score Board");
  console.log(`Computer score ${computerScore}`);
  console.log(`Human score ${humanScore}\n\n`);
  console.log(`remaining attenmpt: ${counter}`);

  function eatenBy() {
    if (computerChoice === "rock" && hummanChoice === "paper") {
      return true;
    } else if (computerChoice === "rock" && hummanChoice === "scissor") {
      return false;
    } else if (computerChoice === "paper" && hummanChoice === "scissor") {
      return true;
    } else if (computerChoice === "paper" && hummanChoice === "rock") {
      return false;
    } else if (computerChoice === "scissor" && hummanChoice === "rock") {
      return true;
    } else if (computerChoice === "scissor" && hummanChoice === "paper") {
      return false;
    }
  }
}

function playGame() {
  for (let i = 0; i < 5; i++) {
    counter--;
    playRound();
  }
  if (humanScore > computerScore) {
    console.log("Player WON ");
  } else if (computerScore > humanScore) {
    console.log("Computer WON");
  } else {
    console.log("Game ended Draw");
  }
}
/* Starting games */
playGame();
