'use strict'
//Player buttons
const pRock = document.querySelector('#pRock'); 
const pPaper = document.querySelector('#pPaper'); 
const pScissors = document.querySelector('#pScissors'); 

const allPBtns = [pRock, pPaper, pScissors]

//Computer buttons
const cRock = document.querySelector('#cRock'); 
const cPaper = document.querySelector('#cPaper'); 
const cScissors = document.querySelector('#cScissors'); 

const allCBtns = [cRock, cPaper, cScissors]

//Round winner and score display
const roundWinnerDisplay = document.querySelector('#winner'); 
const scoreDiplayP = document.querySelector('#scoreP'); 
const scoreDiplayC = document.querySelector('#scoreC');

// Modal
const modal = document.querySelector('#modalContainer');
const gameOverMessage = document.querySelector('#gameOverMessage') 
const playBtn = document.querySelector('.play-btn');

// Information Modal
const infoModal = document.querySelector('#info-modal');

//Where information modal adisplays
const infoModalD1 = document.querySelector('#subH');
const infoModalD2 = document.querySelector('#how-to-play');

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
    let whoWins = "";
    let msg = "";
    const playerSelection = btnPressed.currentTarget.myParam;
    const computerSelection = computerPlay();

    const indexCSelection = rps.indexOf(computerSelection); //index of computer button
    clickedBtn(allCBtns[indexCSelection]); //styles clicked computer button

    if (computerSelection === playerSelection){
        whoWins = "draw";
        msg = "Draw: no points awarded.";
    } else if (computerSelection === rps[0] && playerSelection === rps[2]){
        whoWins = "computer";
        msg = "You lose: rock beats scissors.";
        
    } else if (computerSelection === rps[0] && playerSelection === rps[1]){
        whoWins = "player";
        msg = "You win: paper beats rock.";
        
    } else if (computerSelection === rps[2] && playerSelection === rps[1]){
        whoWins = "computer";
        msg = "You lose: scissors beats paper.";
        
    } else if (computerSelection === rps[2] && playerSelection === rps[0]){
        whoWins = "player";
        msg = "You win: rock beats scissors.";
        
    } else if (computerSelection === rps[1] && playerSelection === rps[0]){
        whoWins = "computer";
        msg = "You lose: paper beats rock.";
        
    } else if (computerSelection === rps[1] && playerSelection === rps[2]){
        whoWins = "player";
        msg = "You win: scissors beats paper.";
        
    } else {
        whoWins = "invalid";
        msg = "Invalid: behaviour not accepted.";
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
    let gameWinner = "Contratulations, you won!";
    let gameLoser = "You lost!"
    let displayMsg ="";
    if(scoreP === 5 ){
        displayMsg = gameWinner;
    } else {
        displayMsg = gameLoser;
    }
    
    gameOverMessage.textContent = displayMsg;
    modal.classList.toggle("modalDisplayNone");
    
}



// Reset game and play again

function resetGame(){
    scoreP = 0;
    scoreC = 0;
    scoreDiplayP.textContent = scoreP;
    scoreDiplayC.textContent = scoreC;
    roundWinnerDisplay.textContent = "";
    modal.classList.toggle("modalDisplayNone");
}


//Event listeners that listen to btn pressed
pRock.addEventListener('click', playRound, false);
pRock.myParam = rps[0];
pPaper.addEventListener('click', playRound, false);
pPaper.myParam = rps[1];
pScissors.addEventListener('click', playRound, false);
pScissors.myParam = rps[2];

playBtn.addEventListener('click', resetGame, false);

//Styling clicked button
for (let i = 0; i < allPBtns.length; i++){
    allPBtns[i].addEventListener('click', function(){
        clickedBtn(allPBtns[i]);
    })
}

function clickedBtn (btn){
    btn.classList.toggle('click-btn');
    btn.classList.toggle('hover-btn');
    setTimeout(function(){btn.classList.toggle('click-btn');}, 200);
    setTimeout(function(){btn.classList.toggle('hover-btn');}, 200);

}

//Information modal appearing
infoModalD1.addEventListener('mouseover', infoModalDisplay, false);
infoModalD2.addEventListener('mouseover', infoModalDisplay, false);
infoModalD1.addEventListener('mouseout', infoModalDisplay, false);
infoModalD2.addEventListener('mouseout', infoModalDisplay, false);
infoModalD1.addEventListener('click', infoModalDisplay, false);
infoModalD2.addEventListener('click', infoModalDisplay, false);

function infoModalDisplay(){
    infoModal.classList.toggle('modalDisplayNone');
}