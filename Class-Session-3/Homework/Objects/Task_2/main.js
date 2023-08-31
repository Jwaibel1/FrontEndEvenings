let schedule = {};

schedule["8:30"] = "get up"; // commment this out to return true

function isEmpty(obj) {
  for (let key in obj) {
    // if the loop has started, there is a property
    return false;
  }
  return true;
}
alert(isEmpty(schedule));
