const randomNumber = parseInt(Math.random()*100+1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHigh');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');
let previousGuesses = [];
let numGuesses = 1;
let playGame = true;

if(playGame){
    submit.addEventListener('click',function(e) {
        e.preventDefault();
        const guess = parseInt(userInput.value)
        validateGuess(guess);
    });
}

function validateGuess(guess){

   if(isNaN(guess)){
    alert('Please enter a valid number');
   } else if(guess <1){
    alert('Please enter a  number bigger than one');
   }
   else if(guess >100){
    alert('Please enter a valid number less than 100');
   }

   else{
    previousGuesses.push(guess);
    if(numGuesses === 11){
        displayGuesses(guess)
        displayMessage(`Game Over! Number was ${randomNumber}`)
        endGame();
    }
    else{
        displayGuesses(guess)
        checkGuess(guess)
    }
   }
}


function checkGuess(guess) {
     if(guess===randomNumber){
        displayMessage(`you guessed correctly!`)
        endGame();
     }
     else if(guess < randomNumber){
        displayMessage(`you guessed too low!`)
     }
     else if(guess > randomNumber){
        displayMessage(`you guessed too high!`)
     }
}

function displayGuesses(guess) {

    userInput.value = '';
    guessSlot.innerHTML += `${guess}  `;
    numGuesses++;
    remaining.innerHTML = `${11 - numGuesses}  `;

}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;


}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame()
}

function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click',function() {
        randomNumber = parseInt(Math.random()*100+1);
        previousGuesses = [];
        numGuesses = 1;
        guessSlot.innerHTML = '';
        lowOrHi.innerHTML = '';
        remaining.innerHTML = `${11 - numGuesses}  `;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    })
}