//alert("Let's play a game of Rock Paper and Scissors. The game goes on for 5 rounds.")
//game();

//Gets "rock", "paper" or "scissors" randomly
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

//logic for one round of a game, hierarchy of choices
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

//game itself, repeats playRound() 5 times, shows and keeps track of
//the outcomes and alerts the final result
/*
  function game() {
    let winCount = 0;
    let loseCount = 0;
    for (let i=0; i<5; i++){
        let computerSelection = getComputerChoice();
        let rawInput = prompt("Please input your choice:");
        input = rawInput.toLowerCase();
        let outcome = playRound(input, computerSelection);
        if (outcome === "win") {
            winCount++;
        }
        else if (outcome === "lose") {
            loseCount++;
        }
        alert(outcome);
    }
    if (winCount < loseCount){
        alert("The computer won, sorry!")
    }
    else if (winCount == loseCount){
        alert("Wow, it's a tie");
    }
    else alert("You won! Nice!");
  }
*/
