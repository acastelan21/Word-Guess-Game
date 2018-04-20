// Establish Words 
var drake = ["_", "_", "_", "_", "_"];

var fallOutBoy = ["_", "_", "_", "_", "_", "_", "_", "_", "_", "_"];

var rhcp = ["_", "_", "_", "_"];


var lettersGuessed = [];
var wins = 1;
var clues = [drake, fallOutBoy, rhcp,];
var randomClue = clues[Math.floor(Math.random() * clues.length)];

//keypress record 
document.onkeyup = function (event) {
    var letterPressed = event.key.toLowerCase();
    if (event.keyCode ===13) {
        document.getElementById("keyToStart").innerHTML = randomClue.join(" ");
    };
    
};
document.onkeyup = function (event) {
var letterPressed = event.key.toLowerCase()
if (randomClue = drake)  {
    
    if (letterPressed === "d") {
        drake[0] = "D";
        document.getElementById("keyToStart").innerHTML = drake.join(" ")

    }

    else if (letterPressed === "r") {
        drake[1] = "R";
        document.getElementById("keyToStart").innerHTML = drake.join(" ")

    }

    else if (letterPressed === "a") {
        drake[2] = "A";
        document.getElementById("keyToStart").innerHTML = drake.join(" ")

    }

    else if (letterPressed === "k") {
        drake[3] = "K";
        document.getElementById("keyToStart").innerHTML = drake.join(" ")

    }
    else if (letterPressed === "e") {
        drake[4] = "E";
        document.getElementById("keyToStart").innerHTML = drake.join(" ")

    }
    else {
        lettersGuessed.push(event.key);
        document.getElementById("lettersGuessedSection").innerHTML = lettersGuessed;

    }

    if ((drake[0] === "D") && (drake[1] === "R") && (drake[2] === "A") && (drake[3] === "K") && (drake[4] === "E")) {
        document.getElementById("winLossSection").innerHTML = "YOU WIN!";
        document.getElementById("winTracker").innerHTML = ("Wins: " + wins++);
        //ADD PLAY AGAIN PROMPT IN HTML
    }

    if (lettersGuessed.length > 6) {
        document.getElementById("winLossSection").innerHTML = "YOU LOSE!"
    }
}

if (randomClue = rhcp) {

    if (letterPressed === "r") {
        rhcp[0] = "R";
        document.getElementById("keyToStart").innerHTML = rhcp.join(" ")

    }

    else if (letterPressed === "h") {
        rhcp[1] = "H";
        document.getElementById("keyToStart").innerHTML = rhcp.join(" ")

    }

    else if (letterPressed === "c") {
        rhcp[2] = "C";
        document.getElementById("keyToStart").innerHTML = rhcp.join(" ")

    }

    else if (letterPressed === "p") {
        rhcp[3] = "P";
        document.getElementById("keyToStart").innerHTML = rhcp.join(" ")

    }

    else {
        lettersGuessed.push(event.key);
        document.getElementById("lettersGuessedSection").innerHTML = lettersGuessed;

    }

    if ((rhcp[0] === "R") && (rhcp[1] === "H") && (rhcp[2] === "C") && (rhcp[3] === "P")) {
        document.getElementById("winLossSection").innerHTML = "YOU WIN!";
        document.getElementById("winTracker").innerHTML = ("Wins: " + wins++);

    }

    if (lettersGuessed.length > 6) {
        document.getElementById("winLossSection").innerHTML = "YOU LOSE!"
    


} {}{if (randomClue = fallOutBoy) {
    if (letterPressed === "f") {
        fallOutBoy[0] = "F";
        document.getElementById("keyToStart").innerHTML = fallOutBoy.join(" ")

    }

    else if (letterPressed === "a") {
        fallOutBoy[1] = "A";
        document.getElementById("keyToStart").innerHTML = fallOutBoy.join(" ")

    }

    else if (letterPressed === "l") {
        fallOutBoy[2] = "L";
        fallOutBoy[3] = "L";
        document.getElementById("keyToStart").innerHTML = fallOutBoy.join(" ")

    }


    else if (letterPressed === "o") {
        fallOutBoy[4] = "O";
        fallOutBoy[8] = "O";
        document.getElementById("keyToStart").innerHTML = fallOutBoy.join(" ")

    }
    else if (letterPressed === "u") {
        fallOutBoy[5] = "U";
        document.getElementById("keyToStart").innerHTML = fallOutBoy.join(" ")

    }
    else if (letterPressed === "t") {
        fallOutBoy[6] = "T";
        document.getElementById("keyToStart").innerHTML = fallOutBoy.join(" ")

    }

    else if (letterPressed === "b") {
        fallOutBoy[7] = "B";
        document.getElementById("keyToStart").innerHTML = fallOutBoy.join(" ")

    }
    else if (letterPressed === "o") {
        fallOutBoy[8] = "O";
        document.getElementById("keyToStart").innerHTML = fallOutBoy.join(" ")

    }
    else if (letterPressed === "y") {
        fallOutBoy[9] = "Y";
        document.getElementById("keyToStart").innerHTML = fallOutBoy.join(" ")

    }
    else {
        lettersGuessed.push(event.key);
        document.getElementById("lettersGuessedSection").innerHTML = lettersGuessed;

    }

    if ((fallOutBoy[0] === "F") && (fallOutBoy[1] === "A") && (fallOutBoy[2] === "L") && (fallOutBoy[3] === "L") && (fallOutBoy[4] === "O") && (fallOutBoy[5] === "U") && (fallOutBoy[6] === "T") && (fallOutBoy[7] === "B") && (fallOutBoy[8] === "O") && (fallOutBoy[9] === "Y")) {
        document.getElementById("winLossSection").innerHTML = "YOU WIN!";
        document.getElementById("winTracker").innerHTML = ("Wins: " + wins++);
        //ADD PLAY AGAIN PROMPT IN HTML
    }

    if (lettersGuessed.length > 6) {
        document.getElementById("winLossSection").innerHTML = "YOU LOSE!"
    }

}}
}}



//issues trouble 
//get only one clue to show at a time 
//stop wins to keep going up with every new guess 
