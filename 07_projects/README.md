# Project related to DOM

## project link
[click here](
    https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html
)

# Project Solution
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode-rmaqgy?file=1-colorChanger%2Fchaiaurcode.js)



## project 1

 ```javascript
 const buttons = document.querySelectorAll('.button');
// console.log(buttons)
const body = document.querySelector('body');

buttons.forEach((button) => {
  // console.log(button);
  button.addEventListener('click', (e) => {
    // console.log(e);
    // console.log(e.target);
    if (e.target.id === 'grey') {
      // body.style.backgroundColor = 'grey';
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === 'white') {
      // body.style.backgroundColor = 'white';
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === 'blue') {
      // body.style.backgroundColor = 'blue';
      body.style.backgroundColor = e.target.id;
    } else if (e.target.id === 'yellow') {
      // body.style.backgroundColor = 'yellow';
      body.style.backgroundColor = e.target.id;
    }
  });
});
```

## project 2

```javascript
const form = document.querySelector('form');
// this use cases will give you empty result
// const height = parseInt(document.querySelector('#height').value);

form.addEventListener('submit', function (e) {
  e.preventDefault();
  // console.log('submit');

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.getElementById('results'); // uniquely identify, so less time required
  // const result = document.querySelector('#results');

  if (height === '' || height <= 0 || isNaN(height)) {
    result.innerHTML = `Please give a valid height`;
  } else if (weight === '' || weight <= 0 || isNaN(weight)) {
    result.innerHTML = `Please give a valid weight`;
  } else {
    const bmi = `= ${(weight / ((height / 100) * (height / 100))).toFixed(2)}`; // in two dotted dicimal
    result.innerHTML = bmi;
  }
});
```

## project 3

```javascript
const clock = document.getElementById('clock');
clock.innerHTML = `${new Date().toLocaleTimeString()}`;

// to update every second
// setInterval(() => {
//   clock.innerHTML = `${new Date().toLocaleTimeString()}`;
// }, 1000);
```

## project 4

```javascript
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
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
```

## project 6

```javaScript
// Function to generate a random hex color
function getRandomHexColor() {
  const hex = '0123456789ABCDEF';
  let color = '#'; // Start with the hash symbol for the hex color code
  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * 16); // Get a random index from 0 to 15
    color += hex[randomIndex]; // Append the random hex digit "ABCDEF" to the color string
  }
  return color;
}

let intervalId;

document.querySelector('#start').addEventListener('click', () => {
  clearInterval(intervalId); // Clear any existing intervals to avoid multiple intervals running simultaneously
  intervalId = setInterval(() => {
    const randomColor = getRandomHexColor();
    const body = document.querySelector('body');
    body.style = `background-Color:${randomColor}`;
  }, 1000);
});

document.querySelector('#stop').addEventListener('click', () => {
  clearInterval(intervalId);
  // console.log(intervalId);
});
```