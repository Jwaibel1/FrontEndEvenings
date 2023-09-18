// 1 grab elements from the dom
// 2 attach event listeners

// OPTION 1
function goCooCoo() {
  document.body.style.backgroundColor = "#C00C00";
}

// OPTION 2: use events directly on the element in js
const coffeeButtons = document.querySelectorAll(".coffee-btn");
/* coffeeButton.onclick = function () {
  document.body.style.backgroundColor = "#C0FFEE";
};

coffeeButton.onmouseenter = goCooCoo; */

function getCoffee() {
  document.body.style.backgroundColor = "#C0FFEE";
}

coffeeButtons.forEach(function (button) {
  button.onclick = getCoffee;
});

// OPTION 3: using addEventListener
const lalaButton = document.querySelector(".lala-btn");

function notListening() {
  document.body.style.backgroundColor = "#1A1A1A";
}

lalaButton.addEventListener("click", notListening);
lalaButton.addEventListener("mouseenter", goCooCoo);

const buttons = document.querySelectorAll("button");
buttons.forEach((button) =>
  button.addEventListener("mouseleave", notListening)
);
