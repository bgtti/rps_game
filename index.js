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