function mainFunction() {
  let a = 4;
  let b = 6;
  return secondaryFunction();
  function secondaryFunction() {
    console.log(a + b);
  }
}

mainFunction();
