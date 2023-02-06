


//Function to random return choice in array to mimic Computer playing
function getComputerChoice(){

    let choice = ["Rock","Paper","Scissors"];
    let radomNumber = Math.floor(Math.random() * choice.length);

    console.log(choice[radomNumber]);
};
