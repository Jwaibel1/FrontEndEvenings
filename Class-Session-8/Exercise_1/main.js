const myDiv = document.querySelector("#myDiv");
const paragraphs = document.querySelectorAll("p");

myDiv.style.backgroundColor = "#add8e6";

paragraphs.forEach((p) => {
  console.log(p.innerText);
});
