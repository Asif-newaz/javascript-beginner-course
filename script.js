console.log('hello');

// alert('Hey, whats up?');

//VARIABLES
// var b = 'smoothie';
// console.log(b);

// var someNumber = 45;
// console.log(someNumber);

// document.getElementById('someText').innerHTML = 'Hey There';

/*
var age = prompt('What is your age?');

document.getElementById('personAge').innerHTML = age;
*/

//NUMBERS IN JAVASCRIPT
// var num1 = 5.7;
// console.log(5 * 10);

// var num1 = 10;
// num1 = num1 + 1;
// console.log(num1);

// var num1 = 10;

//INCREMENT num1 BY 1
// num1++;

//DECREMENT num1 BY 1
// num1--;
// console.log(num1);

//DIVIDE, MULTIPLY *, REMAINDER %

/*
console.log(num1 % 3);
console.log(num1 / 3);
console.log(num1 * 3);
*/

//INCREMENT/DECREMENT num1 BY 10
// num1 += 10;
// num1 -= 10;
// console.log(num1);

/*
FUNCTIONS
1. Create a function
2. Call the function
*/

//CREATION A FUNCTION
/*
function fun() {
    console.log('This is a function');
}
*/

//CALL
// fun();

/*
LET'S CREATE A FUNCTION THAT TAKE IN NAME AND SAYS HELLO FOLLOWED BY YOUR NAME

FOR EXAMPLE
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

//HOW DO ARGUMENT WORK IN FUNCTION
//HOW DO WE ADD 2 NUMBERS TOGETHER IN FUNCTION

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

//WHILE LOOP
/*
var num = 0;

while (num < 10) {
    console.log(num);
    num += 1;
}
*/

//FOR LOOP
/*
for (let num = 0; num <= 10; num++) {
    console.log(num);
}
*/

//DATA TYPE
/*
let yourAge = 18; //number
let yourName = 'Asif'; //String
let name = {first: 'Jane', last: 'Doe'}; //Object
let truth = false; //Boolean
let groceries = ['Apple', 'Banana', 'Orange']; //Array
let random; //undefined
let nothing = null; //value null
console.log(typeof yourAge);
*/

//STRING IN JAVASCRIPT (COMMON METHOD)
/*
let fruit = 'Banana';
let splitFruit = 'Orange,Coconut,Wood Apple,Lemon';
*/

/*
let morefruits = 'Banana\nApple';   //new line

console.log(morefruits);
*/

/*
console.log(fruit.length);
console.log(fruit.indexOf('nan'));
console.log(fruit.slice(0, 3));
console.log(fruit.replace('Ban', '123'));
console.log(fruit.toUpperCase(fruit));
console.log(fruit.toLowerCase(fruit));
console.log(fruit.charAt(2));
console.log(fruit[2]);
console.log(splitFruit.split(',')); //Split by a comma
console.log(splitFruit.split('')); //Split by a character
*/


//ARRAY
//WE CAN WRITE AN ARRAY IN TWO WAYS

//THIS IS THE FIRST WAY
// let fruits = ['Banana', 'Apple', 'Orange', 'Pineapple'];

//AND THIS IS ANOTHER WAY
// let fruits = new Array('Banana', 'Apple', 'Orange', 'Pineapple');

/*
console.log(fruits[2]); //access value at index 2nd

fruits[0] = 'Pear';
console.log(fruits);
console.log(fruits[0]);

//A LOOP HAS BEEN RUN IN ARRAY
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
*/

// ARRAY COMMON METHOD
// let commonMethodArray = ['Banana', 'Apple', 'Orange', 'Pineapple'];

// console.log('to String', commonMethodArray.toString());
// console.log(commonMethodArray.join(' * '));
// console.log(commonMethodArray.pop(), commonMethodArray); //Removes last item
// console.log(commonMethodArray.push('blackberries'), commonMethodArray); //Appends item
// console.log(commonMethodArray[3]);
// commonMethodArray[4] = 'new fruit';
// console.log(commonMethodArray);

// commonMethodArray.shift();
// console.log(commonMethodArray); //Remove first element from an Array
// commonMethodArray.unshift('Kiwi');
// console.log(commonMethodArray); //Add first element to an Array
// let vegetables = ['Asparagus', 'Tomato', 'Broccoli'];
// let allGroceries = commonMethodArray.concat(vegetables); //Combine arrays
// console.log(allGroceries);
// console.log(allGroceries.slice(1, 4));
// console.log(allGroceries.reverse());
// console.log(allGroceries.sort());


// let someNumber = [5, 10, 2, 25, 3, 255, 1, 2, 5, 334, 321, 2];
// console.log(someNumber.sort(function(a,b) {return a-b})); //Sorted in ascending order
// console.log(someNumber.sort(function(a,b) {return b-a})); //Sorted in descending order

/*
let emptyArray = new Array();
for (let num = 0; num <= 10; num++) {
    emptyArray.push(num);
}

console.log(emptyArray);
*/



// OBJECTS IN JAVASCRIPT
/*
let student = {
    first: 'Asif',
    last: 'Newaz',
    age: 26,
    height: 175,
    studentInfo: function (){
        return this.first + '\n' + this.last + "\n" + this.age;
    }
};
*/

// console.log(student.first);
// console.log(student.last);
// student.first = 'notAsif'; //change value
// console.log(student.first);
// student.age++;
// console.log(student.age);
// console.log(student.studentInfo());

//Conditionals, Control flows(if else)
//18-35 is the target demographic of this video
// && AND
// || OR

// var age = prompt('what is your age?');

/*
if ( (age >= 18) && (age <= 35) ) {
    status = 'target demo';
    console.log(status);
} else {
    status = 'not my audience';
    console.log(status);
}
*/


// Switch statements
// Differentiate between weekday vs weekend
// Day 0 --> Sunday --> weekend
// Day 1 --> Monday --> weekday
// Day 2 --> Tuesday
// Day 3 --> Wednesday
// Day 4 --> Thursday --> weekday
// Day 5 --> Friday -->weekend
// Day 6 --> Saturday --> weekend
switch (5) {
    case 0:
        text = 'weekend';
        break;
    case 5:
        text = 'weekend';
        break;
    case 6:
        text = 'weekend';
        break;

    default:
        text = 'weekday';
}

console.log(text);
