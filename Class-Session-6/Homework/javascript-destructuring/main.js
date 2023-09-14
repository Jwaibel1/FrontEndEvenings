// Accessing Objects the Old way

let person = {
  firstName: "Joshua",
  lastName: "Waibel",
};

let personFirstName = person.firstName;
let personLastName = person.lastName;

console.log(personFirstName); // Joshua
console.log(personLastName); // Waibel

// Accessing Objects the New way

let { firstName, lastName } = person;

console.log(firstName); // Joshua
console.log(lastName); // Waibel

// We can also RENAME the variables with the New way

let { firstName: fName, lastName: lName } = person;

console.log(fName); // Joshua
console.log(lName); // Waibel

//what happens if you destruct a property that does not exist

let { middleName } = person;

console.log(middleName); // undefined

// Setting defaults when objec destructuring

let guy = {
  firstName: "Joshua",
  lastName: "Waibel",
  currentAge: 26,
};

let { betweenName = "", currentAge: age = 20 } = guy; // betweenName = middleName just had to change the name for syntax

console.log(betweenName); // blank space " "
console.log(age); // 26, age is already provided so the default value is ignored

// Array

const arr = [1, 2, 3];

// Prior to ES6, when you want to assign the element of the array to variables, you typically do it like this:

let x = arr[0];
let y = arr[1];
let z = arr[2];

console.log(x); // 1
console.log(y); // 2
console.log(z); // 3

// But now ES6 introduces the array detructuring syntax that provides an alternative way to assign elements of an array to variables:

let [n, b, c] = arr;

console.log(n); // 1
console.log(b); // 2
console.log(c); // 3

// An Array of multiple values can also be assigned to multiple variables

let [w, a, s, d] = ["up", "left", "down", "right"];

console.log(w);
console.log(a);
console.log(s);
console.log(d);

// you can skip items in an array with the commas
// const [x,,z] = arrValue;

// assigning remaining elements with elipses

const man = {
  moniker: "Joshua Waibel",
  age: 26,
  gender: "Male",
};

let { moniker, ...rest } = man;

console.log(moniker); // Joshua Waibel
console.log(rest); // {age: 26, gender: 'Male'}
// also works with an array, const names = ["John", "Bill", "Tedd", "Bob"], moniker would log "John" and rest would log "Bill", "Tedd", "Bob"

// !Careful: the variable with the spread syntax cannot have a trailing comma. You should use the variable with the spread syntax as the last variable

// In this example, two variables are swapped using the destructuring assignment syntax

let name1 = "Joshua";
let name2 = "Patrick";

// swapping variables
[name1, name2] = [name2, name1];

console.log(name1); // Patrick
console.log(name2); // Joshua

// A function may return an object or null in some situations. For example:

function getPerson() {
  return null;
}

/* let { thisName, thatName } = getPerson(); */
//this will throw an error

// you can avoid this, you can use the OR operator (||) to fallback the null object to an empty object:
let { thisName, thatName } = getPerson() || {};

console.log(thisName, thatName); // undefined undefined

// Nested Object Destructuring

let member = {
  id: 1,
  alias: {
    firstAlias: "Joshua",
    lastAlias: "Waibel",
  },
};

// here's how to destructure it...
/* let {
  id,
  alias: { firstAlias, lastAlias },
} = member;

console.log(id);
console.log(alias); // undefined or blank
console.log(firstAlias);
console.log(lastAlias); */

// It's possible to destructure nested properties as well as the parent property:

let {
  id,
  alias: { firstAlias, lastAlias },
  alias,
} = member;

console.log(id); // 1
console.log(firstAlias); // Joshua
console.log(lastAlias); // Waibel
console.log(alias); // {firstAlias: 'Joshua', lastAlias: 'Waibel'}

// Destructuring Function Arguments

/* let displayFullName = (people) => `${people.firstPerson} ${people.lastPerson}`; */

let displayFullName = ({ firstPerson, lastPerson }) =>
  `${firstPerson} ${lastPerson}`;

let people = {
  firstPerson: "Joshua",
  lastPerson: "Waibel",
};

displayFullName(people);
console.log(displayFullName(people)); // Joshua Waibel

// It's possible to destructure the object argument passed into the function...

// the ES6 version is cleaner with practice
