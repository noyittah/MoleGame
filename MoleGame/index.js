var holes = document.querySelectorAll('.hole');
var scoreBoard = document.querySelector('.score');
var moles = document.querySelectorAll('.mole');
let lastHole;
let timeUp = false;
let score = 0;
var hole,time;

//pop up moles function
function moleUp() {
   time = randomTime(400, 1000);
   hole = randomHole(holes);
   hole.classList.add('up');
   setTimeout(() => {
     hole.classList.remove('up');
     if (timeUp===false) moleUp();
   }, time);
  }

moles.forEach(mole => mole.addEventListener('click', scoreUp));  //foreach mole in moles click- update the score

  //create random time
function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

  //create random holes
function randomHole(holes) {
  var index = Math.floor(Math.random() * holes.length);
  hole = holes[index];
  if (hole === lastHole) {
    return randomHole(holes);
  }
  lastHole = hole;
  return hole;
}

//start button-init game function
function startGame() {
  score = 0;
  scoreBoard.textContent = 0;
  timeUp = false;
  moleUp();
  setTimeout(() => timeUp = true, 1000000);
}

//update score function
function scoreUp(e) {
  if(!e.isTrusted) return; // boolean function that check if there is a cheater
  score++;
  this.classList.remove('up');
  scoreBoard.textContent = score;
  if(score>10){
    startGame();
  }  
}
