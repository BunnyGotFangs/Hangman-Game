// need to capture the player name to generate personalized experience
var playerName = prompt("Type in your gamer-name and hit 'OK'");

// 
var playForSure = confirm( playerName + " ,are you sure you want to play Hangman?");

if (playForSure) {
    alert("You're Ready! Select any key to begin!");}

//else { alert("Thank You for Stopping by. See You Next Time.")};
// need to have a list of words for the game to match the theme
var wordList = [ "test", 
                    "out", 
                    "whether", 
                    "the", 
                    "game", 
                    "works", 
                    "or", 
                    "not"];
// a word is randomly selected


                
// show the empty place holders for the word
// show how many guesses the player has (6 guesses per word)
// player provides a guess (input from keyboard)
// game either adds letter into the random word or in the area of guessed letters
// if the letter is in the word guesses left does not change; if letter is not in the word guesses reduces
// when guesses = 0, round is over; if word is guessed before round is over player wins else computer wins
// need to display wins and losses
// to have a quit quit game option and start over option


