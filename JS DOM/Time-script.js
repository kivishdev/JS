// TimeOut and Interval:

// TimeOut: Ek baar chalega ek defined period pe 
setTimeout(function () {
    console.log("Hello");
}, 5000);  // 1000 MilliSeconds = 1 Seconds...  All the time we are writing here is in MilliSeconds.

// Interval: Baar Baarr chalegaa ek defined period pe
let interval = setInterval(function () {
    console.log("Hello 5 Seconds hogyee ");
}, 5000);    // Har 5 sec me baar baar print hogaa
clearInterval(interval);


// ClearTimeout and ClearInterval:
// Agar koii period pe code chalne vaala hai to clear kr degaa 

// Clear krnee k liye Timeout ko ek variable me save krnee ka 
let tm = setTimeout(function () {
    console.log("Hello ");
}, 3000);
clearTimeout(tm);  
// Same for the clearInterval.

// Practicee: 
let count = 15;

let time = setInterval(function() {
    if (count >= 12) {
        console.log(count);
        count--;
    } else {
        clearInterval(time);
    }
}, 1000);



// let text = document.querySelector("input");
// let button = document.querySelector("#repeat");
// let result = document.querySelector("p");
// let stop = document.querySelector("#stop");

// let intervalID;

// button.addEventListener("click", function() {
//     clearInterval(intervalID); // Clear previous interval

//     intervalID = setInterval(function () {
//         result.innerHTML += "🫣" + text.value + "<br>"; // Directly stack in <p>
//     }, 1000);
// });

// stop.addEventListener("click", function() {
//     clearInterval(intervalID);
//     result.innerHTML += "⏹️ Stopped!<br>";
// });

// Download Progress Bar:
// let countt = 0;
// let progress = document.querySelector(".progress-fill");
// let progrestext = document.querySelector(".progress-text");

// setInterval(function () {
//     if(countt <= 99) {
//         countt++;
//         progress.style.width= `${countt}%`;
//         progrestext.textContent= `${countt}%`;
//     }
// }, 30);

// Dynamic Txt repeater with Progressbar:

let text = document.querySelector("input");
let button = document.querySelector("#repeat");
let result = document.querySelector("p");
let stop = document.querySelector("#stop");
let h3 = document.querySelector("h3");

let intervalIID;
let progress = document.querySelector(".progress-fill");
let progrestext = document.querySelector(".progress-text");
let countt = 0;
button.addEventListener("click", function () {
    intervalIID = setInterval(function() {
        if(countt <= 99) {
            countt++;
            progress.style.width= `${countt}%`;
            progrestext.textContent= `${countt}%`;
            result.innerHTML +='🫣' + text.value + "<br>"
            h3.textContent= text.value + "  ,Repeating"; 
        }
        else if(countt >= 100) {
            result.textContent= "Completed";
            clearInterval(intervalIID);
            intervalIID = null;
            h3.textContent = 'Completed';
        };
    },1.1 * 100);
});

stop.addEventListener("click", function () {
    clearInterval(intervalIID);
    interval= null;
    result.textContent= "Stopped";
});

// Practice: Make a Alert Messge Shown the SCreen after 3 Seconds:
let jadoo = document.querySelector("#jadoo");
let alertmsg = document.querySelector("h1");
jadoo.addEventListener("click", function() {
    setTimeout(function () {
        jadoo.textContent="Message..🌟"
        alertmsg.textContent= "Hello...";
        console.log("Text Displayed");
        document.querySelector("h1").style.display = "initial";
        window.textContent= "💖💖💖";
    },3000);
});


