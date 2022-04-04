const guessedLetters = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const letterInput = document.querySelector("input");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuesses = document.querySelector(".remaining");
const remainingGuessesSpan = document.querySelector("p.remaining span");
const messageArea = document.querySelector(".message");
const replayButton = document.querySelector(".play-again");

const word = "magnolia";

const circleLetters = function (word) {
    const arr = word.split("");

    const blankArr = arr.map(function (element) {
        return element = "●"
    });

    wordInProgress.innerHTML = blankArr.join("");
}

guessButton.addEventListener("click", function (e) {
    e.preventDefault();
    const guessedLetter = letterInput.value;
    console.log(guessedLetter);
    letterInput.value = "";
})

circleLetters(word);