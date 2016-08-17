var one = document.getElementById("one").addEventListener("click", func)
one = 1

var add = document.getElementById("add").addEventListener("click", adding)
add = "+"

var emptyString = ""
/* emptyString += "1";
emptyString += "+";
console.log(emptyString); */

function func() {

  document.getElementById("display").innerHTML = one
  emptyString += one
}

function adding() {

  document.getElementById("display").innerHTML = add
  emptyString += "+"
}

/* func();
adding();
func();
console.log(emptyString); */


function addingOne() {

  emptyString = one
}
