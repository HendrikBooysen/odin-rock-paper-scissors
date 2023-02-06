


//Function to random return choice in array to mimic Computer playing
function getComputerChoice(){

    let choice = ["Rock","Paper","Scissors"];
    let radomNumber = Math.floor(Math.random() * choice.length);

    return(choice[radomNumber]);
}

//Function to mimic single round of play and give text out-put of results
function playRound(playerSelection, computerSelection){

   if(playerSelection == computerSelection){
   
   console.log("It's a Draw.!");
}else if(playerSelection == "Rock" && computerSelection == "Scissors"){
    console.log("Computer lose! Rock beats Scissors.!")
}else if(playerSelection == "Scissors" && computerSelection == "Paper"){
    console.log("Computer lose! Scissors beats Paper.!");
}else if(playerSelection == "Paper" && computerSelection == "Rock"){
    console.log("Computer lose! Paper beats Rock.!");
}else if(computerSelection == "Rock" && playerSelection == "Scissors"){
    console.log("You Lose! Rock beats Scissors.!")
}else if(computerSelection == "Scissors" && playerSelection == "Paper"){
    console.log("You lose! Scissors beats Paper.!");
}else if(computerSelection == "Paper" && playerSelection == "Rock"){
    console.log("You lose! Paper beats Rock.!");
}
}