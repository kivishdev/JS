//Loops - Repeat krnee k loops kehte haii 
// Ab bohot patterns hote haii 
// Ex: 1 1 1 1 1 1 1 1 1  -Yahaa print aur 1 dono repeat ho rhee 
// And 1 2 3 4 5 6 7 8 9   -Yahaa print repeat ho rhaa 

// For Loop -Kahaa se jaana hai -> Kahaa tak jaana haii -> Kaise jaana haii
//and clarity haii kahaa tk jaana hai Ex- 10-20, 20-50,70-110
// Ex: 1 - 50 jaana haii, 1 se jaana hai, 50 tk jaana hai and ek ek badhke jaana hai

// While Loop - Kahaa se jaana hai -> kab rukna hai -> kaise jaana haii
// Pata nhii vo cheez kab hogii
// Ex; Print krtee raho jab tk hello na aaye (logic- Pata thodii hai ki hello kb aayega)

//For loop- for (start (kahaa se jaana hai Ex:1-50) ;end(kahaa tk jaana hai); change(kaise jaana hai))
// for (i = 1;i < 51; i++) {
//     console.log(i);
// }

//While loop- Kahaa se jaana hai -> kab rukna hai -> kaise jaana haii
let j = 1;
while (j < 32) {
    console.log(j);
    j++;
}

// Do-While - Do ka mtlb kroo condition bhale false ho ya wrong rhee but do ka loop 1 time chalegaa 
let l = 12;
do {
    console.log(l);
    l++;
}

while(l<2) // 12 (Condition false phir bhi loop ek baar chalegaa)

// Break And Continuee
// Break:- Kisi bhi loop ko beech me chane se rok sktaa haii
//Ex:
// for (i = 5;i < 500;i++) {
//     console.log(i);
//     if (i === 50) {
//         console.log("Loop rukk jaao");
//         break;
//     }
// }

// Continue:- Mai loop k beech me ek cheez ko print nhii krvaana chahta to jahaa continue rhegaa vo part skip hoke direct next part pe chale jaayega
for (i = 4; i < 8 ; i++) {
    if(i === 5) {
        continue;
    }
    console.log(i);
}

//Practice: 
// Print number from 1 to 10 using for loop
for (i =1 ; i < 11; i++) {
    console.log(i);
}

// Print number 10 to 1 using while loop
let g = 10;
while(g>0) {
    console.log(g);
    g--;
}

// Print even numbers from 1 to 20
for(i=1;i < 21;i++) {
    if(i % 2=== 0) {
     console.log(i);
    }
}

//Print 1 to 15 odd numbers using while loop
let a = 1;
while(a<16) {
    if(a % 2===1) {
        console.log(a);
    }
    a++;
}

//Print multipliactin table of 5

for(i=1; i < 10; i++) {
    console.log(5 * i);
}

//Print sum of sum of numbers from 1 to 100
let sum = 0;
for(b = 1; b < 101; b++) {
    sum = sum + i;
}

console.log(sum);


//Print numbers from 1 to 50 which are divisible by 3
for (c =1; c < 51; c++) {
    if(c % 3 === 0) {
        console.log(c);
    }
}
// Ask a user for a number and print wehether the number is even or odd
let val = prompt("Give me a number:");

for(let d = 1; d <= val; d++) {
    if(d % 2 === 0){
        console.log(`${d} is even`);
    }
    else {
        console.log(`${d} is odd`);
    }
}

//Count how many nmbers between 1 to 100 are divisible both by 3 and 5
for(e =1; e< 101; e++) {
    if(e % 3 === 0 && e % 5 === 0){
        console.log(e);
    }
}

// Stop a first multiple of 7
//print all the numbers but stops when it finds first number divisible by 7 
for (f = 1; f < 101; f++) {
    if(f %7 === 0){
        break;
    }
    console.log(f);
}

//Skip multiples of 3 write a loop from 1-20 skip numbers divisiblee by 3

for(g = 1;g < 21; g++) {
    if(g % 3 === 0) {
        continue;
    }
    console.log(g);
}

// print 5 odd numbers only write a loop that goes from 1 to 100 but ptints only 5 odd numbers only
let count = 0;

for (let h = 1; h <= 100; h++) {
    if (h % 2 === 1) { 
        count++;      
        console.log(h);
    }
    if (count === 5) {
        break; 
    }
}
