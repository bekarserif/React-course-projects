// import './utils.js';
// import substract, { square,add } from './utils';

// console.log('app.js is running!');
// console.log(square(4));
// console.log(add(10,24));
// console.log(substract(24,10))


// import isSenior ,{isAdult,canDrink} from './person.js';

// console.log(isAdult(14));
// console.log(canDrink(22));
// console.log(isSenior(64)); 

import validator from 'validator';
import React from 'react';
import ReactDOM from 'react-dom';

console.log(validator.isEmail('test@test.com'));
const template=<p>testing 123</p>

ReactDOM.render(template, document.getElementById('app'));