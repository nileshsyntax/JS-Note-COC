let randomNumber = parseInt(Math.random()*100+1);


const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement('p');

// let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess)
    })
}

function validateGuess(guess){
    //
    if(isNaN(guess)){
        alert("Please, enter a valid number");
    } else if (guess < 1){
        alert("Please, enter a number more than 0");
    } else if (guess > 100){
        alert("Please, enter a number less than 100");
    } else {
        // prevGuess.push(guess);
        if(numGuess === 11){
            displayGuess(guess);
            displayMessage(`Game Over, Random number was${randomNumber}`);
            endgame()
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    //
    if(guess === randomNumber){
        displayMessage(`You guessed it right`);
        endgame();
    } else if (guess < randomNumber){
        displayMessage(`Number is too low`);
    } else if (guess > randomNumber){
        displayMessage(`Number is too high`);
    }
}

function displayGuess(guess){
    //
    userInput.value = '';
    guessSlot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message){
    // 
    lowOrHi.innerHTML = `<h3>${message}</h3>`;
}

function endgame(){
    //
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newgame();
}

function newgame(){
    // 
    const newGameBtton = document.querySelector('#newGame');
    newGameBtton.addEventListener('click', function(e){
        randomNumber = parseInt(Math.random()*100+1);
        // prevGuess = [];
        numGuess  = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    })
}