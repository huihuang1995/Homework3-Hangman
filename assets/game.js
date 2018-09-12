var words = ["HTML", "JAVASCRIPT", "FUNCTION", "NUMBER", "STRING", "ARRAY", "UNDEFINED", "NULL"];
var letterGuessedIncorrectly;
var word;
var blankedWordWithGuesses;
var numOfGuesses = 6
///Pseudocode: 1. 

var startGame = function(){
    letterGuessedIncorrectly = [];
    word = getRandomWord();
    blankedWordWithGuesses = replaceWordWithBlanks(word.length);
    updateIncorrectGuesses(blankedWordWithGuesses);
    listenForKeyPress();
};

var getRandomWord = function(){
    return words[Math.floor(Math.random() * words.length)]
};

var listenForKeyPress = function(){
    document.onkeypress = handleKeyPress;
};

var checkGuess = function(letter, world){
    return word.indexOf(letter) > -1;
};

var replaceWordWithBlanks = function(length){
    for (var i = 0; i < length; i++){
        str = str + "_";
    }
    return str.slice(0,-1)
}

var fillInGuesses = function(letter, word, blankedWordWithGuesses){

}

var checkIfOutOfGuesses = function(){
    return letterGuessedIncorrectly.length > numberOfGuesses;
}

var checkIfWordIsComplete = function(blankedWordWithGuesses){
    return string.indexOf("_") < 0;
}

var handleKeyPress = function(event){
    console.log(event.key.toUpperCase)
    var guess = event.key.toUpperCase();
    if (checkGuess(guess)){
        handleCorrectGuess(guess);
    } else {
        handleIncorrectGuess(guess);
    }
}

var handleCorrectGuess = function(guess){
    blankedWordWithGuesses = fillInGuesses(guess);
    updateCorrectGuesses(blankedWordWithGuesses);
    if (checkIfWordIsComplete(blankedWordWithGuesses)){
        handleWins();

    }
};

var handleIncorrectGuess = function(){
    letterGuessedIncorrectly.push(guess)
    updateIncorrectGuesses(letterGuessedIncorrectly.joint(','));
    if (checkIfOutOfGuesses){
        handleLoss();
    }
};

var updateHangmanArt = function(){

};

var updateIncorrectGuesses = function(string){
  var element = document.getElementById("correct-guess");
    element.innerHTML = string;
    updateHangmanArt();
};

var updateCorrectGuesses = function(string){
    var element = document.getElementById("incorect-guess");
    element.innerHTML = string;
};

var handleWins = function(){

};

var handleLoss = function(){

};

startGame();