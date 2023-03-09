let playerScore = 0;
let computerScore = 0;
//let drawScore = 0;



// Ref  for  DOM body 
const body = document.querySelector('body');

//Create buttons DIV 
const div1 = document.createElement('div');
div1.classList.add('buttonDiv');
body.appendChild(div1);

//Create DIV to display each round results
const div2 = document.createElement('div');
div2.classList.add('resultDiv');
body.insertBefore(div2, div1);

// Create Header for Winner of each round DIV
const header4 = document.createElement('h1');
header4.classList.add('header2');
header4.textContent = "Per Round Winner:";
body.insertBefore(header4, div2);


//Create DIV to display Player Score
const div3 = document.createElement('div');
div3.classList.add('playerScoreDiv');
body.appendChild(div3);

// Create Header for player scoreDIV
const header1 = document.createElement('h1');
header1.classList.add('header1');
header1.textContent = "Player Score";
body.insertBefore(header1, div3);

//Create DIV to display Computer Score
const div4 = document.createElement('div');
div4.classList.add('computerScoreDiv');
body.appendChild(div4);

// Create Header for computer score DIV
const header2 = document.createElement('h1');
header2.classList.add('header2');
header2.textContent = "Computer Score";
body.insertBefore(header2, div4);

//Create DIV to display Winner
const div5 = document.createElement('div');
div5.classList.add('winnerDiv');
body.appendChild(div5);

// Create Header for Winner DIV
const header3 = document.createElement('h1');
header3.classList.add('header3');
header3.textContent = "Over all Winner is:";
body.insertBefore(header3, div5);

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

// Mimics a round of play player VS computer Rock button 
buttonRock.addEventListener('click', () =>{
    playRound("Rock", getComputerChoice());
    winner();
    
} );
// Mimics a round of play player VS computer Paper button
buttonPaper.addEventListener('click', () =>{
    playRound("Paper", getComputerChoice());
    winner();
} );
// Mimics a round of play player VS computer Scissors button 
buttonScissors.addEventListener('click', () =>{
    playRound("Scissors", getComputerChoice());
    winner();
} );

//Function & IF statements to determine the winner
function winner(){

    if(playerScore == 5){
       div5.textContent = " You are the Winner!!!";
    }else if(computerScore == 5){
       div5.textContent = " The computer is the Winner!!!";  
    }
}

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
    div2.textContent = "It's a Draw.!";
}else if(playerSelection == "Rock" && computerSelection == "Scissors"){
    playerScore++;
    div3.textContent = playerScore;
    div2.textContent = "Computer lose! Rock beats Scissors.!" ;
    
}else if(playerSelection == "Scissors" && computerSelection == "Paper"){
    playerScore++;
    div3.textContent = playerScore;
    div2.textContent = "Computer lose! Scissors beats Paper.!";
    
}else if(playerSelection == "Paper" && computerSelection == "Rock"){
    playerScore++;
    div3.textContent = playerScore;
    div2.textContent = "Computer lose! Paper beats Rock.!";
    
}else if(computerSelection == "Rock" && playerSelection == "Scissors"){
    computerScore++;
    div4.textContent = computerScore;
    div2.textContent = "You Lose! Rock beats Scissors.!";
    
}else if(computerSelection == "Scissors" && playerSelection == "Paper"){
    computerScore++;
    div4.textContent = computerScore;
    div2.textContent = "You lose! Scissors beats Paper.!"; 

}else if(computerSelection == "Paper" && playerSelection == "Rock"){
    computerScore++;
    div4.textContent = computerScore;
    div2.textContent = "You lose! Paper beats Rock.!";
    
}


};











