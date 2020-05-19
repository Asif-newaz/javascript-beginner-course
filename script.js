console.log('hello');

// alert('Hey, whats up?');

//Variables
// var b = 'smoothie';
// console.log(b);

// var someNumber = 45;
// console.log(someNumber);

// document.getElementById('someText').innerHTML = 'Hey There';

/*
var age = prompt('What is your age?');

document.getElementById('personAge').innerHTML = age;
*/

//Numbers in JavaScript 
// var num1 = 5.7;
// console.log(5 * 10);

// var num1 = 10;
// num1 = num1 + 1;
// console.log(num1);

// var num1 = 10;

//Increment num1 by 1
// num1++;

//Decrement num1 by 1
// num1--;
// console.log(num1);

//Divide, multiply *, remainder %

/*
console.log(num1 % 3);
console.log(num1 / 3);
console.log(num1 * 3);
*/

//Increment/Decrement num1 by 10
// num1 += 10;
// num1 -= 10;
// console.log(num1);

/*
Functions
1. Create a function
2. Call the function
*/

//Creating a function
/*
function fun() {
    console.log('This is a function');
}
*/

//call
// fun();

/*
Let's create a function that take in name and says hello followed by your name

For example
Name: "Asif"
Return: "Hello Asif"
*/
/*
function greeting() {
    var name = prompt('what is your name');
    var result = 'Hello' + ' ' + name; //String concatenation
    console.log(result);
}
*/

// greeting();

//How do argument work in function
//How do we add 2 numbers together in a function

/*
function sumNumber(a, b) {
    var result = a + b;
    console.log(result);
}
*/
// sumNumber(10, 10);

/*
function greeting(yourName) {
    var result = 'Hello' + ' ' + yourName; //String concatenation
    console.log(result);
}
var name = prompt('what is your name');

greeting(name);
*/

//While loop
/*
var num = 0;

while (num < 10) {
    console.log(num);
    num += 1;
}
*/

//for Loop
/*
for (let num = 0; num <= 10; num++) {
    console.log(num);
}
*/

//Data types
let yourAge = 18; //number
let yourName = 'Asif'; //String
let name = {first: 'Jane', last: 'Doe'}; //Object
let truth = false; //Boolean
let groceries = ['Apple', 'Banana', 'Orange']; //Array
let random; //undefined
let nothing = null; //value null
console.log(typeof yourAge);

//String in JavaScript (common methods)
let fruit = 'Banana';

/*
let morefruits = 'Banana\nApple';   //new line

console.log(morefruits);
*/

console.log(fruit.length);
console.log(fruit.indexOf('nan'));
console.log(fruit.slice(0, 3));
console.log(fruit.replace('Ban', '123'));
console.log(fruit.toUpperCase(fruit));
console.log(fruit.toLowerCase(fruit));
console.log(charAt);