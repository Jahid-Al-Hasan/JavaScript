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