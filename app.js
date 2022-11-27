const choices = [ 'rock', 'paper', 'scissors' ];

function getComputerChoice() {
    
    const random = Math.floor(Math.random() * choices.length);
    return choices[random]
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