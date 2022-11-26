const choices = [ 'rock', 'paper', 'scissors' ];

function getComputerChoice() {
    
    const random = Math.floor(Math.random() * choices.length);
    return choices[random]
}

function playRound(playerSelection, computerSelection) {
    
}