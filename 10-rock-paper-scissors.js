let result = document.querySelector('.js-result');
let moves = document.querySelector('.js-moves');
const score = document.querySelector('.js-score');


const scoreline = JSON.parse(localStorage.getItem('scoreline')) || {
  win: 0,
  loss: 0,
  tie: 0
};
function playGame(playermove) {
  const randomNum = Math.random();
  let computerMove = '';
  if (randomNum < 1 / 3 ) {
    computerMove = 'rock'
  } else if (randomNum >= 1 / 3 && randomNum < 2 / 3) {
    computerMove = 'paper'
  } else {
    computerMove = 'scissors'
  }
  if (playermove === 'rock'){
    if (computerMove === 'rock') {
      result.innerHTML = 'Tie';
      scoreline.tie++;
    }
    else if (computerMove === 'paper') {
      result.innerHTML = 'You lose';
      scoreline.loss++;
    }
    else {
      result.innerHTML = 'You win';
      scoreline.win++;
    }
  }
  if (playermove === 'paper'){
    if (computerMove === 'rock') {
      result.innerHTML = 'You win';
      scoreline.win++;
    }
    else if (computerMove === 'paper') {
      result.innerHTML = 'Tie';
      scoreline.tie++;
    }
    else {
      result.innerHTML = 'You lose';
      scoreline.loss++;
    }
  }
  if (playermove === 'scissors'){
    if (computerMove === 'rock') {
      result.innerHTML = 'You lose';
      scoreline.loss++;
    }
    else if (computerMove === 'paper') {
      result.innerHTML = 'You win';
      scoreline.win++;
    }
    else {
      result.innerHTML = 'Tie';
      scoreline.tie++;
    }
  }
  moves.innerHTML = `
  You <img class="move-icon" src="${playermove}-emoji.png"> <img class="move-icon" src="${computerMove}-emoji.png"> Computer
  `;
  score.innerHTML = `Wins: ${scoreline.win}, Losses: ${scoreline.loss}, Ties: ${scoreline.tie}`
  localStorage.setItem('scoreline',JSON.stringify(scoreline));
};