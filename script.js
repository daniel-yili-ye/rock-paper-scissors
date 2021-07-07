function computerPlay() {
    const options = ["rock", "paper", "scissors"]
    return options[Math.floor(Math.random()*options.length)]
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    computerSelection = computerSelection.toLowerCase()
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

function play(e) {
    const div = document.querySelector("div")
    if (e.target.id === "") return
    div.innerText = playRound(e.target.id, computerPlay())
}

function game() {
    let playerScore = 0
    let computerScore = 0
    while (computerScore < 5 && playerScore < 5) {
        window.addEventListener('click', play)
        // let selection = prompt("Please enter rock, paper, or scissors");
        let result = playRound(selection, computerPlay())
        console.log(result)
        if (result.includes("Win")) {
            playerScore += 1
            console.log(playerScore)
        }
        else if (result.includes("Lose")) {
            computerScore += 1
            console.log(computerScore)
        }
    }
    if (playerScore == 5) {
        return "You won!"
    }
    else {
        return "Computer won!"
    }
}