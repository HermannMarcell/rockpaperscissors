function getComputerChoice() {
    let choice = Math.random() * 100;
    if (choice <= 33) {
        return ("rock");
    }
    else if (choice <= 66) {
        return ("paper")
    }
    else {
        return("scissors")
    };
    
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "scissors"
    || playerSelection === "paper" && computerSelection === "rock"
    || playerSelection === "scissors" && computerSelection === "paper") {
        return("win")
    }
    else if (playerSelection === computerSelection) {
        return("tie")
    }
    else return("lose")
  };
   
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection))