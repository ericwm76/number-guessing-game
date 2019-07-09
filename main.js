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

// var winner = null;

// var loser = null;

// console.log(winner)

setRangeBtn.addEventListener('click', updateRanges)

function updateRanges(event) {
  event.preventDefault();
  if (parseInt(rangeMin.value) < parseInt(rangeMax.value)) {
    document.querySelector('#lowRange').innerHTML = rangeMin.value;
    document.querySelector('#highRange').innerHTML = rangeMax.value; 
    randomNum = Math.floor(Math.random() * (parseInt(rangeMax.value) - parseInt(rangeMin.value) + 1)) + parseInt(rangeMin.value)
    } 
    //else {return error message}
  } 


// //Generate Random Number


var person1Guess = document.querySelector('#guess1');

var person2Guess = document.querySelector('#guess2');

var person1Name = document.querySelector('#player1-name');

var person2Name = document.querySelector('#player2-name');

var submitGuessBtn = document.querySelector('#submit-guess-button')

submitGuessBtn.addEventListener('click', submitGuess)

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


