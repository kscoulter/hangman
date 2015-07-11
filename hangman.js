//Build a Hangman Game Using Object-oriented JS

var hangman = {
  setup: {
    guessesLeft: 10,
    guessedLetters: ""
    //word: prompt("Choose a word to guess!"),
    //lettersArray: word.split(""),
  },
  currentGuess: function() {  //Get Current Guess
    //attach event listener to submission form
    $("#letter").on("keypress", function(e){
    if(e.which === 13){ //if the player pressed "enter" key
      event.preventDefault(); //do not refresh the page
      currentGuess = $("#letter").val(); //what's inside the submission form
      $("#letter").val(""); //empty the submission form
      }
    })
  },

}

hangman.currentGuess();
