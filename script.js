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

const choices = {
   rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },
   paper: { name: 'Paper', defeats: ['rock', 'spock'] },
   scissors: { name: 'Scissors', defeats: ['paper', 'spock'] },
   lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
   spock: { name: 'Spock', defeats: ['scissors', 'rock'] },
};

// Reset all 'selected' icons
function resetSelected() {
   allGameIcons.forEach(icon => icon.classList.remove('selected'));
}

// Passing player selection value and styling icons
function select(e) {
   resetSelected();
   // Add 'selected' tyling & playerChoice
   switch (e.target.title) {
      case 'Rock':
         e.srcElement.classList.add('selected');
         playerChoiceEl.innerText = ' --- Rock';
         break;
      case 'Paper':
         e.srcElement.classList.add('selected');
         playerChoiceEl.innerText = ' --- Paper';
         break;
      case 'Scissors':
         e.srcElement.classList.add('selected');
         playerChoiceEl.innerText = ' --- Scissors';
         break;
      case 'Lizard':
         e.srcElement.classList.add('selected');
         playerChoiceEl.innerText = ' --- Lizard';
         break;
      case 'Spock':
         e.srcElement.classList.add('selected');
         playerChoiceEl.innerText = ' --- Spock';
         break;
      default:
         break;
   }
}

allGameIcons.forEach(icon => icon.addEventListener('click', select));