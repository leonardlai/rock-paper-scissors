//document.getElementsByTagName("button").style.fontSize = "6vw";
const choices = [ 'rock', 'paper', 'scissors' ];

function printResult() {
    
}

function getBothChoice() {
    const btns = document.querySelectorAll('button');
    let playerScore = 0 , computerScore = 0; 

    btns.forEach((btn) => {
        btn.addEventListener('click', () => {
            const playerChoice = btn.id;
            const cSelection = getComputerChoice();
            const stringResult = playRound(playerChoice, cSelection);

            console.log(`You selected ${playerChoice}, Computer selected ${cSelection}`);
            console.log(stringResult);
            if (stringResult.startsWith("Win",4)) {
                playerScore = playerScore + 1; 
            } else if (stringResult.startsWith("Lose",4)) {
                computerScore = computerScore + 1; 
            }        
            console.log(`Player:${playerScore}, Computer:${computerScore}`);

            // your JavaScript file
            const container = document.querySelector('#result');

            const content = document.createElement('div');
            content.classList.add('content');
            content.textContent = `You selected ${playerChoice}, Computer selected ${cSelection}. \n ${stringResult} \nPlayer:${playerScore}, Computer:${computerScore}`;

            container.appendChild(content);

            if (playerScore === 5) {
                const winner = document.createElement('h2');
                winner.classList.add('content');
                winner.textContent = `Winner is player`;

                container.appendChild(winner);


            }
        });
    });
}

function getComputerChoice() {
    
    const random = Math.floor(Math.random() * choices.length);
    return choices[random]
}

function playRound(playerSelection, computerSelection) {
    let pSelection = playerSelection;

    if ( pSelection == 'rock' && computerSelection == 'paper' ) {
        return 'You Lose! Paper beats Rock'
    }
    else if ( pSelection == 'rock' && computerSelection == 'scissors' ) {
        return 'You Win! Rock beats Scissor'
    }

    else if ( pSelection == 'paper' && computerSelection == 'rock' ) {
        return 'You Win! Paper beats Rock'
    }
    else if ( pSelection == 'paper' && computerSelection == 'scissors' ) {
        return 'You Lose! Scissor beats Paper'
    }

    else if ( pSelection == 'scissor' && computerSelection == 'paper' ) {
        return 'You Win! Scissor beats Paper'
    }
    else if ( pSelection == 'scissor' && computerSelection == 'rock' ) {
        return 'You Lose! Rock beats Scissor'
    }

    else {
        return "It's a draw!"
    }
}


function game() {

    let playerScore = 0, computerScore = 0;     
    
    const stringResult =  getBothChoice();
    while(stringResult) {
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


