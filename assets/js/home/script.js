function showTask() {
  var x = document.getElementById("task");
  x.classList.toggle("hidden");
}

var taskname = document.getElementById("taskname");
var desc = document.getElementById("taskDescription");
var datetime = document.getElementById("datetime");

function addtasktoschedule() {
  document.getElementById("showtaskname").innerHTML += taskname.value;
  document.getElementById("showdescription").innerHTML += desc.value;
  document.getElementById("showtime").innerHTML += datetime.value;
  console.log(taskname.value);
}
