// var,const let 

var a; //declare 
var a = 10; //declare and intialize
var a = 10; //redeclare and reinitialize But this is a bug as it we can redeclare same variable multiple times in var

// Global scope, function scope, block scope

var b=20;  //Global scope

function ab(){
    let c = 20; //function scope
    console.log(c);
}
 
{
    let d =30; //block scope
    console.log(d);  
}

// Let works best in block scope and function scope 
// const is the constant variiable that cannot be changed
const e = 40; //constant variable
console.log(e);
// e = 50; // This will throw an error as const cannot be reassigned

// Reassignment, Redeclaration
var b =30;
var b =40; // Reassigning is allowed in var

let f =50;
// let f =60; // Error As redeclaration is not allowed in let

// Temporary Dead Zone (TDZ)
// TDZ vo area hai jitna variable ko declare krnee k pehle hi access krnee ka try krtee haiii
//Note: TDZ is applicable only for let and const, but not for var var will retrun an undefined value instead of declaration error
console.log(z); // this is the TDZ of z 


let z = 100;  

// Hoisting
// Hoisting is the behavior of JavaScript where variable and function declarations are moved to the top of their containing scope during the compile phase. and the intialization part is moved to the bottom of the scope

console.log(x); // undefined

// behind the scenes it would be like this

var x = undefined;
x= 10; // initialization

