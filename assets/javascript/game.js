// Establish Words (needs to be D.R.Y)
var drake = ["_", "_", "_", "_", "_"];

var fallOutBoy = ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_"];

var rhcp = ["_", "_", "_", "_"];

var theChainsmokers = ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"];

var thomasRhett = ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_", "_"];

var lettersGuessed = []

//get random word


// Select var 1
function myWords() {
    document.getElementById("clickToStart").innerHTML = drake.join(" ");

}

//keypress record 
document.onkeyup = function (event) {
    var letterPressed = event.key.toLowerCase()

    //if letter that is in word is pressed (how do i use || to make shorter)

    
    if (letterPressed === "d") {
        drake[0] = "D";
        document.getElementById("clickToStart").innerHTML = drake.join(" ")

    }
    
    if (letterPressed === "r") {
        drake[1] = "R";
        document.getElementById("clickToStart").innerHTML = drake.join(" ")

    };

    if (letterPressed === "a") {
        drake[2] = "A";
        document.getElementById("clickToStart").innerHTML = drake.join(" ")

    }
    if (letterPressed === "k") {
        drake[3] = "K";
        document.getElementById("clickToStart").innerHTML = drake.join(" ")

    }
    if (letterPressed === "e") {
        drake[4] = "E";
        document.getElementById("clickToStart").innerHTML = drake.join(" ")

    }
    
    else {
        lettersGuessed.push(event.key);
        document.getElementById("lettersGuessedSection").innerHTML = lettersGuessed;
    
    };

};








