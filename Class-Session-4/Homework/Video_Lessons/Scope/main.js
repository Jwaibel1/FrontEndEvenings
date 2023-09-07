let game = "Sonic"; // glabal variable, can be used anywhere

console.log(game);

function title() {
  console.log(`${game}`);
}

title();

if (true) {
  console.log(`${game}`);
}

function a() {
  let game = "Sonic"; // local variable, can only be used within the function, functional scope is a different type of local scope
  console.log(game);
}

a();

if (true) {
  // variables can have the same name if they are defined in different call blocks
  let game = "Mario";
  console.log(game);
}

// if (true) {
//   console.log(game); // error: game is not defined
// }

// console.log(game); // error: game is not defined

if (true) {
  var greeting = "hello";
}
console.log(greeting); // var is read similarly as global scope, let and const are better for containing variables within a call block
