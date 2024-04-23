function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 100);
    let randomPick;
    if (randomNumber < 33 && randomNumber >= 0) {randomPick = 'rock'}
    else if (randomNumber < 66 && randomNumber >= 33) {randomPick = 'paper'}
    else if (randomNumber <= 99 && randomNumber >= 66) {randomPick = 'scissors'}
    return randomPick;
}

function getHumanChoice() {
    let userPick = prompt('rock,paper or scissors?');
    if (userPick.toLowerCase() !== 'rock' && userPick.toLowerCase() !== 'paper' && userPick.toLowerCase() !== 'scissors') {
        console.log("Please enter a valid input! (rock, paper or scissors)");
    }
    return userPick.toLowerCase();
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i=0; i<5; i++) {    
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    function playRound(humanChoice, computerChoice) {
        if (humanChoice == 'rock' && computerChoice == 'paper') {
            computerScore += 1;
            console.log("Loser! " + computerChoice + " beats " + humanChoice);
        }
        else if (humanChoice == 'rock' && computerChoice == 'scissors') {
            playerScore += 1;
            console.log("Winner! " + humanChoice + " beats " + computerChoice);
        }
        else if (humanChoice == 'paper' && computerChoice == 'scissors') {
            computerScore += 1;
            console.log("Loser! " + computerChoice + " beats " + humanChoice);
        }
        else if (humanChoice == 'paper' && computerChoice == 'rock') {
            playerScore += 1;
            console.log("Winner! " + humanChoice + " beats " + computerChoice);
        }
        else if (humanChoice == 'scissors' && computerChoice == 'paper') {
            playerScore += 1;
            console.log("Winner! " + humanChoice + " beats " + computerChoice);
        }
        else if (humanChoice == 'scissors' && computerChoice == 'rock') {
            computerScore += 1;
            console.log("Loser! " + computerChoice + " beats " + humanChoice);
        }
        else if (humanChoice == computerChoice) {
            console.log("It's a Tie! Try AGAIN.");
        }
        return console.log("Your score:" + playerScore + " Computer score:" + computerScore)
    }
    if (computerScore > playerScore) {
        console.log("THE COMPUTER WON!")
    }
    else if (computerScore < playerScore) {
        console.log("YOU WON!")
    }
    else {
        console.log("It's a TIE")
    }
}

playGame();