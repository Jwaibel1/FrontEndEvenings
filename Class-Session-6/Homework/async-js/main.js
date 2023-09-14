function callbackHell() {
  setTimeout(() => {
    const data = { user: "John" };
    console.log(data);
    setTimeout(() => {
      console.log("Data has been updated");
    }, 1000);
  }, 500);
}

callbackHell();

const prom = new Promise((resolve, reject) => {
  setTimeout(() => resolve("This is my data"), 2000);
});

prom.then((res) => {
  console.log(res);
});

const promise = new Promise((resolve, reject) => {
  //   resolve("We did it!");
  reject("UH OH!");
});

promise
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

async function getTodos() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  console.log(1);
  console.log(response);
  console.log(2);
}
getTodos();
