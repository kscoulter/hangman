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

//$(document).ready( function() {
$("#letter").on("keypress", function(e){
//  event.preventDefault();
  if(e.which === 13){
    event.preventDefault();
    var currentGuess = $("#letter").val()
    $("#letter").val("");
    console.log(currentGuess);
    if(guessesLeft > 0 && currentGuess){
      console.log(currentGuess);
      matchLetter()
    }
    else {
      console.log("you lose");
    }
  }
})



function matchLetter(){
  for(var i = 0; i < numLetter; i++){
    if(currentGuess === numLetter[i]) {
      console.log("It worked!");
      //.show()
    }
    else {
      //display currentGuess in guess column
      guessesLeft--;
    }
  }
}
