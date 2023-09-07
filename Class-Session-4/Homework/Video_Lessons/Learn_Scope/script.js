console.log(globalVar); // global variables can be called between files as well, which can be good or bad

import { exportedVar } from "./moduleScript.js";

console.log(exportedVar);

function test() {
  const b = 2;

  if (true) {
    const c = 3;
    console.log(b, c); // variables defined with const or let are block scoped
  }
}

test();

function test2() {
  var b = 2;

  if (true) {
    var c = 3;
  }

  console.log(b, c); // variables defined with var are function scoped
}

test2();

{
} // curly braces by themselves can be used to create a custom block without using a function or if statement etc.
