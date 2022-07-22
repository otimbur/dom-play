// it will determine all the elements from the HTML by the class and creat an array
/*let actors = document.querySelectorAll(".hampletLines");
console.log(actors);

// it will go through each element of an array and change the color
for (let i = 0; i < actors.length; i++) {
    actors[i].style.backgroundColor = "yellow";
} */

// the function determines that we are ableto have the connection
function myAlert() {
  alert("I'm clicked!");
}
// setting an array with the <span> on the the page
let spans = document.querySelectorAll('#play span');

// loopinf throuth array, adding an event which represent the click on the page that
// will highlight the line
for (const mySpan of spans) {
  mySpan.addEventListener('click', function (ev) {
    highlightActor(mySpan.dataset.actor);
  });
  //alert(mySpan.dataset.actor);
}

// this for loop is before the page loads
// if the id=
function highlightActor(actor) {
  for (const mySpan of spans) {
    if (actor == mySpan.dataset.actor) {
      //current actor, highlihjt
      mySpan.style.backgroundColor = 'black';
    } else {
      //not current actor, remove highlight
      mySpan.style.backgroundColor = '';
    }
  }
  //alert(mySpan.dataset.actor);
}

// el is an elais for the elemnt we are affecting. el is var that applies in the function.
function highlight(el) {
  if (el.style.backgroundColor == 'black') {
    el.style.backgroundColor = '';
  } else {
    el.style.backgroundColor = 'black';
  }
}
