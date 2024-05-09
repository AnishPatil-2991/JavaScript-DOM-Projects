const randomNumber = parseInt(Math.random() * 100 + 1)
console.log(randomNumber);

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

let playGame = true
let theGuess = 1
let previousGuess = []

if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault()
        const userGuessedNumber = parseInt(userInput.value)
        validateGuess(userGuessedNumber)
    })
}

function validateGuess(guess) {
    if (guess > 100) {
        alert("Please provide number below 100");
    }
    else if (guess < 1) {
        alert("Please provide number above 100");
    }
    else if (isNaN(guess)) {
        alert("Please provide a valid number");
    }
    else {
        previousGuess.push(guess)
        if (theGuess === 11) {
            displayGuess(guess)
            displayMessage(`Game over, Random number is ${randomNumber}`)
            endGame()
        }
        else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`You guessed it right`);
        guessSlot.innerHTML = "Congratulations! You won the game";
        endGame()
    } else if (guess > randomNumber) {
        displayMessage(`The number is too high`);
    }
    else if (guess < randomNumber) {
        displayMessage(`The number is too low`);
    }
}

function displayGuess(guess) {
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `;
    theGuess++
    remaining.innerHTML = `${11 - theGuess}`;
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess} `;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    });
}