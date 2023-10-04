// console.log('Hello World');

let computer = '';

function getComputerChoice() {
let choice = Math.floor(Math.random()*3+1);

if (choice === 1){
    computer = 'Rock';
} else if (choice === 2){
    computer = 'Paper';
} else if (choice === 3){
    computer = 'Scissors';
}};

getComputerChoice();
console.log(computer);
