//Opeartos
//Arithmetic,Comparison,Logical,Assignment,Unary,Ternary
//  + - * / % **
//Add(+)
1 + 2  // 3 
"har" + "sh" //concatenation "harsh"

//Subtraction(-)
12 -2 // 10

//Division(/)
12/6 // 2

// Multiplication(*)
12 * 2 // 24

// Modulus(%)
12 % 5 // 2 (Dono ko divide krkee jo number remainder me hai)

// Exponentiation(**)
2 ** 3 // 8 (2 raised to 3)


// Comparison Operators: = == === < > <= >= ! != !== !!
// == Checks only for value equality Ex: 12 == "12" // true
// === Checks for value and type equality both Ex: 12 === "12" // false
// != checks for value inequality(value Barabar nhi hai kya) ye double equals ka ulta value aata hai anss "harsh" != "harshita" //true
// !== checks for value and type inequality both Ex: 12 !== "12" // true
// > greater than 12 > 12 // false
// < less than 12 < 12 // false
// >= greater than or equal to 12 >= 12 // true
// <= less than or equal to 12 <= 12 // true


// && ||
// ?:

//Assignment Operators: = += -= *= /= %= **=
//Ex:
let a = 10 // = value set krtaa haii
a += 3 // means a ki value me 3 add kr do aur vaaps save kr do
a -= 2 //menans a ki value me 2 minus kro aur save kr do
a *=2 // means a ki value me 2 multiply kr do aur save kr do
a /= 2 //means a ki value me 2 divide kr do aur save kr do (ye result saave krta hai)
a %= 3 //means a ki current value me 3 divide kr do aur remainder save kr do (ye result save krta hai)

// Logical Operators: && || !
// && (AND) - returns true if both side(operands) is true
true && true // true
false && false //false

// || (OR) - returns true if at least one side(operand) is true
false || true // true
false || false // false

// ! (NOT) - returns true if the operand is false, and false if the operand is true
!false // true
!true // false

//Unary Operators: + - ++ -- !
// + (Unary plus) - covert the operand to a number 
//Ex: 
+ "5" // 5 which is a number
// - (Unary Minus) - coverts the number to negative 
//Ex:
- 5 // -5 (negative number)

// ++ (Increment) - increases the value of the operand by 1
//Pre Increment me value turant change hotii haii 
let g = 5;
++g; // g becomes 6 (pre increment)
let b = 2; 
b++ + b; // b becomes 5 (post increment)
// -- (Decrement) - decreases the value of the operand by 1
let c = 5;
c-- ; // c becomes 4

// ! (Logical NOT) - vaue ulta kr deta hai boolean ka tue ka folse aur false ko true kr deta haiiii
let d = true;
!d; // false (negates the value of d)

let f = false;
!f; // true (negates the value of f)

//Ternary Operator ?:
// condition? (true) : (false)
(12 > 13)? console.log("true") : console.log("false"); //false


//Practicee 
// Calculator Logic
function calc(a, b, operator) {
    switch (operator) {
        case "+": 
         return a + b;
        break;
        case "-":
         return a - b;
        break;
        case "*":
            return a * b;
        break;
        case "/":
            return a / b;
            break;
            default:

            console.log("Invalid Operator!");
            return "Error. Invalid Operator"
            
    }
}   
console.log(calc(10,5, "+"));
console.log(calc(10,5, "-"));

