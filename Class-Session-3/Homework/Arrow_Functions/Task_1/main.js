/* let func = function(arg1, arg2, ..., argN) {
    return expression;
} */
// faster way of saying the above function
/* let func = (arg1, arg2, ..., argN) => expression; */ // => evalutates and returns the results

// original
/* function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  () => alert("You agreed."),
  () => alert("You canceled the execution.")
); */

// even shorter
let ask = (question, yes, no) => (confirm(question) ? yes() : no());

ask(
  "Do you agree?",
  () => alert("You agreed."),
  () => alert("You canceled the execution.")
);
