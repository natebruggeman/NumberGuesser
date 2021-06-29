//game values
let min = 1,
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

//UI Elements
const game = document.querySelector('.game');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const guessBtn = document.getElementById('guess-btn');
const guessInput = document.querySelector('#guess-input');
const message = document.querySelector('.message')



// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

//Play again event listener
game.addEventListener('mousedown', function (e) {
    if (e.target.className === 'play-again') {
        window.location.reload();
    }
})

//Listen for guess 
guessBtn.addEventListener('click', function () {
    let guess = parseInt(guessInput.value);

    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }

    //check for win
    if (guess === winningNum) {
        gameOver(true, `${winningNum} is correct, You Win!`)

    } else {
        //wrong number
        guessesLeft -= 1;
        if (guessesLeft === 0) {
            //game over
            gameOver(false, `Game over! You Lost! The correct number was ${winningNum}`)
        } else {
            //game continues just a wrong answer
            guessInput.value = '';
            setMessage(`${guess} is incorrect, ${guessesLeft} guesses left`, 'black');
        }
    }
});

function gameOver(won, msg) {
    let color;
    won === true ? color = 'green' : color = 'red';
    //disable the input
    guessInput.disabled = true;
    //set win colors
    guessInput.style.borderColor = color;
    message.style.color = color;
    //disply win message
    setMessage(msg);

    guessBtn.value = 'Play Again'
    guessBtn.className += 'play-again'
}

function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}


