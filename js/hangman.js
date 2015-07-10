//get user input with prompt
//set an empty array
//break down the string into its individial letters
//get length of the array
//append divs with border-bottom property equal to the length of array
//if the user guess is equal to one of the elements in that array, set that array element's diplay property by useing .show() method.
//otherwise display guessed letter in the appropriate place
// global variables
var guessesLeft = 7;
var word = prompt("Choose a word to guess!");
var lettersArray = word.split("");
var numLetter = lettersArray.length;
var currentGuess;
var guesses = "";

showSpaces();

//$(document).ready( function() {
$("#letter").on("keypress", function(e){
//  event.preventDefault();
  if(e.which === 13){
    event.preventDefault();
    currentGuess = $("#letter").val()
    $("#letter").val("");
    if(guessesLeft > 0 && currentGuess){
      console.log(currentGuess);
      if(matchLetter() !== true){
        guessesLeft--;
        if(guessesLeft === 0){
          alert("Sorry - you lost the game!");
        }
        guesses = guesses + currentGuess;
        $(".lettersGuessed").html(guesses);
        $(".remainingGuess").html(guessesLeft);
        console.log(guessesLeft);
      }
    }
  }
})
// adds enough spaces for the number of letters in word
function showSpaces() {
  $(".game-word").html("");
  for (var i=0; i<numLetter; i++){
    $(".game-word").append("<div class='letterSpace'>"+ lettersArray[i] +"</div>");
    $(".game-word").append("<div class='spaceBorder'></div>");
  }
}


// checks to see if user guess matches any of the letters in word
function matchLetter(){
  var foundLetter = false;
  for(var i = 0; i < numLetter; i++){
    if(currentGuess == lettersArray[i]) {
      console.log(i)
      displayUpdate(i);
      foundLetter = true;
    }
  }
  return foundLetter;
}

function displayUpdate(i){
$(".letterSpace").eq(i).show().css("display", "inline-block");
$(".spaceBorder").eq(i).hide();
}

function resetGame(){
  $(".letterSpace").remove();
  $(".spaceBorder").remove();
  $(".game-word").html("WORD");
  var guessesLeft = 7;
  var word = prompt("Choose a word to guess!");
  var lettersArray = word.split("");
  var numLetter = lettersArray.length;
  var currentGuess;
  var guesses = "";
  showSpaces();
}

$("#newgame").on("click", resetGame)
