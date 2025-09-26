// If-Else and Else If
if (12 > 13) {
    console.log("12 is greater than 13");
}
else {
    console.log("12 is not greater than 13");
}

if (12 > 14) {
    console.log("12 is greater than 14");
}
else if (12 > 13) {
    console.log("12 is greater than 13");
}

//Switch Case= Ye ek statement hai jo multiple conditions me se ek matching case ka code run karta hai.
switch (1) {
    case 1:
    console.log("1 is the case");
    break;
    case 2:
    break;
    case 3:
    break;
    case 4:
    break;
}


//Early Return Pattern

let user = 67
if (75 < 50) {
    return "Yes Bhaai";
}
else if (75 > 60) {
    return "No Bhaai";
}
(user);

//Practicee

let originalPrice = 100; // Example value
let couponCode = "GOLD"; // Example value (try with "SILVER", "", "INVALID", etc.)
let finalPrice = 0; // Initialize finalPrice

// --- Step 1: Price Validation and Initial Setup ---
let shouldProceedWithCalculation = true; // Flag to control further execution

if (originalPrice <= 0) {
    console.log("Invalid Price: Price cannot be zero or negative.");
    shouldProceedWithCalculation = false; // Agar price invalid hai, toh aage mat badho
}

// --- Step 2 & 3: Coupon Code Checks (Only if price is valid) ---
if (shouldProceedWithCalculation) {
    // Agar price valid hai, tabhi coupon checks karo
    if (couponCode === "GOLD") {
        finalPrice = originalPrice * 0.80; // 20% discount
    } else if (couponCode === "SILVER") {
        finalPrice = originalPrice * 0.90; // 10% discount
    } else if (couponCode === "" || couponCode === null || couponCode === undefined) {
        // Agar coupon code empty hai, null hai, ya undefined hai
        finalPrice = originalPrice * 0.95; // 5% basic discount
    } else {
        // Agar upar ke koi bhi coupon match nahi kiya (invalid coupon)
        finalPrice = originalPrice; // No discount
        console.log("Invalid Coupon Code. No discount applied.");
    }

    // --- Step 4: Final Result Print Karna (Only if price was valid) ---
    console.log("Final Price is: " + finalPrice);
}


// Stone Paper Scissors game:
function Game(user, computer) {
    if (user === computer) return "It's a tie!";
    if (user === "paper" && computer === "Stone") return " User Win";
    if (user === "Stone" && computer === "Scissor") return "User Win"
    if (user === "Scissor" && computer === "paper") return "User Win";

    return "Computer Win";
}

console.log(Game("paper", "scissor"));  // Computer Win