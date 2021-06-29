//game values
let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

//UI Elements
const game = document.getElementById('game');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const guessBtn = document.getElementById('guess-btn');
const guessInput = document.querySelector('#guess-input');
const message = document.querySelector('.message')



// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

//Listen for guess 
guessBtn.addEventListener('click', function () {
    let guess = parseInt(guessInput.value);

    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }
})

function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}


