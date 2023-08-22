const choices = [ 'rock', 'paper', 'scissors' ];

function getComputerChoice() {
    
    const random = Math.floor(Math.random() * choices.length);
    return choices[random]
}

function calculateScore(stringResult) {
        
    if (stringResult.startsWith("Win",4)) {
        return playerScore + 1; 
    } else if (stringResult.startsWith("Lose",4)) {
        return computerScore + 1; 
    }   
}

function playRound(playerSelection, computerSelection) {
    let pSelection = playerSelection.toLowerCase();
    let cSelection = computerSelection;

    if ( pSelection == 'rock' && computerSelection == 'paper' ) {
        return 'You Lose! Paper beats Rock'
    }
    else if ( pSelection == 'rock' && computerSelection == 'scissors' ) {
        return 'You Win! Rock beats Scissors'
    }

    else if ( pSelection == 'paper' && computerSelection == 'rock' ) {
        return 'You Win! Paper beats Rock'
    }
    else if ( pSelection == 'paper' && computerSelection == 'scissors' ) {
        return 'You Lose! Scissors beats Paper'
    }

    else if ( pSelection == 'scissors' && computerSelection == 'paper' ) {
        return 'You Win! Scissors beats Paper'
    }
    else if ( pSelection == 'scissors' && computerSelection == 'rock' ) {
        return 'You Lose! Rock beats Scissors'
    }

    else {
        return "It's a draw!"
    }
}


function game() {
    const MAX_ROUND = 5;
    let playerScore = 0, computerScore = 0;

    for (let i = 0 ; i < MAX_ROUND ; i++ ) {        

        let playInput = window.prompt(`Game ${i+1}: Enter Rock or Scissor or Paper`);
        const cSelection = getComputerChoice();

        console.group(`Game ${i+1}`);
        console.log(`You selected ${playInput}, Computer selected ${cSelection}`);
        console.log(playRound(playInput, cSelection));

        const stringResult = playRound(playInput, cSelection);
        if (stringResult.startsWith("Win",4)) {
            playerScore = playerScore + 1; 
        } else if (stringResult.startsWith("Lose",4)) {
            computerScore = computerScore + 1; 
        }        
        console.log(`Player:${playerScore}, Computer:${computerScore}`);
        
    }
    const winner = playerScore > computerScore ? "Player Wins" :
    computerScore > playerScore ? "Computer Wins" : 
    "It's a Draw!"
    console.log(winner);

}