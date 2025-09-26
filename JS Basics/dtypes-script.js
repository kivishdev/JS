// Primtivee types: this are the types jinko copy krnee pe real value copy hoti hai as it is
//Ex:
let a = 10;
b = a; // now b value is also 10 
// Types: string, number, boolean, null, undefined, symbol, bigint
var  b = "harry" //String can also be called by double quotes(' ') or single quotes(` `)
var e = 12; //Number

let e = true //Boolean
let f = false //Boolean
//Null means jaan boojh k koi value nhii di baadme milegi to de dengee   
let g = null //Null In future koi value mili to ex: let g = "male"
// Undefined means value nhi dii to browser se jo default value milegi vo undefined
let h; //By default value jo milegii vo undefined
//Symbol is a unique value that can be a unique identifierrr
//Bigint is a number that can be larger than the maximum safe integer in JavaScript and for that max safe integer we have to write Number.MAX_SAFE_INTEGER in browser console.

//Reference types: this are the types jinko copy krnee pe reference milti hai parent ki 
let c = [1,2,3];
d = c //isme purii vale cupy nhi huii bs reference copy huii haii
//Types: Arrays,objects,funtions


// Dynamic typing: JS is dynamic typed language which means we can change the type of variable at any timee for example: if 
let j = 10; // j is a number than
j = "hello"; // now j is a string 
//But  static typing is beterr

// Typeof Quircks: We can check the type of variable using typeof operator
let k = 10;
console.log(typeof k);  //number
let l = "hary";
console.log(typeof l); //styring

// Type coercion (== vs ===): JS autumatically ek type ko dusre type me convert kr detii haii
let m = "11";
let n = 10;
console.log(m + n); // "1110" (string + number = string)
console.log(m - n ); // 1 (string - number = number)

// == is loose equality operator which checks the value only and converts the type if needed
console.log(m == n); // true (string "11" is converted to number 11

// But === is strict equality operator which checks the type as well
console.log(m === n); // false (string !== number)

//but NaN == Nan is false because NaN is not equal to anything even itself
console.log(NaN == NaN); // false

// Truthy and Falsy values: JS me khuchh value true hoti haii aur khuchh value false hoti haii jaise 
//Falsy values: 0, "", null, undefined, NaN, false 
//check krnee k liye type (!!null) in browser console
console.log(!!0); // false
//  Baaki sab value truthy values




// Practicee::
null + 1 // null is converted to 0 so the result is 1
!!undefined // false
5 + "5" // "55" (number is converted to string)
"5" - 5 // 0 (string is converted to number)
true + false // 1 (true is converted to 1 and false is converted to 0)
true + true // 2 (true is converted to 1)
