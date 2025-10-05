// this keyword is a special keyword
// this keyword: JS me jaise saare keywords ki value and nature same rehta haii vaise hi this keyword me uska value and nature badal jaata hai iss baat se ki vo kahaa use ho rhaa hai. 


// Global Scope:
console.log(this); // Window.. Global Scope me this ki value window hoti haiii.
// Window pradhan-mantri hai(Supreme).. 😅

// this keyword ki value baar baar badaltii rehti hai.


// Functional Scope: Function k andar:
function abcd() {
    console.log(this);  // Window..
}
abcd();

// Method: Ek aisaa function jo ek object k andar ho.
let obj = {
    name: "harsh",
    age: "26",
    SayName: function () { // IF arrow function bnaa liyaa to this ki value "window ho jaayegi" apnii value kho dega.  If function k andar function bnaaya to bhi value window hogii.
        // But function k andar arrow function bnaayenge to chalega this apni value nhii khoyegaa.
        console.log(this.name);   // harsh.... Mthodk andar this ki value object hotii haii.
        console.log(this.age); // 26
        console.log(this); // puraa object aayega
    }
};
obj.SayName();

// Note: Arrow functiion hamesha apni value parent se lete hai.. If pehle arrow function hi aa jaayega to this apni value loose kr degaa.

// Event Handler:
document.querySelector("h1").addEventListener("click", function () {
    console.log(this.style.color ="red");  // red
    console.log(this); // Iskii value vahi hogi jispe event lgaa ho
});

//this ki values:
// global -> window
// function -> window unless aapne new keyword nhi lgaaya ho call krtee time..
// method with es5 function -> window
// method with es6 arrow function -> window
// es5 function inside es5 method -> Object
// event handler -> Element
// class -> Blank Object


// Bind, Call, Apply
// Function ko call krtee time hum decide kr sktee hai ki this ki value kyaa hogii.
let object = {
    name: "Kirti",
}
function abc() {
    console.log(this);   // this ki value yahaa window hogii
}   
abc.call(object); // abc();  // this ki value window.
// Ab hum chahte ki this ki value object l barabar ho jaaye to uske liyee...

// function k uppar call lgaana hai object call krnee k liye.

// IF function me arguements nhii hai.
// Syntax: functionname.call(objectName);

// IF function me arguments haii
// Syntax: functionname.call(objectName(variableName), Arguments);

// apply(): Ye bolta hai ki function me ek se jyada parameters rehne chahiye and call krtee time aap bs 2 cheeze bhej sktee hai(1. Object hogya, 2.function arguments in array).
let object1 = {
    name: "Harshita",
    age: "23"
};
function numbers(a,b,c) {
    console.log(this,a,b,c);
}
numbers.apply(object1,[1,2,3]); // 1st is object call and 2nd call is Array.

// bind(): Ye array acceppt nhii krtaa haii ultaa isko jab call krtee hai to call nhii hota ek dupliate function bnaa detaa haii jisme this default vo function ki value hoti haiii. 
let Object2 = {
    name: "Samosa",
};
function nameofobj(a, b) {
    console.log(this, a, b);
}
nameofobj.bind(Object2, 2, 3);

// Practice: 
let count = 0;
let h2textS = document.querySelector("h2");
let increasebtn = document.querySelector("#increasebtn");
let decreasebtn = document.querySelector("#decreasebtn");

function handleclick() {
    if(this.id == "increasebtn") {
        count++;
    }
    else if (this.id == "decreasebtn") {
        count--;
    }
    h2textS.textContent = count;
};
increasebtn.addEventListener("click",handleclick);
decreasebtn.addEventListener("click", handleclick);

// Like Button Subscribe 
// Selecting all buttons: 
let buttons = document.querySelectorAll(".action-btn") 

// Like count: 
let likeCount = 0;
let likeSpan = document.querySelector("#likeCount");

// Function Handleclick:
function clickHandler() {
    if (this.id === "likeBtn") {   // ✅ triple equals
        likeCount++;
        likeSpan.textContent = likeCount;
    } 
    else if (this.id === "shareBtn") {
        alert("You have clicked Share Button");
    } 
    else if (this.id === "subscribeBtn") {
        alert("Subscribed!");
    }
};

// ✅ Make sure function name matches here
buttons.forEach(function (btn) {
    btn.addEventListener("click", clickHandler);
});


