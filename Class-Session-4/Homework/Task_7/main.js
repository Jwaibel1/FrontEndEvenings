let x = 1;

function func() {
  console.log(x); // ?

  let x = 2;
}

func();
// the local variable x is known to the engine from the beginning of the function,
// but "uninitialized" (unusable) until let ("dead zone")
// hence the error
