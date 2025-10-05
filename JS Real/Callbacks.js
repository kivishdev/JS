// Jab JS me code likhte  haoi to vo line by line chaltaa hai but life me aise bhi times aayenge jab ek code wait kregaa and dusra code chal jaayega.

// Sync and Async
// Sync: Jab code line by line chaltaa hai.
// Async: Aisa code jo chalne k ready ho jaaye tab chale.

// Callback Pattern and Callback Hell:

// Agar aap ek functon me ek aur function bhej do parameter me to parameter vaala function *callback* kehlaata haii  and phir jab kaam ho jaaye to call kr dena
// Callbacks:
function thodiderbaad(fnc) {
    setTimeout(fnc, Math.floor(Math.random() *10) * 1000);
};
thodiderbaad(function () {
    console.log("hey");
});

// bohot functios duniya me kahii exist krtee hngee but to unko hum apne code se access krtee hai jaise;
// Maanlo ye code koi library ka hogaa



// 👇 And hum ise access kr rhee aise ye real world code haii apnaa jo hum likhengee

// Name:
function sayHello(name) {
    console.log("Hello_ ", name);
}
function greet(name, callbackfnc) {
    console.log("Mai yahaa callback ka kaam kr rhaa hu");
    callbackfnc(name);
}
greet("Aman", sayHello)

// Addtion Calculator:

function operation(num1, num2, callb) {
    let sum = num1+ num2
    callb(sum)
}
operation(5,6, function displayResult(result) {
    console.log("Ans", result);
});

// User Data Fetching: 
function userinfo(cb) {
    setTimeout(() => {
        let user = {
            name: 'Kirti',
            Roll_No: 27
        }
        cb(user)
    }, 3000);
}
userinfo(function (userdata) {
    console.log(JSON.stringify(userdata) + "Data mil gyaa haii");
    if(userdata.name === 'Kirti') {
        console.log("Hello Ji! Kirti");
    }
})


// CallBack k andar call back k andar callback:
// Ex: 
// Pizza Bnaana: Har step ek data aur ek callback legaa
function getDough(callback) {
    setTimeout(() => {
        console.log("Haaa! Aata taiyaar gyaa");
        callback("dough")
    }, 1000);
}
function addSauce(dough, callback) {
    setTimeout(() => {
        console.log("2. Sauce lag gyii hai");
        callback(dough +"sauce");
    }, 2000);
}
function addTopings(saucedOough, callback) {
    setTimeout(() => {
        console.log("3. Toppings la gyii hai");
        callback(saucedOough +"toppings")
    }, 3000);
}
function bakepizza(pizzaBase, callback) {
    setTimeout(() => {
        console.log("4. Haa pizza ban gyaa hai");
        callback(pizzaBase +"pizza")
    }, 4000);
}
getDough(function(dough) {
    // Dough milne ke baad...
    addSauce(dough, function(saucedDough) {
        // Sauce lagne ke baad...
        addTopings(saucedDough, function(pizzaBase) {
            // Toppings add hone ke baad...
            bakePizza(pizzaBase, function(finishedPizza) {
                // Bake hone ke baad...
                console.log("✅ Final Pizza Ready: " + finishedPizza);
            });
        });
    });
});


