const body = document.body;
const input = document.querySelector("input[type=text]");
const overlay = document.querySelector(".overlay");

function showFloater() {
  body.classList.add("show-floater");
}

function closeFloater() {
  if (body.classList.contains("show-floater")) {
    body.classList.remove("show-floater");
  }
}

input.addEventListener("focusin", showFloater);
input.addEventListener("focusout", closeFloater);
overlay.addEventListener("click", closeFloater);

// ----------------------------------------------------------------------

const todoList = document.querySelector(".todo-list");
const todoForm = document.querySelector(".todo-form");

function createTask(e) {
  e.preventDefault();

  if (!input.value) {
    alert("Nothing to do today?");
    return;
  }

  const task = input.value;
  const newTask = document.createElement("p");
  newTask.className = "new-task";
  newTask.innerText = task;
  todoList.appendChild(newTask);
  todoForm.reset();
}

todoForm.addEventListener("submit", createTask);
