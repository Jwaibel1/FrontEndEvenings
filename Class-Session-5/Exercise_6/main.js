function hoistingTest() {
  console.log(name);

  let name = "Joshua";
}

hoistingTest(); // ReferenceError: Cannot access 'name' before initialization
