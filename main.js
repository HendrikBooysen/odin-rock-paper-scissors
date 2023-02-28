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

//Create DIV to display Player Score
const div3 = document.createElement('div');
div3.classList.add('playerScoreDiv');

body.appendChild(div3);

//Create DIV to display Computer Score
const div4 = document.createElement('div');
div4.classList.add('playerScoreDiv');

body.appendChild(div4);

//Create DIV to display Player Score
const div5 = document.createElement('div');
div5.classList.add('winnerDiv');
body.appendChild(div5);


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
    (playRound("Rock", getComputerChoice()));
    return winner();
    
} );
// Mimics a round of play player VS computer Paper button
buttonPaper.addEventListener('click', () =>{
    winner();
    return(playRound("Paper", getComputerChoice()));
} );
// Mimics a round of play player VS computer Scissors button 
buttonScissors.addEventListener('click', () =>{
    winner();
    return(playRound("Scissors", getComputerChoice()));
} );




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
    div2.textContent = "It's a Draw.!";
}else if(playerSelection == "Rock" && computerSelection == "Scissors"){
    playerScore++;
    div2.textContent = "Computer lose! Rock beats Scissors.!";
    
    
}else if(playerSelection == "Scissors" && computerSelection == "Paper"){
    playerScore++;
    div2.textContent = "Computer lose! Scissors beats Paper.!";
    
    
}else if(playerSelection == "Paper" && computerSelection == "Rock"){
    playerScore++;
    div2.textContent = "Computer lose! Paper beats Rock.!";
    
    
}else if(computerSelection == "Rock" && playerSelection == "Scissors"){
    computerScore++;
    div2.textContent = "You Lose! Rock beats Scissors.!";
    
    
}else if(computerSelection == "Scissors" && playerSelection == "Paper"){
    computerScore++;
    div2.textContent = "You lose! Scissors beats Paper.!";
      
}else if(computerSelection == "Paper" && playerSelection == "Rock"){
    computerScore++;
    div2.textContent = "You lose! Paper beats Rock.!";
    
    
}

div3.textContent = playerScore;
div4.textContent = computerScore;
}





//Function & IF statements to determine the winner
function winner(){

    if(playerScore == 5){
       div5.textContent = " You are the Winner!!!";
    }else if(computerScore == 5){
       div5.textContent = " The computer is the Winner!!!";  
    }
}



