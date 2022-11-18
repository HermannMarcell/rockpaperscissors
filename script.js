function getComputerChoice() {
    let choice = Math.random() * 100;
    if (choice <= 33) {
        return ("Rock");
    }
    else if (choice <= 66) {
        return ("Paper")
    }
    else {
        return("Scissors")
    };
    
}