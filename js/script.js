const guessedLettersList = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const letterInput = document.querySelector("input");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuesses = document.querySelector(".remaining");
const remainingGuessesSpan = document.querySelector("p.remaining span");
const messageArea = document.querySelector(".message");
const replayButton = document.querySelector(".play-again");

const word = "magnolia";
const guessedLetters = [];
//Set word to blank circles
const circleLetters = function (word) {
    const arr = word.split("");
    const blankArr = arr.map(function (element) {
        return element = "●"
    });

    wordInProgress.innerHTML = blankArr.join("");
}

//validate player input
const validate = function (input) {
    const acceptedLetter = /[a-zA-Z]/;
    if (input == "") {
        messageArea.innerText = "Please input a letter!";
    } else if (input.length > 1) {
        messageArea.innerText = "This input was too long. Choose a single letter!";
    } else if (!input.match(acceptedLetter)) {
        messageArea.innerText = "Entry must be a valid letter!"
    } else {
        makeGuess(input);
    }

}
//Capture guess to array
const makeGuess = function (letter) {
    const upperLetter = letter.toUpperCase();
    if (guessedLetters.includes(upperLetter)) {
        messageArea.innerText = "You already used this letter. Try again!";
    } else {
        guessedLetters.push(upperLetter);
        console.log(guessedLetters);
    }

}
guessButton.addEventListener("click", function (e) {
    e.preventDefault();
    messageArea.innerText = "";
    const guessedLetter = letterInput.value;
    validate(guessedLetter);
    letterInput.value = "";

})

circleLetters(word);