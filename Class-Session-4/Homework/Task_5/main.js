let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}

sayHi(); // the task says the result should be an error because the function sayHi is declared inside the if so it only lives inside it, but there must have been some updates because it's working just fine for me.
