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
var person1Guess = document.querySelector('#guess1');
var person2Guess = document.querySelector('#guess2');
var person1Name = document.querySelector('#player1-name');
var person2Name = document.querySelector('#player2-name');
var submitGuessBtn = document.querySelector('#submit-guess-button')
var nameMessage = 'Enter a name';
var guessMessage1 = 'Enter a number';
var guessMessage2 = 'Guess is not in range'

setRangeBtn.addEventListener('click', updateRanges)
submitGuessBtn.addEventListener('click', checkIfBlank)

function updateRanges(event) {
  event.preventDefault();
  if (parseInt(rangeMin.value) < parseInt(rangeMax.value)) {
    document.querySelector('#lowRange').innerHTML = rangeMin.value;
    document.querySelector('#highRange').innerHTML = rangeMax.value; 
    randomNum = Math.floor(Math.random() * (parseInt(rangeMax.value) - parseInt(rangeMin.value) + 1)) + parseInt(rangeMin.value)
    } 
    //else {return error message}
  } 


function checkIfBlank(event) {
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


function validateGuesses(event) {
event.preventDefault();
  if (person1Guess.value === NaN) {
    document.querySelector('.guess-error-message1').innerText = guessMessage1;
  }
  if (person2Guess.value === NaN) {
    document.querySelector('.guess-error-message2').innerText = guessMessage1;
  }
  if person1Guess.value < rangeMin.value {
    document.querySelector('.guess-error-message1').innerText = guessMessage2;
  }
  if person1Guess.value > rangeMax.value {
    document.querySelector('.guess-error-message1').innerText = guessMessage2;
  }
  if person2Guess.value < rangeMin.value {
    document.querySelector('.guess-error-message2').innerText = guessMessage2;
  }
  if person2Guess.value > rangeMax.value {
    document.querySelector('.guess-error-message2').innerText = guessMessage2;
  }
  else {
    submitGuess(event);
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
  } 
  else if (randomNum > parseInt(person1Guess.value)) 
  {
    document.querySelector('#high-or-low1').innerText = "that's too low"
  } 
  else {
        document.querySelector('#high-or-low1').innerText = "BOOM!"
  }
    if (randomNum < parseInt(person2Guess.value)) 
  {
    document.querySelector('#high-or-low2').innerText = "that's too high"
  } 
  else if (randomNum > parseInt(person2Guess.value)) 
  {
    document.querySelector('#high-or-low2').innerText = "that's too low"
  } 
  else {
        document.querySelector('#high-or-low2').innerText = "BOOM!"
  }
}