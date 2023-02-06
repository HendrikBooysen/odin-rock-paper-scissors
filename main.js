let answer = (prompt("Please pick Rock / Paper / Scissors: "));
let playerScore = 0;
let computerScore = 0;

//Function to random return choice in array to mimic Computer playing
function getComputerChoice(){

    let choice = ["Rock","Paper","Scissors"];
    let randomNumber = Math.floor(Math.random() * choice.length);

    return(choice[randomNumber]);
}

//Function to mimic single round of play and give text out-put of results
function playRound(playerSelection, computerSelection){

   if(playerSelection == computerSelection){
   
   return("It's a Draw.!");
}else if(playerSelection == "Rock" && computerSelection == "Scissors"){
    return("Computer lose! Rock beats Scissors.!");
}else if(playerSelection == "Scissors" && computerSelection == "Paper"){
    return("Computer lose! Scissors beats Paper.!");
}else if(playerSelection == "Paper" && computerSelection == "Rock"){
    return("Computer lose! Paper beats Rock.!");
}else if(computerSelection == "Rock" && playerSelection == "Scissors"){
    return("You Lose! Rock beats Scissors.!");
}else if(computerSelection == "Scissors" && playerSelection == "Paper"){
    return("You lose! Scissors beats Paper.!");
}else if(computerSelection == "Paper" && playerSelection == "Rock"){
    return("You lose! Paper beats Rock.!");
}
}

function game(){

    for(let i = 0; i < 5; i++){
        console.log(playRound(answer, getComputerChoice()));
    }  
}


  