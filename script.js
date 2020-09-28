const button = document.querySelectorAll("button");
button.forEach( item => item.addEventListener('click', function() {playRound(item.dataset.key)}));
let outcome = document.querySelector('#outcome');
let compChoice = document.querySelector('#comp-choice');
let playerScore = document.querySelector('#player-score');
let compScore = document.querySelector('#comp-score');
let playerPoints = 0;
let compPoints = 0; 

function playRound(playerSelection) {
    let computerSelection = computerPlay();
    console.log(playerSelection);
    console.log(computerSelection);
    if (playerSelection === computerSelection) {
        outcome.innerHTML = "It's a tie!";
        compChoice.innerHTML = "Computer chose " + computerSelection;
    }
    if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            playerPoints++;
            outcome.innerHTML = "You win this round!";
            compChoice.innerHTML = "Computer chose " + computerSelection + ".";
        } else if (computerSelection === "paper") {
            compPoints++;
            outcome.innerHTML = "You lose!";
            compChoice.innerHTML = "Computer chose " + computerSelection + ".";
        }
    }
    if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            playerPoints++;
            outcome.innerHTML = "You win this round!";
            compChoice.innerHTML = "Computer chose " + computerSelection + ".";
        } else if (computerSelection === "scissors") {
            compPoints++;
            outcome.innerHTML = "You lose!";
            compChoice.innerHTML = "Computer chose " + computerSelection + ".";
        }
    }
    if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            playerPoints++;
            outcome.innerHTML = "You win this round!";
            compChoice.innerHTML = "Computer chose " + computerSelection + ".";
        } else if (computerSelection === "rock") {
            compPoints++;
            outcome.innerHTML = "You lose!";
            compChoice.innerHTML = "Computer chose " + computerSelection + ".";
        }
    }
    playerScore.innerHTML = playerPoints;
    compScore.innerHTML = compPoints;
}

function computerPlay() {
    let compChoice = ["rock", "paper", "scissors"];
    return compChoice[Math.floor(Math.random() * 3)];
}

/*
//create a function that allows the computer to randomly choose between rock, paper, and scissors
function computerPlay() {
    let compChoice = ["rock", "paper", "scissors"];
    return compChoice[Math.floor(Math.random() * 3)];
}

//create a function that simulates a round of RPS
function round(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!"
    }
    if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            return "You win this round!"
        } else if (computerSelection === "paper") {
            return "You lose!"
        }
    }
    if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return "You win this round!"
        } else if (computerSelection === "scissors") {
            return "You lose!"
        }
    }
    if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            return "You win this round!"
        } else if (computerSelection === "rock") {
            return "You lose!"
        }
    }
}

//create a function that simulates 5 rounds
function game() {
    let playerPoints = 0;
    let computerPoints = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Choose your weapon!").toLowerCase();
        const computer = computerPlay();
        const result = round(playerSelection, computer);
        console.log("Computer chose " + computer);
        console.log("You chose " + playerSelection);
        if (result == "You win this round!") {
            playerPoints++;
            console.log("You win!")
        } else if (result == "You lose!") {
            computerPoints++;
            console.log("You lose!")
        } else {
            console.log("Tie.")
        }
    }
    if (playerPoints > computerPoints) {
        console.log("You won the war!")
    } else if (computerPoints > playerPoints) {
        console.log("You lost the war!")
    } else {
        console.log("Nobody wins.")
    }
}
*/