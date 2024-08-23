let humanScore = 0;
let computerScore = 0;
const runningScore = document.querySelector("#score");
runningScore.innerHTML = `<p>plyer ${humanScore} - computer ${computerScore}</p>`
const finalScore = document.querySelector("#final-score");
const rock = document.querySelector("#rock");
rock.addEventListener("click", () => playRound("rock"));
const paper = document.querySelector("#paper");
paper.addEventListener("click", () => playRound("paper"));
const scissor = document.querySelector("#scissor");
scissor.addEventListener("click", () => playRound("scissor"));
const startBtn = document.querySelector("#start")
startBtn.addEventListener('click', () => resetGame() )

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
  if (humanScore === 5){
    logMessage(finalScore, "😂🎉You Win")
    return
  }else if (computerScore === 5){
    logMessage(finalScore, "😚You Lose")
    return;
  }

  computerChoice = getStringChoice();
  if (computerChoice === hummanChoice) {
    console.log("Deduce\n");
  } else if (eatenBy(hummanChoice, computerChoice)) {
    console.log("Player Win \n");
    humanScore += 1;
  } else {
    console.log("Computer win \n");
    computerScore += 1;
  }
  runningScore.innerHTML = `<p> player ${humanScore} computer ${computerScore} </p>`;
}
function eatenBy(hummanChoice, computerChoice) {
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

function logMessage(elem, message) {
  elem.innerHTML = `<p>${message}</p>`;
}

function resetGame(){
  humanScore = 0;
  computerScore = 0;
  runningScore.innerHTML = `<p>plyer ${humanScore} - computer ${computerScore}</p>`
  finalScore.textContent = '';
}