function makeWorker() {
  let name = "Pete";

  return function () {
    alert(name);
  };
}

let name = "John";

let work = makeWorker();

work(); // Pete is shown, because it is the local variable where as John is the global variable.
