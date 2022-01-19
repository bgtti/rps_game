//Player buttons
const pRock = document.querySelector('#pRock') 
const pPaper = document.querySelector('#pPaper') 
const pScissors = document.querySelector('#pScissors') 

//Computer buttons
const cRock = document.querySelector('#cRock') 
const cPaper = document.querySelector('#cPaper') 
const cScissors = document.querySelector('#cScissors') 

//Round winner and score display
const roundWinnerDisplay = document.querySelector('#winner') 
const scoreDiplayP = document.querySelector('#scoreP') 
const scoreDiplayC = document.querySelector('#scoreC')

// Modal
const gameOverMessage = document.querySelector('#gameOverMessage')

//Answer array

let rps = ["rock", "paper", "scissors"];

//Computer play

function computerPlay(){
    let playNr = Math.floor(Math.random()*rps.length);
    let playE = rps[playNr];
    return playE
    }

//Game Score
let scoreP = 0;
let scoreC = 0;

// Round results

function playRound(btnPressed){
    const playerSelection = btnPressed.currentTarget.myParam;
    const computerSelection = computerPlay();
    if (computerSelection === playerSelection){
        whoWins = "draw";
        msg = "Draw.";
    } else if (computerSelection === rps[0] && playerSelection === rps[2]){
        whoWins = "computer";
        msg = "You lose, Rock beats Scissors.";
        
    } else if (computerSelection === rps[0] && playerSelection === rps[1]){
        whoWins = "player";
        msg = "You win, Paper beats Rock.";
        
    } else if (computerSelection === rps[2] && playerSelection === rps[1]){
        whoWins = "computer";
        msg = "You lose, Scissors beats Paper.";
        
    } else if (computerSelection === rps[2] && playerSelection === rps[0]){
        whoWins = "player";
        msg = "You win, Rock beats Scissors.";
        
    } else if (computerSelection === rps[1] && playerSelection === rps[0]){
        whoWins = "computer";
        msg = "You lose, Paper beats Rock.";
        
    } else if (computerSelection === rps[1] && playerSelection === rps[2]){
        whoWins = "player";
        msg = "You win, Scissors beats Paper.";
        
    } else {
        whoWins = "invalid";
        msg = "Invalid: you may only input 'Rock', 'Paper', or 'Scissors'.";
    }
    roundWinnerDisplay.textContent = msg;
    let roundWinner = [whoWins, msg];

    console.log(roundWinner)
    if(roundWinner[0]==="computer"){
        scoreC++;
    } else if (roundWinner[0]==="player"){
        scoreP++;
    }
    scoreDiplayP.textContent = scoreP;
    scoreDiplayC.textContent = scoreC;

    setTimeout(function(){checkIfGameOver();}, 0);   
}

//Check if game is over

async function checkIfGameOver(){
    if (scoreP === 5 || scoreC === 5){
        setTimeout(function(){gameEnd();}, 100); 
    } 
}

//Announce Winner


function gameEnd(){
    gameWinner = "Contratulations, you won!";
    gameLoser = "You lost!"
    if(scoreP === 5 ){
        displayMsg = gameWinner;
    } else {
        displayMsg = gameLoser;
    }
    gameResult(displayMsg)
}
let gameResult = function(msg){
    alert(msg)
}

//Event Listeners
pRock.addEventListener('click', playRound, false);
pRock.myParam = rps[0];
pPaper.addEventListener('click', playRound, false);
pPaper.myParam = rps[1];
pScissors.addEventListener('click', playRound, false);
pScissors.myParam = rps[2];