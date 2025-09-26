// Objects: Bohot saare values jinka ek unique key hota hai and vo pair me bntee hai.
// Objects are made by {}
// Object bnaane ka tarikaa:
let obj = {
    name: "Harsh",     // name is the key and "Harsh" is the value
    age: "25",
    khaana: "Chanaa",
};

// Accessing object properties -by . notation
console.log(obj.name); // Harsh
console.log(obj.age); // 25
console.log(obj.khaana); // Chanaa

// by [] notation
console.log(obj["name"]);
console.log(obj["age"]);
console.log(obj["khaana"]);

// Nesting and deep access::
//Nested means object inside object means object k andar object
let user = {
    name: "Harsh",
    age: "12",
    address: {
        city: "Mumbai",
        state: "Maharashtra",
    location: {
        latitude: "19.0760° N",
        longitude: "72.8777° E"
      },
    },
};
// Deep Access: Accessing nested objects.
console.log(user.address.location); //Lattitude and Longitude
// Object Destructuring: (Deep access krnee ka ek aur tarika)
let {latitude, longitude} = user.address.location;  //Means location se lattitude and longitude nikal do .

//Looping: For in, Object.keys, Object.entries
// For in loop: Isme key ko access karte haii
let person = {
    name: "Harsh",
    age: 25,
    interest: "Coding",
};
for( let key in person) {        //let key is the variable and person is the object name
    console.log(key, person[key]);  // Accessing key and value
}

// Object.keys: Used when jab bhi hume apne object ki keys ki ek array bnaani ho
let obj3 = {
    name: "Harsh",
    age: 25,
    interest: "Coding",
};
console.log(Object.keys(obj3)); // ["name", "age", "interest"]  (Object.keys is the syntax and in bracket we pass the object name).
console.log(Object.entries(obj3));  // [["name", "Harsh"], ["age", 25], ["interest", "Coding"]] (Object.entries is used to get key-value pairs in an array format);


//Copying Objects: Spread,Object Assign, Deep Clone:
// Spread Operator
let obj4 = {
    name: "Harsh",
    age: 26,
    Hobbies: "Reading",
};
let obj5 = {...obj4};
console.log(obj5);

// Object.assign: Alternative of spread but not used 
let dish = {
    name: "Samosa",
    specaiality: "Sweet",
};
// let dish2 = Object.assign({},dish);
// console.log(dish2);       
// To add new key-value pair in the oobject:
let dish2 = Object.assign({Price: 15}, dish);
console.log(dish2);

// Deep Cloning:
let type = {
    cable: "A",
    Brand: {
        name: "Samsung"
    },
};
let wires = JSON.stringify(type);  //To convert the objects contents to JSON format
console.log(wires);

let wires2 = JSON.parse(wires);  //To Bring back to raw form
console.log(wires2);   

// Optional Chaining, Compare Properties
// Optional Chaining: Ya to future me vo value h sktii haii keys me yaa to chnage hogii so error na de
let charge = {
    cable: "A",
    Brand: {
        name: "Samsung"
    },
};
console.log(charge.cable.Brand?.name); //Means future me jaake brand ka naam change ho skta hai to error retrun na kree so "undefined" de dega.

// Computed Properties: Use a Variable to automatically assign a property
// Object me 1 variable k naam se khuchh bnaana haii phir vo baharr ka variable object k andar key ban jaata hai.
let system = "Devices";
let charge1 = {
    cable: "A",
    Brand: {
        name: "Samsung"
    },
    [system]: "Phones",
};
console.log(charge1);

// Practice:
// Make an object for student roll No. and Isenrolled: true or False
let student = {
    name: "Harsh",
    Roll: 26,
    IsEnrolled: true,
};
console.log(student);


// Can an object key be a number or boolean? Try this
const obi = {
 true: "yes",
 42: "answer",
}
console. log(obi[true]);

// Access the value of "first-name" from this object:
const user1 = {
"first-name": "Harsh",
};
console.log(user1["first-name"]);

// Given a dynamic key let key = "age", how will you access user[key]?
let key = "age";
const user2 = {
 age: 26,
};
console.log(user2[key]);

// From the object below, print the latitude:
const location = {
 city: "Bhopal",
 coordinates: {
        lat: 23.2,
        lng: 77.4,
}
};
console.log(location.coordinates.lat);
console.log(location?.coordinates?.lat); //If coordinates is missing in the object

// Destructure the city and lat from the preious location object
let {city} = location;
let {lat} = location.coordinates;

// Destructure the key "first-name" as a variable called firstName.
let obj1 = {
    "first-name": "name"
}
let {"first-name": firstName} = obj1;   //firstname naam ka ek alag se variabale bnaa diyaa andar hi object k.
console.log(firstName);


// Use for-in to log all keys in this object:
const course = {
 title: "JavaScript",
 duration: "4 weeks",
};

for(let key in course) {
    console.log(key);
}


// Use Object.entries() to print all key-value pairs as:
// title: JavaScript
// duration: 4 weeks
const course1 = {
 title: "JavaScript",
 duration: "4 weeks",
}
Object.entries(course1).forEach(function (val) {
    console.log(val[0], ":", val[1]);
});

//Copy this variable via spread operator:
const original = {a:1,b:2};
const copied = {...original};
console.log(copied);





