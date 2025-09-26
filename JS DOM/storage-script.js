// localStorage - Ye browser k andar data store krtaa hai jab browser close bhi kr de phirr bhi data delete nhii hogaa. Yahaa se data khudse delete krnaa padtaa haii.

// localStorage: 4 Things to learn
// Store kaise kare:
localStorage.setItem("name", "Kirti");

// Data Fetch Kaise kree: (Item mangnaa localstorage se):
let val = localStorage.getItem("name");  // Val variable me data store kr rhee.

// Update Kaise kre: (Same as store data step, Update value ko override kr degaa).
localStorage.setItem("name", "Kirtiya");

// Remove kaise kre:
localStorage.removeItem("name");


// sessionStorage - Ye broswer k andar data temporarily save krtaa hai means tab close krnee pe data delete ho jaata haii.
// Store data
sessionStorage.setItem("name", "Kirtii");

// Retrieve data
sessionStorage.getItem("name") // returns "Kirtii"

// Remove specific item
sessionStorage.removeItem("name");

// cookies - ye bhi data save krtii hai but browser k cokkies naam k property k andar. Ye small amountt of data k liye banaa haii.
// Store: 
