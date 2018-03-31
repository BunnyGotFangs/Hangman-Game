// need to capture the player name to generate personalized experience
var playerName = prompt("Type in your gamer-name and hit 'OK'");

// ensure the player wants to play
var playForSure = confirm( playerName + " ,are you sure you want to play Hangman?");

// need to have a list of words for the game to match the theme
var wordList = [    "reining", 
                    "dressage", 
                    "western", 
                    "trail", 
                    "pleasure", 
                    "hunter", 
                    "english", 
                    "barrel"
                ];
// placeholders for the number of wins and losses
var wins = 0;
var losses = 0;

// a word is randomly selected from the list
var randomWord = wordList[Math.floor(Math.random() * wordList.length)];

                
// show the empty place holders for the random select word
var emptyWord = [];
for (var i = 0; i < randomWord.length; i++)
    { 
        emptyWord[i] = " _ ";
    }

// show how many guesses the player has (6 guesses per word)
var remainingGuess = 6;

while (remainingGuess > 0) 
    { 
        (emptyWord.join(" "));
// player provides a guess (input from keyboard)
document.onkeyup = function(event) {

    var guessedLetter = event.key;
// game either adds letter into the random word or in the area of guessed letters
// if the letter is in the word guesses left does not change; if letter is not in the word guesses reduces
     
        for (var j = 0; j < randomWord.length; j++) 
    {
        if(randomWord[j] === guessedLetter) 
    {
        emptyWord[j] = guessedLetter; 
        remainingGuess--;
    }
    }
    }



// when guesses = 0, round is over; if word is guessed before round is over player wins else computer wins

// to have a quit quit game option and start over option
}
alert(emptyWord.join(" "));

var score =
          "<p>Rounds Won: " + wins + "</p>" +
          "<p>Rounds Lost: " + losses + "</p>" +
          "<p>Guess Remaining This Round: " + remainingGuesses + "</p>" +
          "<p>Letters Guessed So Far: " + letterSelect[] + "</p>";


// need to display wins and losses
document.write(score);

