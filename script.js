function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 100);
    let randomPick;
    if (randomNumber < 33 && randomNumber >= 0) {randomPick = 'rock'}
    else if (randomNumber < 66 && randomNumber >= 33) {randomPick = 'paper'}
    else if (randomNumber <= 99 && randomNumber >= 66) {randomPick = 'scissors'}
    return randomPick;
}
    const rockButton = document.querySelector(".rock");
    const paperButton = document.querySelector(".paper");
    const scissorsButton = document.querySelector(".scissors");

    const result = document.querySelector("#display");
    const score = document.querySelector("#score");
    const finalResult = document.querySelector("#finalResult");

    

function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    let computerChoice;

    rockButton.addEventListener("click", () => {
        computerChoice = getComputerChoice();
        playRound('rock', computerChoice);});
    paperButton.addEventListener("click", () => {
        computerChoice = getComputerChoice();
        playRound('paper', computerChoice);});
    scissorsButton.addEventListener("click", () => {
        computerChoice = getComputerChoice();
        playRound('scissors', computerChoice);});

        
    function playRound(humanChoice, computerChoice) {
        if (checkResult() !== 5) {
            if (humanChoice == 'rock' && computerChoice == 'paper') {
                computerScore += 1;
                result.textContent = "Loser! " + computerChoice + " beats " + humanChoice;
            }
            else if (humanChoice == 'rock' && computerChoice == 'scissors') {
                playerScore += 1;
                result.textContent = "Winner! " + humanChoice + " beats " + computerChoice;
            }
            else if (humanChoice == 'paper' && computerChoice == 'scissors') {
                computerScore += 1;
                result.textContent = "Loser! " + computerChoice + " beats " + humanChoice;
            }
            else if (humanChoice == 'paper' && computerChoice == 'rock') {
                playerScore += 1;
                result.textContent = "Winner! " + humanChoice + " beats " + computerChoice;
            }
            else if (humanChoice == 'scissors' && computerChoice == 'paper') {
                playerScore += 1;
                result.textContent = "Winner! " + humanChoice + " beats " + computerChoice;
            }
            else if (humanChoice == 'scissors' && computerChoice == 'rock') {
                computerScore += 1;
                result.textContent = "Loser! " + computerChoice + " beats " + humanChoice;
            }
            else if (humanChoice == computerChoice) {
                result.textContent = "It's a Tie! Try AGAIN.";
            }
            score.textContent = `Your score: ` + playerScore +  ` Computer score: ` + computerScore;
            checkResult();
            return;
    }}
    function checkResult() {
        if (computerScore === 5) {
        finalResult.textContent = "THE COMPUTER WON!";
        return 5;
    }
        else if (playerScore === 5) {
        finalResult.textContent = "YOU WON!";
        return 5;
        }
    }
}

playGame();