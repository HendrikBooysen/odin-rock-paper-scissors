let playerScore = 0;
let computerScore = 0;
let drawScore = 0;

// Ref  for  DOM body 
const body = document.querySelector('body');

//Create button DIV and class for DIV
const div1 = document.createElement('div');
div1.classList.add('buttonDiv');
body.appendChild(div1);

//Create DIV to display each round results
const div2 = document.createElement('div');
div2.classList.add('resultDiv');
body.insertBefore(div2, div1);

//Create DIV to display Player Score
const div3 = document.createElement('div');
div3.classList.add('playerScoreDiv');
body.appendChild(div3);


// Create button for Rock 
const buttonRock = document.createElement('button');
buttonRock.classList.add('buttonRock');
buttonRock.textContent = 'Rock';
div1.appendChild(buttonRock);

// Create button for Paper 
const buttonPaper = document.createElement('button');
buttonPaper.classList.add('buttonPaper');
buttonPaper.textContent = 'Paper';
div1.appendChild(buttonPaper);


// Create button for Scissors 
const buttonScissors = document.createElement('button');
buttonScissors.classList.add('buttonScissors');
buttonScissors.textContent = 'Scissors';
div1.appendChild(buttonScissors);

//Create DIV to display Computer Score
const div4 = document.createElement('div');
div4.classList.add('playerScoreDiv');
body.appendChild(div4);




//div4.textContent = computerScore;

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
/*
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

winner();
*/