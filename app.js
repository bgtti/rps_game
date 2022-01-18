//Computer buttons
const cRock = document.querySelector('#cRock') 
const cPaper = document.querySelector('#cPaper') 
const cScissors = document.querySelector('#cScissors') 

//Player buttons
const pRock = document.querySelector('#pRock') 
const pPaper = document.querySelector('#pPaper') 
const pScissors = document.querySelector('#pScissors') 

//Event Listeners
pRock.addEventListener('click', playerSelection);
pPaper.addEventListener('click', playerSelection);
pScissors.addEventListener('click', playerSelection);

function choice(){

}

function playerSelection(choice){
    console.log("P: " + choice);
    return choice;
}


//Winner
let winMessage = document.querySelector('#winner') 

//Score and Round Counters
let roundCount = 1;
let userScore = 0;
let computerScore = 0;

const round = document.querySelector('#rounds') 
round.textContent = roundCount;

const scoreP = document.querySelector('#scoreP');
scoreP.textContent = userScore;

const scoreC = document.querySelector('#scoreC');
scoreP.textContent = computerScore;



let rps = ["Rock", "Paper", "Scissor"];


function computerPlay(){
    let playNr = Math.floor(Math.random()*rps.length);
    let playE = rps[playNr];
    return playE
    }





function winner(){
    let computerSelection = computerPlay();
    let userSelection = playerSelection();
    let whoWins = "uh-oh";
    if (computerSelection === userSelection){
        whoWins = "Draw - play again";
    } else if (computerSelection === rps[0] && userSelection === rps[2]){
        whoWins = "You lose, Rock beats Scissors";
        computerScore ++;
    } else if (computerSelection === rps[0] && userSelection === rps[1]){
        whoWins = "You win, Paper beats Rock";
    } else if (computerSelection === rps[2] && userSelection === rps[1]){
        whoWins = "You lose, Scissors beats Paper";
        computerScore ++;
    } else if (computerSelection === rps[2] && userSelection === rps[0]){
        whoWins = "You win, Rock beats Scissors";
    } else if (computerSelection === rps[1] && userSelection === rps[0]){
        whoWins = "You lose, Paper beats Rock";
        computerScore ++;
    } else if (computerSelection === rps[1] && userSelection === rps[2]){
        whoWins = "You win, Scissors beats Paper";
    } else {
        console.log("something went wrong")
    }
    winMessage.textContent = whoWins;
    console.log(whoWins);
}

winner();