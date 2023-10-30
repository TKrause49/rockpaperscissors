function getComputerChoice() {
    let choice = Math.floor(Math.random()*3+1);

    if (choice === 1){
        return 'rock';
    } else if (choice === 2){
        return 'paper';
    } else if (choice === 3){
        return 'scissors';
    }
};

const results = document.querySelector('#results');
const computerPoint = document.querySelector('#computerPoint');
const playerPoint = document.querySelector('#playerPoint');
let playerScore = 0;
let computerScore = 0;

function playRound(player, computer) {
    // let player = playerChoice.toLowerCase();

    player === 'rock' && computer === 'paper' ? results.textContent = 'You lose!' :
    player === 'rock' && computer === 'scissors' ? results.textContent = 'You WIN!' :
    player === 'scissors' && computer === 'rock' ? results.textContent = 'You lose!' :
    player === 'scissors' && computer === 'paper' ? results.textContent = 'You WIN!' :
    player === 'paper' && computer === 'scissors' ? results.textContent = 'You lose!' :
    player === 'paper' && computer === 'rock' ? results.textContent = 'You WIN!' :
    player === computer ? results.textContent = 'Draw!' : 
    results.textContent = 'Please choose a valid weapon.';

    results.textContent === 'You WIN!' ? playerScore++ : 
    results.textContent === 'You lose!' ? computerScore++ : null;

    computerPoint.textContent = computerScore;
    playerPoint.textContent = playerScore;

    if (playerScore === 5) {
        results.textContent = 'YOU WON THE GAME!';
        playerScore = 0;
        computerScore = 0;
    } else if (computerScore === 5) {
        results.textContent = 'You have lost this game.';
        playerScore = 0;
        computerScore = 0;
    };

};

// function game() {
//     let counter = 0;
//     for (let i = 0; i < 5; i++) {
//         let result = playRound(prompt('Choose your weapon:'), getComputerChoice());
//         console.log(result);
//         result === 'You WIN!' ? counter++ : result === 'Draw!' ? i-- : null;
//     }
//     console.log(counter > 2 ? 'You are the WINNER!' : 'You are the LOSER!');
// };

// game();


const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

rock.addEventListener('click', () => {playRound('rock', getComputerChoice())});
paper.addEventListener('click', () => {playRound('paper', getComputerChoice())});
scissors.addEventListener('click', () => {playRound('scissors', getComputerChoice())});

