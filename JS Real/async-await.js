

// Async: jab isko kahi aage vaale fuunctions me aage lgaa dete hai to function bhi asynchronous JS me aa jaata haii.

// Syntaxx:
async function functionName() {
    let variable = await promiseName;
    // use result
}   // Iske liye ek promise bnaana padega

// A normal Async example
async function hemlo() {  //Async by default promise return krtaa hai
    return 5;
}
hemlo().then((x) => {
    alert(x);
})

// Example in terms of Promise:
async function weather() {
    let delhikaweather = new Promise(function (resolve,reject) {
    setTimeout(() => {
        resolve("27 Dgree")
    }, 2000);
})

    let bangalorekaweather = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve("21 Degree")
    }, 3000);
})
    // delhikaweather.then(alert)
    // bangalorekaweather.then(alert)

    // let delhiw = await delhikaweather
    // let banglorew = await bangalorekaweather
    // result (delhiw, banglorew)
}
weather();

// Normal Password Valiator 
function PasswordValidate(password) {
    return new Promise(function (resolve, reject) {
        if(password === "password123"){
            resolve("Login Successful")
        } else{
            reject("Illegal Activity")
        }
    });
}
async function UserLogin(passwordattempt) {
try{  // Resolve huaa to try chalega
    console.log(`${passwordattempt}`, "se login kiyaa jaa rhaa haii");
    let validationResult = await PasswordValidate(passwordattempt)  // "PasswordValidate function ko passwordattempt ki value ke saath chalao, uske Promise ke resolve hone ka intezaar karo, aur jab woh resolve ho jaaye, toh uski result value ko validationResult naam ke ek naye variable mein store kar do."
    
    console.log(`${validationResult}`, "Login Successful");
} catch(error) {   // Reject huaa to catch chalgea
    console.log("Error", `${error}`);
}    
}
UserLogin("mosa212");

// Aap setTimeout, addEventListener jaise puraane callback-style functions par direct await nahi laga sakte. Aapko pehle unhein ek Promise return karne waale function mein wrap karna padega.

