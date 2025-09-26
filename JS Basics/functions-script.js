//What is functions, Why is functions used, How are functions madee

//What is functions- Code humne likaa vo turant na chale, but humaare command (via button, event, or direct call), hum jb chalaana chahe baad chale vo functions hotaa haii.
//Ex:  (Why is functions used)?
function dance() {
    console.log(dance);
    console.log(dance);
}
dance();   //Call krnee pe hi ye chalega
dance();  //4 baar dance print hoga console pe 

//Jitni baar call krengee utnii baar chalega we can reuse, rerun

//How are functions madee (Type-1)  //(Functions Declarations and Statements)
function lolo() {
    console.log("Heloo B");
}
lolo();

//Type 2 (Variable ka naam hi function ka naam hota haii to function k aage naming nhi dena hota)
let hny = function() {  
    console.log("Jumbo");
}

// Arrow Functions(Fat Arrow Function) declaration
let c = ()=>{
};

// Parameter and arguments
//Parameter = function ke andar ek variable jisme hum baad mein koi value daalte hain
//Argument = jo actual value hum daalte hain jab function call karte hain
//Ex:
function animal(v1) {  //v1 apnaa paremeter haii
    console.log(`${v1} naach rhaa haii`);
}
animal("ghoda");  //Ghodaa argument jo hum v1 parameter me daal rhee
animal("sher");
animal("hirad");

//Ex:
function Operators(a, b) {
    console.log(a + b);
}
Operators(2, 25);

//Default, Rest and Spread Parameterr
//Default- Jab argument me koi value nhii rahee to hum khudse ek value parameter me daal sktee haii 
//Default Parameterr mtlb parameter me ek default valuee denaa 
function add(a = 0, b= 1) {
    console.log(a + b);
}
add(); //Ouput =1 bcoz humne ek default value khud di in the parameter jb argument me koii value nhii haii

//Rest and Spread Parameterr 
//Jab arguments me bohot values ho uske liye utne parameters bnaane padenge usse bachne k liye we use the rest operator as ... agar ... function k parameter space me lgee to vo rest parameter hai

function subs(...val) {  //val k andar arguments ki sb values aagayii chahe to aadhe values ko parameter me daal de aur aadhe ko argument me rehne de
    console.log(val);
}
subs(1,2,3,4,5,6);

//Return:
function ret() {
    return 12;
}
let func = ret();
console.log(func);

// Firstt Class -> Funcitions ko as a value treadt krnaa
function abcd(val) {
    val;
}

abcd(function() {
    console.log("12");
});

// High order function - vo fnction jo ek function ko accept kree ya return kree ek function apnee parameterr me 

function dcab(v1,v2) {
    console.log(v1,v2);
    return function(c3,c4) {
        console.log(c3 + c4);
        
    }
}
dcab(2,3)(2,3);

//Puree vs impuree functions:
//Pure function: Vo functiion jo bahar ki value ko naaa badle.
//Impure functions: Vo functions jo baharr ki value ko badal de.
let a = 55;  // Isko bahar ki value se khuchh farak nhii pad rhaa

function huihui() {
    console.log("heko");
}

function name() {
    a++;
}
console.log(a++);


//Closures: Ek function jo dusre funtion ko return kree aur jo return function ho vo parent function ki value use kree 
function hello() {
    let h = 2;
    return function name() {
        console.log(h);
    }
}

//Lexical Scoping: Ek functiiion ka physical scope kahaa tk haii (Keep an eyee on the closing brackets to know scope of each function)
function j() {
    let x = 2;  // 🔐 Scope: j() ke andar

    function h() {
        let y = 3; // 🔐 Scope: h() ke andar

        function i() {
            let z = 4; // 🔐 Scope: i() ke andar
        }
    }
}
// i() function can access y, x, and z because it's nested inside everythingg.
// j() can only access its own x

//Immediately invoke function expressio (IIFE): Isko extra name likh k call krne ki need nhi hotii direct run krtaa haii
(function() {
    console.log("hellohellohello");
})();

//Hoisting difference between declaration and expressions:
//Hoisting in Function Declaration:
abc();   // Ye Chalegaa (Calling before initialization)

function abc() {
    console.log("heyy");
}

//Hoisting in Function Expression
// abd(); // Its an error 

// let abd = function() {
//     console.log("hey");
// }


//Practice:

function checkage(age) {
    if(age < 18)
    return "Not Allowed";
    return "Allowed";
}
console.log(checkage(23));

//what will the function Return 
function f() {
    return;
}
console.log(f());  //Undefined

// Assign a function to a variable show how??
let g = function () { 
    console.log("2");
}
g();

//Pass a function into anther function and execute it 

function d(value) {
    value();
}
d(function() {
    console.log("hey");
});

//Convert the following into pure functin:
// let total = 0
// function addToTotal(num) {
//     total += num;
// }

// Ans:
let total = 0
function addToTotal(num) {
    newTotal= total;    //Total ki value ko new variable(newTotal) me save kr diyaa
    newTotal += num;
}

//BMI Calculator (Ek calculator me jisme weight kg me detee hai aur heighttt metres me).
function bmi(weight,height) {
    return weight/(height*height);
}
console.log(bmi(56, 1.7).toFixed(2));

//A Reusable Discount Counter
function DiscountCalculator(discount) {
    return function (price) {
        return price - price * (discount/100);
    }
}

let ten = DiscountCalculator(10);
let twuenty = DiscountCalculator(20);

// A Counter using closure 
function counter() {
    let count = 0;
    return function(){
        count++;
        return count;
    }
}

let k = counter();
console.log(k());

//Create a pure function to transform a value
function transform(worth) {
    return worth * 2;
}
console.log(transform(2));

// Create a Function that Greets a Person
function greet(name) {
    console.log("Hello:-", name);
}
greet("Kirti");

//Function to Multiply Two Numbers
function Multiply(a,b) {
    console.log(a * b);
}
Multiply(2, 2);

// Function to Check If Number Is Even or Odd
function checkEvenOdd(Number) {
    if(Number % 2 === 0) {
        console.log("The number is Even");
        
    }
    else {
        console.log("Its a odd number");
    }
}
checkEvenOdd(15);

// Function that Converts Celsius to Fahrenheit
function convertTemp(C) {
    console.log((C * 9/5) + 32);
}
convertTemp(25);


//Return Type Question:
// Return the Square of a Number
function Square(number) {
    return number ** 2;
}
console.log(Square(5));

// Calculate the Area of a Rectangle
function areaOfRectangle(lenngth, width) {
    return lenngth * width;
}
console.log(areaOfRectangle(2, 5));

// Return the Remainder of a Division
function findRemainder(A, B) {
    return A % B;
}
console.log(findRemainder(2, 5));

// Return "Pass" or "Fail" Based on Marks
function checkResult(marks) {
    return marks >= 33 ? "True" : "False";
}
checkResult(98);

// Return the Greater of Two Numbers
function findGreater(c, d) {
    return c > d ? "Greater" : "Small"
}
findGreater(33, 55);






