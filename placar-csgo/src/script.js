import { createScore, increment, checkWinner, maxPoints } from './game.js';

const score = createScore();

const scoreTSpan = document.getElementById('scoreT');
const scoreCTSpan = document.getElementById('scoreCT');
const btnIncT = document.getElementById('incT');
const btnIncCT = document.getElementById('incCT');

function updateDisplay() {
  scoreTSpan.textContent = score.teamT;
  scoreCTSpan.textContent = score.teamCT;
}

function disableButtons() {
  btnIncT.disabled = true;
  btnIncCT.disabled = true;
  btnIncT.style.cursor = 'not-allowed';
  btnIncCT.style.cursor = 'not-allowed';
}

function handleClick(team) {
  increment(score, team);
  updateDisplay();

  const winner = checkWinner(score);
  if (winner) {
    alert(`${winner} venceram!`);
    disableButtons();
  }
}

btnIncT.addEventListener('click', () => handleClick('T'));
btnIncCT.addEventListener('click', () => handleClick('CT'));

updateDisplay();