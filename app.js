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


/// ORIGINAL from console

let rps = ["rock", "paper", "scissors"];

function computerPlay(){
    let playNr = Math.floor(Math.random()*rps.length);
    let playE = rps[playNr];
    return playE
    }

function playRound(playerSelection, computerSelection){
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
    let roundWinner = [whoWins, msg];
    return roundWinner
    
}

function game(){
    let rounds = 0;
    let scoreP = 0;
    let scoreC = 0; 
    for (let i = rounds; i < 5; i++){
        const userInput = prompt("Select: Rock, Paper, or Scissors?");
        const playerSelection = userInput.toLowerCase();
        const computerSelection = computerPlay();
        let winner = playRound(playerSelection, computerSelection);
        rounds ++;
        if(winner[0]==="computer"){
            scoreC ++;
        } else if (winner[0]==="player"){
            scoreP++;
        }
        console.log(`${winner[1]} C: ${scoreC}, P: ${scoreP}`); 
    }
}
game();

(scoreP < 5 || scoreC < 5)

//Event Listeners
function playerClick(btnPressed){
    console.log(btnPressed.currentTarget.myParam); 
    return btnPressed.currentTarget.myParam
} 

pRock.addEventListener('click', playerClick, false);
pRock.myParam = rps[0];
pPaper.addEventListener('click', playerClick, false);
pPaper.myParam = rps[1];
pScissors.addEventListener('click', playerClick, false);
pScissors.myParam = rps[2];

scoreP = 0;
    scoreC = 0;