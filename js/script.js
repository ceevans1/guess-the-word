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
        showGuessedLetter(guessedLetters);
        showGoodGuess(guessedLetters);
    }

}

const showGuessedLetter = function (arr) {
    guessedLettersList.innerHTML = "";
    for (let letter of arr) {
        const li = document.createElement("li");
        li.innerText = letter;
        guessedLettersList.append(li);
    }
}

const showGoodGuess = function (arr) {
    const wordUpper = word.toUpperCase();
    const wordArray = wordUpper.split("");
    const inProgressArray = wordInProgress.innerHTML.split("")
    for (const letter of arr) {
        for (let i = 0; i < wordArray.length; i++) {
            if (letter === wordArray[i]) {
                inProgressArray[i] = letter;
            }
        }
    }
    wordInProgress.innerHTML = inProgressArray.join("");
    checkWin(wordUpper);
}

const checkWin = function (str) {
    if (wordInProgress.innerHTML === str.toUpperCase()) {
        messageArea.classList.add("win");
        messageArea.innerHTML = '<p class="highlight">You guessed correct the word! Congrats!</p>';

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