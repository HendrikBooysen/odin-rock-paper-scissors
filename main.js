let playerScore = 0;
let computerScore = 0;
let drawScore = 0;

//Function to random return choice in array to mimic Computer playing
function getComputerChoice(){

    let choice = ["Rock","Paper","Scissors"];
    let randomNumber = Math.floor(Math.random() * choice.length);

    return(choice[randomNumber]);
}
// Rock Beats Scissors , Scissors beats Paper , Paper beats Rock.
//Function to mimic single round of play and give text out-put of results
function playRound(playerSelection, computerSelection){

    if(playerSelection == computerSelection){
   drawScore++;
   return("It's a Draw.!");
}else if(playerSelection == "Rock" && computerSelection == "Scissors"){
    playerScore++;
    return("Computer lose! Rock beats Scissors.!");
}else if(playerSelection == "Scissors" && computerSelection == "Paper"){
    playerScore++;
    return("Computer lose! Scissors beats Paper.!");
}else if(playerSelection == "Paper" && computerSelection == "Rock"){
    playerScore++;
    return("Computer lose! Paper beats Rock.!");
}else if(computerSelection == "Rock" && playerSelection == "Scissors"){
    computerScore++;
    return("You Lose! Rock beats Scissors.!");
}else if(computerSelection == "Scissors" && playerSelection == "Paper"){
    computerScore++;
    return("You lose! Scissors beats Paper.!");
}else if(computerSelection == "Paper" && playerSelection == "Rock"){
    computerScore++;
    return("You lose! Paper beats Rock.!");
}
}
// Function with a FOR LOOP to mimic the 5 rounds of a game 
function game(){

    for(let i = 1; i <= 5; i++){
    let answer = (prompt("Please pick Rock / Paper / Scissors: "));
    console.log(playRound(answer, getComputerChoice())); 
    }  
}
//Function & IF statements to determine the winner
function winner(){

    if(playerScore + drawScore == computerScore + drawScore){
        alert('Damm.. it was a draw !!!');
}else if(playerScore + drawScore > computerScore + drawScore){
        alert('You are the Winner!!')
}else if(computerScore + drawScore > playerScore + drawScore){
        alert('The Computer Won!!')
}
}

game();

console.log('This is your Score:' + playerScore);
console.log('This is the Computer Score:' + computerScore);
winner();
