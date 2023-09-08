// Global
let username = "Joshua";

function changeNameGlobal(name) {
  let username = name;
  console.log(username);
}

// Local
function changeNameLocal() {
  let username = "Joshua";
  console.log(username);
}

// Call both variables here
changeNameGlobal("Johnny");
changeNameLocal();
