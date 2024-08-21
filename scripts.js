let isMatchEnd = false;
let humanScore = 0;
let computerScore = 0;
const runningScore = document.querySelector("#score");
const finalScore = document.querySelector("#final-score");

const rock = document.querySelector("#rock");
rock.addEventListener("click", () => playRound("rock"));
const paper = document.querySelector("#paper");
paper.addEventListener("click", () => playRound("paper"));
const scissor = document.querySelector("#scissor");
scissor.addEventListener("click", () => playRound("scissor"));

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

function playRound(hummanChoice, computerChoice) {
    if (humanScore === 5 || computerScore === 5){
        isMatchEnd = true;
        return
    }
  computerChoice = getStringChoice();
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
  console.log(`Human score ${humanScore}`);
  runningScore.textContent = `player score ${humanScore} - computer score ${computerScore}`;

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
console.log(isMatchEnd)
if (isMatchEnd){
    if (humanScore > computerScore){
        logMessage(finalScore, "You win the game")
    }else if (humanScore < computerScore){
        logMessage(finalScore, "You lose the game")
    }else{
        logMessage(finalScore, "match ended in tie")
    }
}

function logMessage(elem, message) {
  elem.textContent = `<p>${message}</p>`;
}
