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
      if(matchLetter() == false){
        guessesLeft--;
        console.log(guessesLeft);
      }
    }
    else {
      console.log("you lose");
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
  for(var i = 0; i < numLetter; i++){
    if(currentGuess == lettersArray[i]) {
      console.log(i)
      $(".letterSpace").eq(i).show().css("display", "inline-block");
      $(".spaceBorder").eq(i).hide();
      return true

    }
  }
}

// display the solved guesses
// function displayUpdate(){
//   $(".letterSpace").eq(0).show()
// }
