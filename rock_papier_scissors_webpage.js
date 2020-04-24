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
    }
}

//play the game, when a button is clicked 
function playGame(e) {
    let gamerSelection;
    let gameMessage;
    let textOutput = ['','Player    vs. Computer','',''];
      
    gamerSelection = e.target.textContent; 
    gameMessage = playRound(gamerSelection, computerPlay());
        
    if (gameMessage.indexOf('win') != -1) { gamerScore++; } 
        else if (gameMessage.indexOf('lose') != -1) { computerScore++; }

    textOutput[0] = gameMessage;
    textOutput[2] = gamerScore + ':' + computerScore;
    textOutput[3] = '';
    write(textOutput);

    if ((gamerScore < 5)&&(computerScore < 5)) return;

    if (gamerScore > computerScore) {
        textOutput[3] = 'Congratulations! You\'re the winner!';
    }  else {
        textOutput[3] = 'Sorry! You\'re the loser!';
    }
    write(textOutput);
    computerScore = 0;
    gamerScore = 0; 
}

//Creates elements with given textcontent and returns them in an array
function createElements(nameOfElement, attrOfParent, textOfElements) {
    const container = document.querySelector(attrOfParent);
    let elements = [];

    for (let i = 0; i < textOfElements.length; i++) {
       elements[i] = document.createElement(nameOfElement);
       elements[i].classList.add(textOfElements[i]);
       elements[i].textContent = textOfElements[i];
       container.appendChild(elements[i]); 
    }

    return elements;
}

//Adds the func event handler for the event to all the elements of the elements array 
function addEventHandler(event, func, elements){
    elements.forEach(function(element) {
        element.addEventListener(event, func);
    });
}

//Writes the output
function write(output) {
    let para;

    for (let i = 0; i < output.length; i++) {
        para = document.querySelector(`.line${i}`);
        para.textContent = output[i];
    }
}

//main program
let computerScore = 0;
let gamerScore = 0;

createElements('p', '.output', ['line0','line1','line2','line3']);
write(['','','','']); //Clears the output

addEventHandler('click', playGame, createElements('button', '.input', ['Rock','Papier','Scissors']));

