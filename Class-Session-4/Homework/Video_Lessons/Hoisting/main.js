hello(); // the function can be called before it was created

function hello() {
  console.log("hello");
}

//Declaration
let game;
console.log(game); // undefined

// Intitialization
game = "Super Mario";
console.log(game); // Super Mario

// JS VARIABLE LIFECYCLE

// 1. Declaration
var author;
// 2. Initialization
author = "C.S. Lewis";
// 3. Usage
console.log(author);

// Declaration and Initialization most often hapen at the same time for example
// var author = "C.S. Lewis"

//Declarations can be hoisted but not assignments
console.log(money); // money is undefined but not an error because JS is hoisting the declaration of var money but it can't hoist the assigned value

var money; // let and const will return an error and only var will work this way

money = 0;

lion("Aslan");

function lion(name) {
  console.log(`The lion's name is ${name}`);
}
