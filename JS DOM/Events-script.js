// --------------------
// EVENTS BASICS
// --------------------
// Event: Screen par koi action hona
// Event Listener: Us action ka reaction

// Example: Click event
// let p = document.querySelector("p");
// p.addEventListener("click", function () {
//   p.style.color = "green";
// });

// Example: Double Click event
// let ptag = document.querySelector("p");
// ptag.addEventListener("dblclick", function () {
//   ptag.style.color = "red";
// });

// Another way to add event listener
// let ptag2 = document.querySelector("p");
// function dblclick() {
//   ptag2.style.color = "red";
// }
// ptag2.addEventListener("dblclick", dblclick);

// Remove event listener
// ptag2.removeEventListener("dblclick", dblclick);

// --------------------
// CHANGE EVENT (Dropdown Example)
// --------------------
let select = document.querySelector("select");
let device = document.querySelector("#device");

select.addEventListener("change", function (dets) {
  device.textContent = `${dets.target.value}, Device Selected`;
});

// --------------------
// KEYBOARD EVENT
// --------------------
let h1 = document.querySelector("h1");

window.addEventListener("keydown", function (type) {
  if (type.key === " ") {
    h1.textContent = "SPC";
  } else {
    // h1.textContent = type.key;
  }
});

// --------------------
// FILE UPLOAD EXAMPLE
// --------------------
let btn = document.querySelector("#btn");
let fileinp = document.querySelector("#fileinp");

btn.addEventListener("click", function () {
  fileinp.click();
});

fileinp.addEventListener("change", function (details) {
  const file = details.target.files[0];
  if (file) {
    console.log(file.name);
    btn.textContent = file.name;
  } else {
    console.log("No file selected");
  }
});

// --------------------
// FORM SUBMIT EVENT
// --------------------
let form = document.querySelector("form");
let inputs = document.querySelectorAll("input");
let main = document.querySelector("#main");

form.addEventListener("submit", function (dts) {
  dts.preventDefault();

  let card = document.createElement("div");
  card.classList.add("card");

  let profile = document.createElement("div");
  profile.classList.add("profile");

  let img = document.createElement("img");
  img.setAttribute("src", inputs[0].value);

  let h3 = document.createElement("h3");
  h3.textContent = inputs[1].value;

  let h5 = document.createElement("h5");
  h5.textContent = inputs[2].value;

  let p = document.createElement("p");
  p.textContent = inputs[3].value;

  // Append elements
  profile.appendChild(img);
  card.appendChild(profile);
  card.appendChild(h3);
  card.appendChild(h5);
  card.appendChild(p);
  main.appendChild(card);

  // Clear inputs
  inputs.forEach(function (inp) {
    if (inp.type !== "submit") {
      inp.value = "";
    }
  });
});

// --------------------
// MOUSE EVENTS
// --------------------
let abcd = document.querySelector("#abcd");

// Mouseover
abcd.addEventListener("mouseover", function () {
  abcd.style.backgroundColor = "aqua";
});

// Mouseout
abcd.addEventListener("mouseout", function () {
  abcd.style.backgroundColor = "red";
});

// window.addEventListener("mousemove", function (move) {    // Cursor k saath box chalta hai
//   abcd.style.left = move.clientX + "px";
//   abcd.style.top = move.clientY + "px";
// });

// Event Bubbling - Event jahaa pe occur ho rha if vahaa pe event nhi laga to vo parent pe dhunegaa uspe bhi nhi mila to uppar uppar jaate jaayega.
// And if child pe listener and parent pe bhi rhe to dono listener chalengee.
let nav = document.querySelector("#nav");      // ye event button pe tha but vaha pe event nhi tha to usne nav apne parent pe jump kiya and nav pe event tha to work kr gya
nav.addEventListener("click", function(){
  alert("Clicked");
});


// Event Capturing: Jab event raise karte hai to parent se child pe aata hai and uska ulta mtlb (event child se parent tak jaye) karne k liye event capturing use hota hai.
let button = document.querySelector("button");
let c = document.querySelector(".c");
let b = document.querySelector(".b");
let a = document.querySelector(".a");

button.addEventListener("click", function () {
  console.log("Button Clicked");
});

c.addEventListener("click", function () {
  console.log("C Clicked");
});

b.addEventListener("click", function () {
  console.log("B Clicked");
});

a.addEventListener("click", function () {
  console.log("A Clicked");
});

// --------------------
// PRACTICE TASKS
// --------------------

// 1. Background color change via dropdown
let bg = document.querySelector("#colorSelect");
let h2 = document.querySelector("h2");

bg.addEventListener("change", function (val) {
  document.body.style.backgroundColor = val.target.value;
  h2.textContent = `${val.target.value} Color Selected`;
});

// 2. Font size changer
let para = document.querySelector("#para");
let fontSelect = document.querySelector("#fontSelect");

fontSelect.addEventListener("change", function (change) {
  if (change.target.value === "Small") {
    para.style.fontSize = "12px";
  } else if (change.target.value === "Medium") {
    para.style.fontSize = "15px";
  } else if (change.target.value === "Large") {
    para.style.fontSize = "18px";
  } else {
    para.textContent = `${change.target.value} Selected`;
  }
});

// 3. Event Bubbling Example:
let ul = document.querySelector("ul");
ul.addEventListener("click", function(li){
  li.target.classList.toggle("lt");    //CSS se Direct Style add karne ka tarika.
           // Using toggle that if class hai to hata dega nhi hai to laga dega isse we achieved ki tap karenge style lagega phir click karenge to hat jayega style.
  // li.target.style.textDecoration= "line-through";
  // li.target.style.color= "yellow";
});

// Find total count 
let input = document.querySelector("input");
let span = document.querySelector("span"); //Span me changes karne hai isliye span.
input.addEventListener("input", function () {
  // span.textContent = input.value.length;  // Isse normal char count hogaa bs.
  let left = 20 - input.value.length;
  span.textContent = left;
  if (left < 0){           // If value 0 k neech gyaa to red me show hogaa
    span.style.color = "red";
  }
  else{
    span.textContent = left;
    span.style.color = "black";
  }
});


