function computerPlay() {
    const options = ["rock", "paper", "scissors"]
    return options[Math.floor(Math.random()*options.length)]
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if ((playerSelection == "rock" && computerSelection == "paper") || (playerSelection == "paper" && computerSelection == "rock")) {
        let status = "Win"
        if (playerSelection == "rock" && computerSelection == "paper") {
            status = "Lose"
        }
        return `You ${status}! Paper beats Rock`
    }
    else if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "scissors" && computerSelection == "rock")) {
        let status = "Win"
        if (playerSelection == "scissors" && computerSelection == "rock") {
            status = "Lose"
        }
        return `You ${status}! Rock beats Scissors`
    }
    else if ((playerSelection == "paper" && computerSelection == "scissors") || (playerSelection == "scissors" && computerSelection == "paper")) {
        let status = "Win"
        if (playerSelection == "paper" && computerSelection == "scissors") {
            status = "Lose"
        }
        return `You ${status}! Scissors beats Paper`
    }
    else {
        return "It's a tie!"
    }
}