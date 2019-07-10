//Global Variables
  //var p1Name = document.querySelector(".")
  //var setRangeBtn = document.querySelector('#update-button')

//Add Event Listeners
  //Set Range: on click, grab inputs, start respective function
  //Submit Guess: on click, grab guess inputs, start respective function
  //Reset Game: on click, clears inputs, start respective function
  //Clear game: on click, clears inputs
  //Timer
  //Keep track of on clicks; multiply total clicks x2


//Functions
  //Set Range
    //If (lowRange < highRange) {Populate minimum range to #lowRange, populate max range to #highRange} else {return error message}

  //Validate inputs
    //Check for text in inputs - if value === "" return error msg
    //Check that minRange < guess < maxRange - if guess < minRange, default to minRange; if guess > maxRange, default to maxRange.

  //Submit Guess
    //Random Number Generator
    //grab min/max ranges from Set Range inputs, generate random number within that range.
    //Compare guess 1 and guess 2 to a random number
    //Populate guesses to #player1-guess and #player2-guess, respectively
    //if (#guess1 < randomNumber) {return "that's too low"} else if (guess1 > randomNumber) {return "that's too high"} else {return "BOOM!"}
    //repeat for player 2
    //Generates new card
    

  //Disable buttons
    //Button default is disabled; adds style class when inputs are !== ""

//Set Range
var setRangeBtn = document.querySelector('#update-button');
var rangeMin = document.querySelector('#minRange');
var rangeMax = document.querySelector('#maxRange');
var randomNum = null;
var upperRange = document.querySelector('#highRange');
var lowerRange = document.querySelector('#lowRange')
var person1Guess = document.querySelector('#guess1');
var person2Guess = document.querySelector('#guess2');
var person1Name = document.querySelector('#player1-name');
var person2Name = document.querySelector('#player2-name');
var submitGuessBtn = document.querySelector('#submit-guess-button');
var rangeMinMsg = document.querySelector('#range-error-message1');
var rangeMaxMsg = document.querySelector('#range-error-message2');
var nameMsg = 'Enter a name';
var guessMsg1 = 'Enter a number';
var guessMsg2 = 'Guess is not in range';

// var winner = null;

// var loser = null;

// console.log(winner)

// Setting the Range
// rangeMin.addEventListener('keyup', checkMinRange)
// rangeMax.addEventListener('keyup', checkMaxRange)
setRangeBtn.addEventListener('click', checkRangeInputs)

function errorMsgAppear(inputField, errorField, errorMsg) {
  inputField.classList.add('text-input-error');
  errorField.classList.remove('error-message-hidden');
  errorField.innerText = errorMsg;
}

function errorMsgDisappear(inputField, errorField) {
  inputField.classList.remove('text-input-error');
  errorField.classList.add('error-message-hidden');
}

function checkMinRange(e) {
  event.preventDefault();
  if (rangeMin.value === '') {
    errorMsgAppear(rangeMin, rangeMinMsg, guessMsg1);
  } 
}

function checkMaxRange(e) {
  event.preventDefault();
  if (rangeMax.value === '') {
    errorMsgAppear(rangeMax, rangeMaxMsg, guessMsg1);
  } 
} 

function checkRangeInputs(e) {
  event.preventDefault();
  checkMinRange();
  checkMaxRange();
  // if (checkMinRange === true && checkMaxRange === true) {
  console.log('checkRangeInputs ran');
  validateRange();
}
// }

function validateRange(e) {
  event.preventDefault();
  if (rangeMin.value >= rangeMax.value) {
      errorMsgAppear(rangeMin, rangeMinMsg, 'Min must be less than max');
  } else {
    console.log('validateRange ran')
    updateRange();
  }
}  

function updateRange(e) {
  event.preventDefault();
    lowerRange.innerHTML = rangeMin.value;
    upperRange.innerHTML = rangeMax.value; 
    randomNum = Math.floor(Math.random() * (parseInt(rangeMax.value) - parseInt(rangeMin.value) + 1)) + parseInt(rangeMin.value);
    console.log('updateRange ran')
    errorMsgDisappear(rangeMin, rangeMinMsg);
    errorMsgDisappear(rangeMax, rangeMaxMsg);
  } 

// Submitting Names and Guesses
submitGuessBtn.addEventListener('click', checkGuessInputs)

function checkName1(e) {
  event.preventDefault();
  if (.value === '') {
    errorMsgAppear(rangeMin, rangeMinMsg, guessMsg1);
  } 
}

function checkGuessInputs(e) {
  event.preventDefault();
  if (person1Name.value === "") {
    document.querySelector('.name-error-message1').innerText = nameMessage;
  } 
  if (person2Name.value === "") {
    document.querySelector('.guess-error-message1').innerText = guessMessage1;
  } 
  if (person1Guess.value === "") {
    document.querySelector('.name-error-message2').innerText = nameMessage;
  }
  if (person2Guess.value === ""){
    document.querySelector('.guess-error-message2').innerText = guessMessage1;
  } 
  else {
    validateGuesses(event);
  }
}

var fields = document.querySelector('#guess1');
             document.querySelector('#guess2');
             document.querySelector('#player1-name');
             document.querySelector('#player2-name');

submitGuessBtn.addEventListener('click', submitGuess)
fields.addEventListener('keyup', disableButton)

function validateGuesses(event) {
event.preventDefault();
  if (person1Guess.value === NaN) {
    document.querySelector('.guess-error-message1').innerText = guessMessage1;
  }
  if (person2Guess.value === NaN) {
    document.querySelector('.guess-error-message2').innerText = guessMessage1;
  }
  if (person1Guess.value < rangeMin.value) {
    document.querySelector('.guess-error-message1').innerText = guessMessage2;
  }
  if (person1Guess.value > rangeMax.value) {
    document.querySelector('.guess-error-message1').innerText = guessMessage2;
  }
  if (person2Guess.value < rangeMin.value) {
    document.querySelector('.guess-error-message2').innerText = guessMessage2;
  }
  if (person2Guess.value > rangeMax.value) {
    document.querySelector('.guess-error-message2').innerText = guessMessage2;
  }
  else {
    submitGuess(event);
    _checkIfBlank(event);
  }
}


function submitGuess(event) {
  event.preventDefault();
  document.querySelector('#player1-guess').innerText = person1Guess.value;
  document.querySelector('.challenger1-name').innerText = person1Name.value;
  document.querySelector('#player2-guess').innerText = person2Guess.value;
    document.querySelector('.challenger2-name').innerText = person2Name.value;
  if (randomNum < parseInt(person1Guess.value)) 
  {
    document.querySelector('#high-or-low1').innerText = "that's too high"
  } else if (randomNum > parseInt(person1Guess.value)) 
  {
    document.querySelector('#high-or-low1').innerText = "that's too low"
  } else {
        document.querySelector('#high-or-low1').innerText = "BOOM!"
  }
  if (randomNum < parseInt(person2Guess.value)) 
  {
    document.querySelector('#high-or-low2').innerText = "that's too high"
  } else if (randomNum > parseInt(person2Guess.value)) 
  {
    document.querySelector('#high-or-low2').innerText = "that's too low"
  } else {
        document.querySelector('#high-or-low2').innerText = "BOOM!"
  } 
  determineWinner();
}

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
  // console.log(winner)
  var winnerCard = `<div class='winner-card'><h4>${person1Name.value}  <span>vs</span>  ${person2Name.value}</h4>
  <h3 id='winner-name'> ${winner} </h3>
  <p class='winner'>WINNER</p></div>`;
  document.querySelector('#card-holder').insertAdjacentHTML('afterbegin', winnerCard);
}

// function disableButton() {
//    if(document.querySelectorAll('input[type=text]').value === "" || document.querySelectorall('input[type=number]').value) === "" { 
//             document.querySelector('#reset-game-button').disabled = true;
//             document.queryselector('#clear-game-button').disabled = true; 
//         } else { 
//             document.querySelector('#reset-game-button').disabled = false;
//             document.queryselector('#clear-game-button').disabled = false;
//         }
//     }

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
