function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm("Did parents allow you?");
  }
}

// ? is a shortened form of if else(condition ? true : false)
// same using ? to shorten
function checkAge(age) {
  return age > 18 ? true : confirm("Did parents allow you?");
}

// same using OR || to shorten
function checkAge(age) {
  return age > 18 || confirm("Did parents allow you?");
}
