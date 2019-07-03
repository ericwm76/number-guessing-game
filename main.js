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

// var parsedMin = parseInt(rangeMin);

// var parsedMax = parseInt(rangeMax);

setRangeBtn.addEventListener('click', updateRanges)

function updateRanges(event) {
  event.preventDefault();
   console.log(rangeMin.value);
  if (parseInt(rangeMin.value) < parseInt(rangeMax.value)) {
    document.querySelector('#lowRange').innerHTML = rangeMin.value;
    document.querySelector('#highRange').innerHTML = rangeMax.value;
    } //else {return error message}
  
  return false;
  } 


// //Generate Random Number
function randomNumber() {return Math.floor(Math.random() * (parseInt(rangeMax.value) - parseInt(rangeMin.value) + 1)) + parseInt(rangeMin.value)};
