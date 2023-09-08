function outerFunction() {
  let outerVar = "I'm outside!";

  function innerFunction() {
    let innerVar = "I'm inside!";
    console.log(outerVar); // Can we access outerVar?
    console.log(innerVar); // Can we access innerVar?
  }

  innerFunction(); // the inner function is being called within the outer function and so it is accessible
}

outerFunction(); // this calls the outer function which calls the inner function so both are displayed

// I'm outside!
// I'm inside!
