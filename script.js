// console.log('Hello World');

function getComputerChoice() {
let choice = Math.floor(Math.random()*3+1);

if (choice === 1){
   return 'rock';
} else if (choice === 2){
    return 'paper';
} else if (choice === 3){
    return 'scissors';
}};

// getComputerChoice();

// let playerChoice= '';

function playRound(playerChoice, computerChoice) {
    // playerChoice = prompt('Choose your weapon:');
    playerChoice.toLowerCase;
    // computerChoice = getComputerChoice();

    return playerChoice = 'rock' && computerChoice === 'paper' ? 'You lose!' :
    playerChoice = 'rock' && computerChoice === 'scissors' ? 'You WIN!' :
    playerChoice = 'scissors' && computerChoice === 'rock' ? 'You lose!' :
    playerChoice = 'scissors' && computerChoice === 'paper' ? 'You WIN!' :
    playerChoice = 'paper' && computerChoice === 'scissors' ? 'You lose!' :
    playerChoice = 'paper' && computerChoice === 'rock' ? 'You WIN!' :
    playerChoice = computerChoice ? 'Draw!' : 'error';


}

console.log(playRound(prompt('Choose your weapon:'), getComputerChoice()));