function checkAge(age) {
  if (age > 18) {
    return true;
  } /* else { */
  return confirm("Did parents allow you?");
  /* } */
}
// else can be removed and there would be no difference
