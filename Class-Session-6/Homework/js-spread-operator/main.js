// Three places you can use spread

// In function calls
console.log(Math.min(45, 25, 98, 78, 56, 23, -5)); // -5
const temperatures = [45, 25, 98, 78, 56, 23, -5];
console.log(Math.min(temperatures)); // NaN
console.log(Math.min(...temperatures)); // -5
const tvShows = ["Invincible", "The Boys", "Andor"];
console.log(tvShows); // (3) ['Invincible', 'The Boys', 'Andor']
console.log(...tvShows); // Invincible The Boys Andor
console.log("this is how you spell MO: ", "Missouri"); // Missouri
console.log("this is how you spell MO: ", ..."Missouri"); // M i s s o u r i

// In array literals
const parents = ["Jill", "Cid"];
const kids = ["Torgal", "Clive Jr.", "Cid Jr."];
const fullFamily = [parents, kids];
console.log(fullFamily); // (2) [Array(2), Array(3)]
const fullFamily2 = [...parents, ...kids];
console.log(fullFamily2); // (5) ['Jill', 'Cid', 'Torgal', 'Clive Jr.', 'Cid Jr.']
// NOTE: Spread only goes one level deep when copying an array and will not perform a deep copy of nested arrays!

// In object literals
const lion = { hasTail: true, legs: 4 };
const eagle = { canfly: true };
const hybrid = { name: "Gryphon", ...lion, ...eagle };
console.log(hybrid); // {name: 'Gryphon', hasTail: true, legs: 4, canfly: true}
