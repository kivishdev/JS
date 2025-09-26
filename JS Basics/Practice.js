//  Q1: Largest of Two Numbers
let a = 16;
let b = 18;
if (a > b) {
    console.log(`${a} is Greater`);   
}
else {
    console.log(`${b} is Greater`);
};         

// Q2: Check Number is Positive, Negative or Zero
function PosNeg(c) {
    if(c > 0){   
        console.log("Its a Positive Number");
    }
    else if(c < 0) {
        console.log(`${c} Is a Negative number`);
    }
    else if(c === 0) {
        console.log("Its a Zero");
    }
}
PosNeg(-16);

// 1 se 50 tak numbers print karo.
// - Agar number 3 se divisible ho, print "Fizz"
// - Agar 5 se divisible ho, print "Buzz"
// - Agar dono se ho, print "FizzBuzz"
// - Warna print number

function FizzBuzz(i) {
    for(i = 1; i < 51; i++) {
        if(i % 3=== 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        }
        else if(i % 3 === 0) {
            console.log("Fizz");
        }
        else if(i % 5 === 0) {
            console.log("Buzz");
        }
        else {
            console.log(`${i}`);
        }
    }
}
FizzBuzz();

// 🪜 Step-by-Step Guidance (No string allowed)
// 🧮 Start with a number (let’s say let num = 12345;)
// 🔢 Create a variable to store the reversed number (e.g., let rev = 0;)
// 🌀 Loop until num > 0:
// Ek baar loop mein:
// 🔍 digit = num % 10; → last digit nikaal
// 🧱 rev = rev * 10 + digit; → reversed number build kar
// 🔪 num = Math.floor(num / 10); → last digit hata
// 📤 Loop ke baad rev ko print kar do

let num = 12345;
let rev = 0;
while (num > 0) {
    digit = num % 10;
    rev = rev * 10 + digit;
    num = Math.floor(num / 10);
}
console.log(rev);
