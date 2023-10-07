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

function playRound(playerChoice, computer) {
    let player = playerChoice.toLowerCase();
    // console.log(player);
    // console.log(computer);

    return player === 'rock' && computer === 'paper' ? 'You lose!' :
    player === 'rock' && computer === 'scissors' ? 'You WIN!' :
    player === 'scissors' && computer === 'rock' ? 'You lose!' :
    player === 'scissors' && computer === 'paper' ? 'You WIN!' :
    player === 'paper' && computer === 'scissors' ? 'You lose!' :
    player === 'paper' && computer === 'rock' ? 'You WIN!' :
    player === computer ? 'Draw!' : 'Please choose a valid weapon.';
}

console.log(playRound(prompt('Choose your weapon:'), getComputerChoice()));