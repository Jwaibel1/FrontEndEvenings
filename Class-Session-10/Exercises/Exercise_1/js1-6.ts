const myName: string | null = prompt("Enter your name: ");

if (myName == null) {
  alert("Please put in a name");
} else {
  console.log(`Hello ${myName.toString()}, how are you?`);
}
