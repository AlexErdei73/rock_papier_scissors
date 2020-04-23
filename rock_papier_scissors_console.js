//Return randomly 'Rock','Papier' or 'Scissors' 
//as you can expect from a computer player
function computerPlay() {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0: return 'Rock';
        break;  
        case 1: return 'Papier';
        break;
        case 2: return 'Scissors';
        break;
    }
}

//Play one round of the game
function playRound(playerSelection, computerSelection){
    if (typeof(playerSelection)!='string') { //Deal with user input cancelation
        return 'ERROR. Input canceled!';
    } else {
        playerSelection = playerSelection.toLowerCase();
        computerSelection = computerSelection.toLowerCase();
        switch (playerSelection) {
            case 'rock': switch (computerSelection) {
                case 'rock': return 'It is a tie! Rock cannot beat rock.';
                break;
                case 'papier': return 'You lose! Papier beats rock.';
                break;
                case 'scissors': return 'You win! Rock beats scissors.';
                break; 
            };
            break;
            case 'papier': switch (computerSelection) {
                case 'rock': return 'You win! Papier beats rock.';
                break;
                case 'papier': return 'It is a tie! Papier cannot beat papier.';
                break;
                case 'scissors': return 'You lose! Scissors beat papier.';
                break; 
            };
            break;
            case 'scissors': switch (computerSelection) {
                case 'rock': return 'You lose! Rock beats scissors.';
                break;
                case 'papier': return 'You win! Scissors beat papier.';
                break;
                case 'scissors': return 'It is a tie! Scissors cannot beat scissors.';
                break; 
            };
            break;
            default:{
                return 'ERROR Illegal input!';
            }
        }
    }
}

//play 5 rounds of the game 
function game() {
    let gamerSelection;
    let gameMessage;
    let computerScore = 0;
    let gamerScore = 0;
    for (let i = 1; i < 6; i++) {
        gamerSelection = prompt('Rock, Papier or Scissors? Choose now!','Rock');
        gameMessage = playRound(gamerSelection, computerPlay());
        console.log(gameMessage);
        if (gameMessage.indexOf('win') != -1) { gamerScore++; } 
            else if (gameMessage.indexOf('lose') != -1) { computerScore++; }
    }
    console.log('you vs. computer');
    console.log(gamerScore + ':' + computerScore);
}
            
//main program
console.log('Rock, papier, scissors 5 round game against the computer.');
game();
