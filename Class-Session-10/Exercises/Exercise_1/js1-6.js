var myName = prompt("Enter your name: ");
if (myName == null) {
    alert("Please put in a name");
}
else {
    console.log("Hello ".concat(myName.toString(), ", how are you?"));
}
