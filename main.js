//Global Variables
var setRangeBtn = document.querySelector('#update-button');
var rangeMin = document.querySelector('#minRange');
var rangeMax = document.querySelector('#maxRange');
var randomNum = Math.floor((Math.random() * 100) + 1);
var upperRange = document.querySelector('#highRange');
var lowerRange = document.querySelector('#lowRange')
var person1Guess = document.querySelector('#guess1');
var person2Guess = document.querySelector('#guess2');
var person1Name = document.querySelector('#player1-name');
var person2Name = document.querySelector('#player2-name');
var submitGuessBtn = document.querySelector('#submit-guess-button');
var rangeMinMsg = document.querySelector('#range-error-message1');
var rangeMaxMsg = document.querySelector('#range-error-message2');
var name1Msg = document.querySelector('#name-error-message1')
var name2Msg = document.querySelector('#name-error-message2')
var guess1Msg = document.querySelector('#guess-error-message1')
var guess2Msg = document.querySelector('#guess-error-message2')
var guess1Text = document.querySelector('#player1-guess')
var guess2Text = document.querySelector('#player2-guess')
var name1Text = document.querySelector('.challenger1-name')
var name2Text = document.querySelector('.challenger2-name')
var blankMsg = 'Field cannot be blank';
var guessMsg = 'Enter a number within the range';
var rangeValidator = 0;
var submitGuessValidator = 0;

function errorMsgAppear(inputField, errorField, errorMsg) {
  inputField.classList.add('text-input-error');
  errorField.classList.remove('error-message-hidden');
  errorField.innerText = errorMsg;
}

function errorMsgDisappear(inputField, errorField) {
  inputField.classList.remove('text-input-error');
  errorField.classList.add('error-message-hidden');
}

// Setting the Range
setRangeBtn.addEventListener('click', checkRangeInputs)


function checkRangeInputs(e) {
  event.preventDefault();
  rangeValidator = 0;
  errorMsgDisappear(rangeMin, rangeMinMsg);
  errorMsgDisappear(rangeMax, rangeMaxMsg);
  checkMinRange();
  checkMaxRange();
  validateRange();
  }

function checkMinRange() {
  if (rangeMin.value === '') {
    errorMsgAppear(rangeMin, rangeMinMsg, blankMsg);
  } else {rangeValidator++}
}

function checkMaxRange() {
  if (rangeMax.value === '') {
    errorMsgAppear(rangeMax, rangeMaxMsg, blankMsg);
  } else {rangeValidator++}
} 

function validateRange() {
  if (rangeMin.value >= rangeMax.value) {
      errorMsgAppear(rangeMin, rangeMinMsg, 'Min must be less than max');
  } else {
    rangeValidator++;
    updateRange();
  }
}  

function updateRange() {
  if (rangeValidator >= 3) {
    lowerRange.innerHTML = rangeMin.value;
    upperRange.innerHTML = rangeMax.value; 
    randomNum = Math.floor(Math.random() * (parseInt(rangeMax.value) - parseInt(rangeMin.value) + 1)) + parseInt(rangeMin.value);
  }
}   

// Submitting Names and Guesses
submitGuessBtn.addEventListener('click', checkGuessInputs)

function checkName1(e) {
  event.preventDefault();
  if (person1Name.value === '') {
    errorMsgAppear(person1Name, name1Msg, blankMsg);
  } else {submitGuessValidator++}
}

function checkName2(e) {
  event.preventDefault();
  if (person2Name.value === '') {
    errorMsgAppear(person2Name, name2Msg, blankMsg);
  } else {submitGuessValidator++}
}

function checkGuess1(e) {
  event.preventDefault();
  if (person1Guess.value === '') {
    errorMsgAppear(person1Guess, guess1Msg, blankMsg);
  } else {submitGuessValidator++}
}

function checkGuess2(e) {
  event.preventDefault();
  if (person2Guess.value === '') {
    errorMsgAppear(person2Guess, guess2Msg, blankMsg);
  } else {submitGuessValidator++}
}

function checkGuessInputs(e) {
  event.preventDefault();
  submitGuessValidator = 0;
  errorMsgDisappear(person1Name, name1Msg);
  errorMsgDisappear(person2Name, name2Msg);
  errorMsgDisappear(person1Guess, guess1Msg);
  errorMsgDisappear(person2Guess, guess2Msg);
  checkName1();
  checkName2();
  checkGuess1();
  checkGuess2();
  if (submitGuessValidator >= 4) {
  validateGuesses();
  }
}

// var fields = document.querySelector('#guess1');
//              document.querySelector('#guess2');
//              document.querySelector('#player1-name');
//              document.querySelector('#player2-name');

// fields.addEventListener('keyup', disableButton)


function verifyGuess1(e) {
  event.preventDefault();
  if (parseInt(rangeMin.value) > parseInt(person1Guess.value) || parseInt(rangeMax.value) < parseInt(person1Guess.value)) {
    errorMsgAppear(person1Guess, guess1Msg, guessMsg);
  }  else {submitGuessValidator++}
}

function verifyGuess2(e) {
  event.preventDefault();
  if (parseInt(rangeMin.value) > parseInt(person2Guess.value) || parseInt(rangeMax.value) < parseInt(person2Guess.value)) {
    errorMsgAppear(person2Guess, guess2Msg, guessMsg);
  } else {submitGuessValidator++}
}

function validateGuesses(e) {
  event.preventDefault();
  submitGuessValidator = 0;
  verifyGuess1();
  verifyGuess2();
  if (submitGuessValidator >= 2) {
    submitGuess(event);
  }
}

function compareGuess1() {
    if (randomNum < parseInt(person1Guess.value)) {
    document.querySelector('#high-or-low1').innerText = "that's too high";
  } else if (randomNum > parseInt(person1Guess.value)) {
    document.querySelector('#high-or-low1').innerText = "that's too low";
  } else {
    document.querySelector('#high-or-low1').innerText = "BOOM!";
  }
}

function compareGuess2() {
    if (randomNum < parseInt(person2Guess.value)) {
    document.querySelector('#high-or-low2').innerText = "that's too high";
  } else if (randomNum > parseInt(person2Guess.value)) {
    document.querySelector('#high-or-low2').innerText = "that's too low";
  } else {
    document.querySelector('#high-or-low2').innerText = "BOOM!";
  }
}

function submitGuess(event) {
  event.preventDefault();
  name1Text.innerText = person1Name.value;
  guess1Text.innerText = person1Guess.value;
  name2Text.innerText = person2Name.value;
  guess2Text.innerText = person2Guess.value;
  compareGuess1();
  compareGuess2();
  determineWinner();
}

// Create Winner Cards
function determineWinner() {
  if (randomNum == parseInt(person1Guess.value)) {
    var winner = person1Name.value;
    var loser = person2Name.value;
    createCards(winner, loser);
  } else if (randomNum == parseInt(person2Guess.value)) {
    var winner = person2Name.value;
    var loser = person1Name.value;
    createCards(winner, loser);
  }
}


function createCards(winner, loser) {
  var winnerCard = `<div class='winner-card'><h4>${person1Name.value}  <span>vs</span>  ${person2Name.value}</h4>
  <h3 id='winner-name'> ${winner} </h3>
  <p class='winner'>WINNER</p></div>`;
  document.querySelector('#card-holder').insertAdjacentHTML('afterbegin', winnerCard);
}

function disableButton() {
  if (person1Name !== '' || person1Guess !== '' || person2Name !== '' || person2Guess !== '') {
    for (var i = 0; i < resetButtons.length; i++) {
    resetButtons[i].disabled = false;
    }
    goodBtn();
  } else {
    for (var i = 0; i < resetButtons.length; i++) {
    resetButtons[i].disabled = true;
    }
    grayBtn();
  }
}

var resetButtons = document.querySelectorAll('.clear-btns');

function grayBtn() {
  for (var i = 0; i < resetButtons.length; i++) {
    resetButtons[i].classList.add('gray-out');
  }
}

function goodBtn() {
    for (var i = 0; i < resetButtons.length; i++) {
    resetButtons[i].classList.remove('gray-out');
  }
}
