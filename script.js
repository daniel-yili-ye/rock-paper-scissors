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

let playerScore = 0
let computerScore = 0
const divComputer = document.querySelector("span[id='computer-score']")
const divPlayer = document.querySelector("span[id='player-score']")
divComputer.innerText = computerScore
divPlayer.innerText = playerScore

function play(e) {
    const divStatus = document.querySelector("div[id='status']")
    if (e.target.id === "") return
    let result = playRound(e.target.id, computerPlay())
    divStatus.innerText = result
    if (result.includes("Win")) {
        playerScore += 1
        divPlayer.innerText = playerScore
    }
    else if (result.includes("Lose")) {
        computerScore += 1
        divComputer.innerText = computerScore
    }
    if (playerScore == 5 || computerScore == 5) {
        let congrats = (playerScore == 5) ? "You won!" : "Computer won!"
        setTimeout(() => {
            alert(`${congrats}`)
            playerScore = 0
            computerScore = 0
            divPlayer.innerText = playerScore
            divComputer.innerText = computerScore
            divStatus.innerText = ""
        },1)
    }
}
window.addEventListener('click', play)



