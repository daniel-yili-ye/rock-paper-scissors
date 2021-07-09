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
        return `You ${status}! 📃 beats 🗿`
    }
    else if ((playerSelection == "rock" && computerSelection == "scissors") || (playerSelection == "scissors" && computerSelection == "rock")) {
        let status = "Win"
        if (playerSelection == "scissors" && computerSelection == "rock") {
            status = "Lose"
        }
        return `You ${status}! 🗿 beats ✂️`
    }
    else if ((playerSelection == "paper" && computerSelection == "scissors") || (playerSelection == "scissors" && computerSelection == "paper")) {
        let status = "Win"
        if (playerSelection == "paper" && computerSelection == "scissors") {
            status = "Lose"
        }
        return `You ${status}! ✂️ beats 📃`
    }
    else {
        return "It's a 👔!"
    }
}

let playerScore = 0
let computerScore = 0
const spanComputer = document.querySelector("span[id='computer-score']")
const spanPlayer = document.querySelector("span[id='player-score']")
spanComputer.textContent = computerScore
spanPlayer.textContent = playerScore

function play(e) {
    if (e.target.id != "rock" && e.target.id != "paper" && e.target.id != "scissors") return
    let result = playRound(e.target.id, computerPlay())
    let node = document.createElement("div")
    
    if (result.includes("Win")) {
        playerScore += 1
        spanPlayer.textContent = playerScore
        node.classList.add('win')
    }
    else if (result.includes("Lose")) {
        computerScore += 1
        spanComputer.textContent = computerScore
        node.classList.add('lose')
    }
    else {
        node.classList.add('tie')
    }
    
    let text = document.createTextNode(result)
    node.appendChild(text)
    document.querySelector("div[id='messages']").prepend(node)
    
    if (playerScore == 5 || computerScore == 5) {
        let congrats = (playerScore == 5) ? "You won!" : "Computer won!"
        setTimeout(() => {
            alert(`${congrats}`)
            if (playerScore == 5) {
                confetti.start()
                setTimeout(() => {confetti.stop()}, 1000)
            }
            playerScore = 0
            computerScore = 0
            spanPlayer.textContent = playerScore
            spanComputer.textContent = computerScore
            document.querySelector("div[id='messages']").innerHTML = ""
        },1)
    }
}
window.addEventListener('click', play)



