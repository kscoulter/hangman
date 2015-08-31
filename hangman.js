//Build a Hangman Game Using Object-oriented JS

var hangman = {
  setup: {
    guessesLeft: 10,
    word: [],
    currentGuess: "",
    guesses: []
  },

  runGame: function(){
    this.getWord()
    console.log(hangman.setup.word);
    this.showSpaces()
    $("#letter").on("keypress", function(e){ //attach event listener
      if(e.which === 13){ //if the player pressed "enter" key
        event.preventDefault(); //do not refresh the page
        hangman.setup.currentGuess = $("#letter").val().toUpperCase(); //what's inside the submission form (current guess)
        $("#letter").val(""); //empty the submission form
        if(hangman.setup.guessesLeft > 0 && hangman.setup.currentGuess){
          if(!hangman.letterMatch(hangman.setup.currentGuess, hangman.setup.word)){  //if the guess was wrong
            if(hangman.setup.guessesLeft === 0){
              alert("Sorry - you lost this round ")
            }
            hangman.setup.guessesLeft -= 1;
            hangman.displayUpdate()

          }
        }
      }
    })
  },

  getWord: function(){
    var word = prompt("Choose a word to guess!").toUpperCase()
    hangman.setup.word = word.split("");
    console.log(word);
  },

  letterMatch: function(letterGuess, wordArray) {  //Does the current guess match any letter in the array? True/False
    var foundLetter = false;
    for(var i = 0; i < wordArray.length; i++){
      if(letterGuess == wordArray[i]) {
        foundLetter = true;
        hangman.wordUpdate(i)
      }
    }
    return foundLetter;
  },

  showSpaces: function() { //displays number of spaces equal to number of letters in word
    $(".game-word").html("");
    for (var i=0; i<hangman.setup.word.length; i++){
      $(".game-word").append("<div class='letterSpace'>"+ hangman.setup.word[i] +"</div>");
      $(".game-word").append("<div class='spaceBorder'></div>");
    }
  },

  wordUpdate: function(i){
    $(".letterSpace").eq(i).show().css("display", "inline-block");
    $(".spaceBorder").eq(i).hide();
  },

  displayUpdate: function(){
    if(hangman.checkWrongGuesses(hangman.setup.guesses)){
      if(hangman.setup.currentGuess){
        hangman.setup.guesses.push(hangman.setup.currentGuess.toUpperCase());
      }
      $(".lettersGuessed").html(hangman.setup.guesses.join(", "));
      $(".remainingGuess").html(hangman.setup.guessesLeft);
    }
  },

  checkWrongGuesses: function(array){
    for(var i = 0; i < array.length; i++){
      if(hangman.setup.currentGuess == array[i]){
        alert("You already guessed that")
        return false
      }
    }
    return true
  },

  resetGame: function(){
    hangman.setup = {
      guessesLeft: 10,
      word: [],
      currentGuess: "",
      guesses: []
    }
    hangman.displayUpdate()
  },

  giveUp: function(){
    for(var i = 0; i<hangman.setup.word.length; i++){
      hangman.wordUpdate(i)
    }
  }
}

hangman.runGame();
//to start a new game, press on new game button
$("#newgame").on("click", function(){
  hangman.resetGame() //resets the setup values to default
  hangman.runGame()
})
//to give up press on give up button
$("#giveup").on("click", function(){
  hangman.giveUp()//display the word
})
