// Establish Words 
var words = ["drake", "rhcp", "falloutboy", "thechainsmokers", "thomasrhett"];

//create vars for letters guessed, wins, guesses left, losses
var wrongLetters = [];
var wins = 0;
var guessesLeft = 12;
var losses = 0;
var lettersChosenWord = [];
var numOfBlanks = [];
var blanksAndSuccesses = [];
var chosenWord = "";
var letterGuessed = "";
//reset 
function reset() {
    guessesLeft = 12;
    //choose random word
    chosenWord = words[Math.floor(Math.random() * words.length)];
    //picks a word and writes to document
    document.getElementById("currentWord").innerHTML = chosenWord;
    //splits words into single letters 
    lettersChosenWord = chosenWord.split("");
    // assigns the number of letters in a word
    numOfBlanks = lettersChosenWord.length;
    //reset blanks
    blanksAndSuccesses = [];
    //resets wrong letters in game when reset
    wrongLetters = [];
    //creates blanks for every word in array (loops the array)
    for (var i = 0; i < numOfBlanks; i++) {
        blanksAndSuccesses.push("_");
    }
        
        //write guesses left
        document.getElementById("guessesLeft").innerHTML = "Guesses left: " + guessesLeft;

        //writes the blanks made with push in for loop 
        document.getElementById("currentWord").innerHTML = blanksAndSuccesses.join(" ");
      
        //gets rid of missed letters 
        document.getElementById("lettersGuessed").innerHTML = wrongLetters.join(" ");
        //writes current wins 
        
}


function checkLetters (letter) {
    //check letter to false
    var letterInWord = false;

    // for loop that checks if letter is word .
    for (var i = 0; i < numOfBlanks; i++) {
  
      if (chosenWord[i] === letter) {
  
        // if letter is in word thatn lettinInWord becomes true 
        letterInWord = true;
      }
    }

    //make conditions and check 

if (letterInWord) {
    //loop to check if letter is indeed in word
    for (var j = 0; j < numOfBlanks; j++){
        // if letter is index j is word then add to blanks and successes array. 
        if (chosenWord[j] === letter){
            blanksAndSuccesses[j] = letter;
        }
    }
}
        //if letter not in word add the wrong letters array
        else {
            wrongLetters.push(letter);
            //subract guesses left
            guessesLeft--;
        }
}
    



function roundComplete() {
  // First, log an initial status update in the console
  // telling us how many wins, losses, and guesses are left.
 

  // Update the HTML to reflect the new number of guesses.
  document.getElementById("guessesLeft").innerHTML = guessesLeft;

  // This will print the array of guesses and blanks onto the page.
  document.getElementById("currentWord").innerHTML = blanksAndSuccesses.join(" ");

  // This will print the wrong guesses onto the page.
  document.getElementById("lettersGuessed").innerHTML = wrongLetters.join(" ");

  // If our Word Guess string equals the solution.
  // (meaning that we guessed all the letters to match the solution)...
  if (lettersChosenWord.toString() === blanksAndSuccesses.toString()) {

    // Add to the win counter
    wins++;

    // Give the user an alert
    alert("You win!");

    // Update the win counter in the HTML
    document.getElementById("wins").innerHTML = "Wins: " + wins;

    // Restart the game
    reset();
  }

  // If we've run out of guesses
  else if (guessesLeft === 0) {

    // Add to the loss counter
    losses++;

    // Give the user an alert
    alert("You lose");

    // Update the loss counter in the HTML
    document.getElementById("losses").innerHTML = "Loses: " + losses;

    // Restart the game
    reset();

  }

}

// MAIN PROCESS (THIS IS THE CODE THAT CONTROLS WHAT IS ACTUALLY RUN)
// ==================================================================

// Starts the Game by running the startGame() function
reset();

// Then initiates the function for capturing key clicks.
document.onkeyup = function(event) {

  // Converts all key clicks to lowercase letters.
  letterGuessed = String.fromCharCode(event.which).toLowerCase();

  // Runs the code to check for correct guesses.
  checkLetters(letterGuessed);

  // Runs the code that ends each round.
  roundComplete();
};

















