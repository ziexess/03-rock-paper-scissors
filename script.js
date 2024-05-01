function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    return randomNumber;
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
        playRound(0, computerChoice);});
    paperButton.addEventListener("click", () => {
        computerChoice = getComputerChoice();
        playRound(1, computerChoice);});
    scissorsButton.addEventListener("click", () => {
        computerChoice = getComputerChoice();
        playRound(2, computerChoice);});

        
    function playRound(humanChoice, computerChoice) {
        let userPick;
        let computerPick
        switch (humanChoice) {
            case 0:
                userPick = 'ROCK';
                break;
            case 1:
                userPick = 'PAPER';
                break;
            case 2:
                userPick = 'SCISSORS';
                break;
        }
        switch (computerChoice) {
            case 0:
                computerPick = 'ROCK';
                break;
            case 1:
                computerPick = 'PAPER';
                break;
            case 2:
                computerPick = 'SCISSORS';
                break;
        }
        if (checkResult() !== 5) {
            if ((humanChoice - computerChoice) + 3 % 3 === 1) {
                playerScore += 1;
                result.textContent = "Winner! " + userPick + " beats " + computerPick;
            }
            else if ((humanChoice - computerChoice) + 3 % 3 !== 1) {
                if (humanChoice === computerChoice) {
                    result.textContent = "It's a Tie! Try AGAIN.";
                    return;
                }
                computerScore += 1;
                result.textContent = "Loser! " + computerPick + " beats " + userPick;
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