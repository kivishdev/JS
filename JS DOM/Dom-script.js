// DOM Manipulation 
// HTML se element select krnaa:\
// Selecting elements: getElementByld, getElementsByClassName, querySelector, querySelectorAll
// getElementByClassName: To select the elements from HTML by their id
// let abcd = document.getElementsByClassName("abcd");
// console.log(abcd);

// Queryselector: Selects only one tag if there are multiple same tags  Ex Selector:.class, #id, tag, [attr=value]
// let heading = document.querySelector("h1");
// console.log(heading);

// QuerySelectorAll: Saare same multiplee tags ko ek saath select kr dega and array jaisa structure return kregaa
// let allHeadings = document.querySelectorAll(".abcd");




// Steps to know manipulation kaise krnaa haii(Common Sense haii):
// 1st selection kaise krnaa haii
let h1 = document.querySelector("h1"); // We are selecting h1 from HTML
// 2nd: Change kyaa krnaa haii For.example: text
// 2A: Console.dir check kro in browser console:
console.dir(h1);  
// 2B: Check for the target text kahaa likha haii jahaa likhaa haii vo key daalke change krnaa
//So text badalna:
h1.textContent = "Hello Badhiya hai";
// Insert HTML in tag:
// h1.innerHTML = "<i>Hiii</>";  //changed to Itaalic

// h1.hidden = true; //Hides the main tag's Content
// h1.remove(); // Removes the tag




// css badalna
// attribute: getAttribute,setAtturibute,removeAttribute
// Type 1: 
// let a = document.querySelector("a");
// a.href = "https://www.google.com";

// Type 2: setAttribute
// let a = document.querySelector("a");
// a.setAttribute("href","https://www.google.com");  // href is the target and uske baaju me jo new value dena chahte hai selected attribute ko

// getAttribute- Attrbute the name maangna
// let a = document.querySelector("a");
// console.log(a.getAttribute("href"));

//  removeAttribute- Attribute remove kr denaa
let a = document.querySelector("a");
a.removeAttribute("href");  //No =w the href Attribute is deleted


// Dynamic DOM Manipulation:
//createElement : Jab HTML me vo element na ho to element bnaate haii JS se
// &
// Append/Prepend: Jahaa hume new element place krnaa hai html me pehle ya baadme
let h2 = document.createElement("h2");
h2.textContent="Hwlllo Jii Its a Bug.";
document.body.prepend(h2); // document.body = means document k andar body and prepend means code k top pe lgaa do

let h3 = document.createElement("h3");
h3.textContent="Hey0";
document.body.querySelector("div").prepend(h3);

// CSS Manipulation: JS se CSS Badalna
let newh1 = document.querySelector("h1");
newh1.style.color= "blue";
newh1.style.backgroundColor = "Orange";
newh1.style.fontFamily = "cursive";
newh1.style.textTransform = "Capitalize"

// JS se css me class hataye and lagaaye:
console.log(newh1);   // Checking there's any class naam ka element in browser
newh1.classList.add("Greet") // Adds a class Greet in h1. 

// To Remove Class:
// newh1.classList.remove();  // Removes the ClassList

// Toggle Class: CLass lagii hai to hataa degaa nhii lagi hai to lgaa dega
newh1.classList.toggle("Greet");

// Practice:
// Create a heading of the page by ID and change its name to "Welcome to Sheryians"
let heading = document.querySelector("h1");
heading.textContent= "Welcome to Sheriyans";

// Select all <li> elements and print their text Uisng a loop
let list = document.querySelectorAll("li");
list.forEach(function (value) {
    console.log(value.textContent);
}); 

// Add a title to a Div Dynamicallly:
let div = document.querySelector("div");
div.setAttribute("title", "Some Info");


// Remove the Disabled attribute from the Button inn the HTML
let btn = document.querySelector("button");
btn.removeAttribute("disabled");

// Ceate a element button
let button = document.createElement("button");
button.textContent = "Delete";
document.body.append("button");

//Tasks: 
// Create a new list item <li>New Task</li> and add it to the end of the ul
let ul = document.querySelector("ul");
let li = document.createElement("li");
li.textContent= "New Task";
ul.appendChild(li);

//Crete a new image element with the placeholder source and place it to the top of div\
let selectdiv = document.querySelector("div"); // Selects the first <div>
let DivImage = document.createElement("img");  // Creates an <img> element
DivImage.setAttribute("src", "https://via.placeholder.com/150"); // ✅ Use 'src' not 'placeholder'
DivImage.setAttribute("alt", "Placeholder Image");
selectdiv.prepend(DivImage); // ✅ Adds image before existing content


// add a highlist class to the every even items in a span
let span = document.querySelectorAll("span h3:nth-child(2n)");
span.forEach(function (val) {
    console.log(val);
    val.classList.add("highlight");
});
