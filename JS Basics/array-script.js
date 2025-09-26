// Array - Its a collection of elements denoted by []
// In JS ek array me chahe koii bhi data type k values ek saath reh skte haidifferent from any programming languages.

//Creating an array
let arr = [10,20,30,40,50];
  //Index  0, 1, 2, 3, 4
console.log(arr[2]); //Accessing elements of an array;

// Modifying an array
let arr2 = [50,60,70];
arr2[1] = 100; // Index 1 ki value ki jagah 100 daal do
console.log(arr2); // [50, 100, 70]

// Array methods: push, pop, shift, unshift, splice, slice, reverse, sort
// Map, filter, reduce, find, every (intro level)

// Using Array: let arr2 = [50,60,70];  for all example

//Push: Adds an element to the end of the array
arr2.push(30); 
console.log(arr2); // [50,100, 70, 30]

//Pop: Removes the last element from the array:
arr2.pop();
console.log(arr2); // [50,100, 70]

//Shift: Removes 1st Element from the Array:
arr2.shift();
console.log(arr2); // [100,70]

// Unshift: Array ki beginning me element daal dena:
arr2.unshift(1); // Array ki 1st element me 1 daal do
console.log(arr2); // [1, 100, 70]

//Splice:
arr2.splice(1,2); // Index 1 se 2 elements hataa do
console.log(arr2); // [1]

//Slice: Returns a copy of the array from start to end index(But does not include the last index)
let b = [1,2,3,4,5];
let newb = b.slice(1, 3);  // newb ek new array return kregaa jisme 1 to 3 index k values store hongii.
console.log(newb); // [2, 3] 

// Reverse: Reverses the elements of the array:
let c = [1, 2, 3, 4, 5];
c.reverse();
console.log(c); // [5, 4, 3, 2, 1]

// Sort: Sorts the elements of the array in asceding and descending order:
let d = [5, 2, 8, 1, 4];
d.sort(function (a, b) {
  return a - b; // Ascending order
//  return b - a; // Descending order
})
console.log(d); // [1, 2, 4, 5, 8]

//ForEach: Executes a provided function once for each array element:
let e = [1, 2, 3, 4, 5];
e.forEach(function (val) {
  console.log(val + 4);  // Adds 4 to every elements of the array
});

// Map:Map sirf tab use hota hai jab aapko naya array bnaana hai pichhle array k base pe
//Map dikhte k saath hi man me ek nayaa blank array bnaa lo
let f = [1, 2, 3, 4, 5];
//Mai jo new array bnegaa jab ek vo bhi 5 elements k base ka hogaa
let newf = f.map(function (val){
  if(val === 2) return 10;
})
console.log(newf); // [undefined, 10, undefined, undefined, undefined];

//Map yahi hota haii ki ek value aayegi function me jaayegi phhir jaisa conditio rhegaa vaise execute hoga and jo return hoga vo new array me chala jaayega and value nhii rahi koi to undefined milegaa

//When to use Map:
// Jab aapko koi aisa case dikhe jaha array se ek nayaa array bnegaa and vo new array khcuchh values to rkhegaa


//Filter: Filter puraane array me se khuchh values laata hai khuchh chhod deta haii.
let g = [1,2,3,4,5,6,8]
let newg = g.filter(function (val){
  if(val > 4) return true; 
})
console.log(newg); 

// Reduce: Ek array se ek single value bnaana
let h = [5,6,7,8,9,10]

let newh = h.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue; // Adds all elements of the array
}, 0);
console.log(newh);

//find: Find sirf 1st value return krega jo condition match karegi
let i = [1, 2, 3, 4, 5];
let newi = i.find(function (val) {
  return val === 5; // Returns the first element that matches the condition
});
console.log(newi);

// Some: Ye check krtaa hai ki array me koi conddition match krtii hai ya nhii if match  krtii hai to true return kr dena
let j =[10, 30, 70, 90];
let newj = j.some(function (val){
  return val > 65;
}); // true
console.log(newj);

// Every: Ye check krtaa hai ki array me har element condition match krta hai ya nhii Har element condition pass kare — tabhi true milta hai" Agar ek bhi element fail kare, toh answer directly false ho jaata hai
let k = [10, 20, 30, 40];
let newk = k.every(function (val) {
  return val > 39; // Returns true if all elements are greater than 39
});
console.log(newk); // true

// De-Structuring: Array se values ko alag alag variables me store karna dusre array me
let l = [1, 2, 3, 4, 5];
let [m, n, , o, p, q] = l;
console.log(m); // 1
console.log(n); // 2  
console.log(o); // 4
console.log(p); // 5
console.log(q); // undefined(Extra variables = undefined)
// 3 nahi aaya bcoz vahaa space chhut gyaa to uski jagah koi variable lega 

// Spread Operator: Array ko alag alag variables me spread karna
let r = [1,2,3,4,5];
let s = [...r]; // r ke elements ko s me spread kar do
console.log(s); // [1, 2, 3, 4, 5]
// Copy karna: Old array ka ek naya clone ban jata hai.
// Merge karna: Do arrays ko jod sakte ho.
// Pass arguments: Function me multiple values ek saath bhej sakte ho

//Practice:
//Create a array of 3 fruits and primt 2nd one
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[1]); 

// Addd Mango to the end and pineapple to the beginning of the array
fruits.push("Mango");
fruits.unshift("Pineapple");
console.log(fruits);

//Replace mango with Kiwi 
fruits[4] = "Kiwi";
console.log(fruits); // ["Pineapple", "Apple", "Banana", "Cherry", "Kiwi"]

//2 Method:
// fruits.splice(4,1);
// fruits.push("Kiwi");
// console.log(fruits); // ["Pineapple", "Apple", "Banana", "Cherry", "Kiwi"]

// Remove the last element from the array using method:
let z = [1,2,3,4,5];
z.pop();
console.log(z); // [1, 2, 3, 4]

// INsert "red" and "blue" at the index 1 of this array:
let colours = ["Green", "Yellow"];
colours.splice(1, 0,"Red", "Blue"); //Splice me jab 0 daalte hai to vo elements ko delete nhi krtaa but uske aage commaa daalke khuchh likh dengee to vo insert kr degaa.

// Extract middle vaues from the array:
let items = [1, 2,3,4,5,6];
let newItems = items.slice(1, 4);
console.log(newItems);

//
let names = ["Zara", "Arjun", "Mira", "Bhavya"];
names.sort().reverse(); // Sorts the names in descending order and then reverses the order.
console.log(names); // ["Zara", "Mira", "Bhavya", "Arjun"]


// Use .map() to square each number:
let numbers = [1, 2, 3, 4, 5];
let sqareNumbers = numbers.map(function (val){
  return val * val; // Squares each number in the array
});
console.log(sqareNumbers); // [1, 4, 9, 16, 25]


// use .filter() to keep numbers greaer  than 20:

let num = [10, 20, 30, 40, 50];
let filteredNum = num.filter(function (val){
  return val > 20; // Keeps numbers greater than 20
});
console.log(filteredNum);

// Use .reduce() to find the sum of all numbers:
let a = [1, 2, 3, 4, 5];
let newa =a.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);
console.log(newa); // 15

// use .find() to get the first number less than 10:
let num2 = [5, 10, 15, 20, 25];
let found =num2.find(function (val){
  return val < 10;
})
console.log(found); // 5 (Bcoz .find() ka kaam hai vo bs 1st value return krtaa hai jo condition match karee).

// Use .some() to check if any student has scored below 35:
let scores = [40, 50, 60, 30, 70];
let hasScored = scores.some(function (val) {
  return val < 35;
});
console.log(hasScored); // true (Bcoz .some() ka kaam hai vo check karega ki koi bhi element condition match karta hai ya nahi match kiya to true )

// Use .every() to check if all numbers are even:
let evenNumbers = [1, 4, 6, 8, 10];
let IsEven = evenNumbers.every(function (val) {
  return val % 2 === 0;
});
console.log(IsEven); // False (Bcoz .every() ka kaam hai vo check karega ki har element condition match karta hai ya nahi agar sabhi elements condition pass kare to true milegaa).
// De- Structuring values to get firstname and lastname:
let arr3 = ["Harry", "Porter"];
let [Firstname, LastName] = arr3;
console.log(Firstname); // 10
console.log(LastName); // 30

// Spread Operator to merge two arrays:
let arr4 = [1, 2, 3];
let arr5 = [4, 5, 6];
let theMergedArray = [...arr4, ...arr5];
console.log(theMergedArray);

// Add "India" to the start oof this array;
let countries = ["USA", "UK"]
countries = ["India", ...countries];
console.log(countries); // ["India", "USA", "UK"]

//Clone this array but not by refrence:
let array = [1, 2, 3, 4, 5];
let theClonedArray = [...array];
console.log(theClonedArray);



