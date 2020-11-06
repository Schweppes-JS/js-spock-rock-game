import { startConfetti, stopConfetti, removeConfetti } from './confetti.js';

const playerScoreEl = document.querySelector('[data-player-score]');
const playerChoiceEl = document.querySelector('[data-player-choice]');
const computerScoreEl = document.querySelector('[data-computer-score]');
const computerChoiceEl = document.querySelector('[data-computer-choice]');
const resultText = document.querySelector('[data-result-text]');

const playerRock = document.querySelector('[data-player-rock]');
const playerPaper = document.querySelector('[data-player-paper]');
const playerScissors = document.querySelector('[data-player-scissors]');
const playerLizard = document.querySelector('[data-player-Lizard]');
const playerSpock = document.querySelector('[data-player-spock]');

const computerRock = document.querySelector('[data-computer-rock]');
const computerPaper = document.querySelector('[data-computer-paper]');
const computerScissors = document.querySelector('[data-computer-scissors]');
const computerLizard = document.querySelector('[data-computer-Lizard]');
const computerSpock = document.querySelector('[data-computer-spock]');

const allGameIcons = document.querySelectorAll('[data-icon]');
const reset = document.querySelector('[data-reset]');

const choices = {
   rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },
   paper: { name: 'Paper', defeats: ['rock', 'spock'] },
   scissors: { name: 'Scissors', defeats: ['paper', 'spock'] },
   lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
   spock: { name: 'Spock', defeats: ['scissors', 'rock'] },
};

let playerScoreNumber = 0;
let computerScoreNumber = 0;
let computerChoice = '';

// Reset all 'selected' icons
function resetSelected() {
   allGameIcons.forEach(icon => icon.classList.remove('selected'));
   stopConfetti();
   removeConfetti();
}

// Reset Score & playerChoice/computerChoice
function resetAll() {
   playerScoreNumber = 0;
   computerScoreNumber = 0;
   playerScoreEl.textContent = playerScoreNumber;
   computerScoreEl.textContent = computerScoreNumber;
   playerChoiceEl.textContent = '';
   computerChoiceEl.textContent = '';
   resultText.textContent = 'Get your choice';
   resetSelected();
}
window.resetAll = resetAll;

// Random computer choice
function computerRandomChoice() {
   const computerChoiceNumber = Math.random();
   if (computerChoiceNumber < 0.2) {
      computerChoice = 'rock';
   }
   else if (computerChoiceNumber <= 0.4) {
      computerChoice = 'paper';
   }
   else if (computerChoiceNumber <= 0.6) {
      computerChoice = 'scissors';
   }
   else if (computerChoiceNumber <= 0.8) {
      computerChoice = 'lizard';
   }
   else {
      computerChoice = 'spock';
   }
}

// Add 'selected' styling & computerChoice
function displayComputerChoice(e) {
   switch (computerChoice) {
      case 'rock':
         computerRock.classList.add('selected');
         computerChoiceEl.innerText = ' --- Rock';
         break;
      case 'paper':
         computerPaper.classList.add('selected');
         computerChoiceEl.innerText = ' --- Paper';
         break;
      case 'scissors':
         computerScissors.classList.add('selected');
         computerChoiceEl.innerText = ' --- Scissors';
         break;
      case 'lizard':
         computerLizard.classList.add('selected');
         computerChoiceEl.innerText = ' --- Lizard';
         break;
      case 'spock':
         computerSpock.classList.add('selected');
         computerChoiceEl.innerText = ' --- Spock';
         break;
      default:
         break;
   }
}

// Check result, increase scores, update ressultText
function updateccore(playerChoice) {
   if (playerChoice === computerChoice) {
      resultText.textContent = "It's a tie.";
   } else {
      const choice = choices[playerChoice];
      if (choice.defeats.indexOf(computerChoice) > -1) {
         startConfetti();
         resultText.textContent = 'You Won!';
         playerScoreNumber++;
         playerScoreEl.textContent = playerScoreNumber;
      } else {
         resultText.textContent = 'You Lost!';
         computerScoreNumber++;
         computerScoreEl.textContent = computerScoreNumber;
      }
   }
}

// Call functions to process turn
function checkReult(playerChoice) {
   resetSelected();
   computerRandomChoice();
   displayComputerChoice();
   updateccore(playerChoice);
}

// Passing player selection value and styling icons
function select(e) {
   checkReult(e.target.title);
   // Add 'selected' tyling & playerChoice
   switch (e.target.title) {
      case 'rock':
         playerRock.classList.add('selected');
         playerChoiceEl.innerText = ' --- Rock';
         break;
      case 'paper':
         playerPaper.classList.add('selected');
         playerChoiceEl.innerText = ' --- Paper';
         break;
      case 'scissors':
         playerScissors.classList.add('selected');
         playerChoiceEl.innerText = ' --- Scissors';
         break;
      case 'lizard':
         playerLizard.classList.add('selected');
         playerChoiceEl.innerText = ' --- Lizard';
         break;
      case 'spock':
         playerSpock.classList.add('selected');
         playerChoiceEl.innerText = ' --- Spock';
         break;
      default:
         break;
   }
}
window.select = select;

// On startup, set initial values
resetAll();

reset.addEventListener('click', resetAll);
allGameIcons.forEach(icon => icon.addEventListener('click', select));