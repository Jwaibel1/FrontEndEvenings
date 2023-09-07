let myName = "Joshua";

function printName() {
  console.log(myName);
}

myName = "Johnny";

printName();

myName = "Steve";

printName();

// common use case of closures
function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    console.log("Outer Variable: " + outerVariable);
    console.log("Inner Variable: " + innerVariable);
  };
}

const newFunction = outerFunction("outside");
newFunction("inside");

// when a function is defined inside of another function the inner function has access to the variables and scope of the outer function even if the outer function finishes executing and those variables are no longer accessible outside of that function
