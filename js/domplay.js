// it will determine all the elements from the HTML by the class and creat an array
/*let actors = document.querySelectorAll(".hampletLines");
console.log(actors);

// it will go through each element of an array and change the color
for (let i = 0; i < actors.length; i++) {
    actors[i].style.backgroundColor = "yellow";
} */

function myAlert() {
  alert("I'm clicked!");
}

let spans = document.querySelectorAll("#play span");

console.log(spans);

for (const mySpan of spans) {
  mySpan.addEventListener("click", myAlert);
  alert(mySpan.dataset.actor);
}

// el is an elais for the elemnt we are affecting. el is var that applies in the function.
function highlight(el) {
  if (el.style.backgroundColor == "yellow") {
    el.style.backgroundColor = "white";
  } else {
    el.style.backgroundColor = "yellow";
  }
}
