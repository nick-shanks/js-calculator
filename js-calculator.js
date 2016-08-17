var answer = ""

function oneNum() {
var one = document.getElementById("one").addEventListener("click", func)
one = 1
answer += one
}

function addNum() {
var add = document.getElementById("add").addEventListener("click", func)
add = "+"
answer += add
}

function func() {
  document.getElementById("compute").addEventListener("click", equal)
  function equal() {
    var x = ""
    document.getElementById("display").innerHTML = eval(answer)

  }
}

// var emptyString = ""
/* emptyString += "1";
emptyString += "+";
console.log(emptyString); */



// function adding() {
//
//   document.getElementById("display").innerHTML = add
//   emptyString += "+"
// }

/* func();
adding();
func();
console.log(emptyString); */


// function addingOne() {
//
//   emptyString = one
// }
