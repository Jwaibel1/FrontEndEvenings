function functionFactory(param) {
  return innerFunction();
  function innerFunction() {
    console.log("hello " + param);
  }
}

functionFactory("Joshua");
