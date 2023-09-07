// MY ATTEMPT
/* const user = {
  firstName: "John",
  lastName: "Smith",
  age: 25,
}; */

function info() {
  let user = {
    firstName: "John",
    lastName: "Smith",
    age: 25,
    country: "England",
  };
  console.log(
    user.firstName,
    user.lastName,
    "is",
    user.age,
    "years old...and lives in",
    user.country
  );
}

/* let firstName = "James"; */ // no problem because the variables are within the local scope

info();

let game = "Sonic";

if (true) {
  let game = "Mario"; // game is changed to Mario within the if block
  console.log(game);
}

console.log(game); // outside it remains Sonic because of the local variable

// VIDEO VERSION
/* let firstName = "John";
let lastName = "Smith";
let age = 25; */

function user() {
  let firstName = "John";
  let lastName = "Smith";
  let age = 25;
  let country = "England";
  console.log(
    firstName,
    lastName,
    "is",
    age,
    "years old...and lives in",
    country
  );
}

let firstName = "James"; // no problem because the variables are within the local scope

user();
