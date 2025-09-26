// Form Validation:
// Read Values from input,text-area, Select
let nme= document.querySelector("#name");
// let mail= document.querySelector("#email");
// let Password= document.querySelector("#password");
let form = document.querySelector("#myForm");


form.addEventListener("submit", function(dets) {
    dets.preventDefault();

    // Creating a regex:
    // const pattern = /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/g;  // from chatgpt
    // let regex = pattern.test("kirtiy380@gmail.com"); // Matching the email
    // console.log(regex); // Shows the results in boolean true or false
    
    if(nme.value.length <= 2) {
        document.querySelector("#hide").style.display= "initial";
    } else {
        document.querySelector("#hide").style.display= "none";
    }
});

// Practice:
// Email Password Validator:
// form.addEventListener("submit", function(dets) {
//     dets.preventDefault();
//     // Name regex: at least 3 characters, only letters allowed
//     const nameRegex = /^[A-Za-z\s]{3,}$/;

//     // // Email regex: simple version for testing
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

//     // Password regex: at least 6 characters (any type)
//     const passwordRegex = /^.{6,}$/;

//     let Validnme = nameRegex.test(nme.value);   //test is a method to check regex
//     if (!Validnme) {
//         document.querySelector("#nameError").style.display= "initial";
//     } else {
//         console.log("Right Name:", nme.value);
//     };
    
//     let Validemail = emailRegex.test(mail.value);
//     if(!Validemail) {
//         document.querySelector("#emailError").style.display= "initial";
//     } else {
//         console.log('Valid Email:', mail.value);
//     };
    
//     let ValidPassword = passwordRegex.test(Password.value);
//     if(!ValidPassword) {
//         document.querySelector("#passwordError").style.display= "intial";
//     } else {
//         console.log('Valid Password:', Password.value);
//     };
// });




