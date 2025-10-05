// Hume ye skihnaa haii ki ek objects kaisa dikhegaa phir uske baad hum har baar new new Onjects with different different objects se bnaa paayengee yahi hota hai Oops me uppar uppar se.

// Constructor Functions: Jo functions ko hum new likh k chalaate hai function call krtee time unko Constructor Functions bolte hai.
function CreatePencil(name, price, colour, company) {
    this.name = name;  // If yahaa mai this.name k aage "doms2" lgaa du to phir hamesha name ki alue doms2 hi rhegii chahee khuchh bhi kr lo.
    this.price = price;
    this.company = company;   
}
// Prototype:   If hum apne constructor me protoype lgaa de to phir apne consttructor se hum jitni bhii new instances bnaayenge vo uss prototype ki value access kr paayengee

CreatePencil.prototype.colour = "red";  //Main function se colour hataaya to new add krnee k liye protype me daal diyee ab iski value sb access kr paayenge.

let pencil1 = new CreatePencil("Doms Superio", 10, "Blue", "Doms"); // new ek nayaa "blank object" bnaa deta phir vo new "blank object" this ka value ba jaata haii.




// Class: 
// Class k andar ka function:
class CreateBuiscuit {
    constructor(name, type, price, color) {
        this.name = name;
        this.type = type;
        this.price = price;
        this.color = color;
    }

    // 👇 Method constructor ke bahar likhaaa jaata hai
    write(buiscuitspeciality) {
        let h1 = document.createElement("h1");
        h1.textContent = buiscuitspeciality;
        h1.style.color = this.color;
        document.body.appendChild(h1);
    }

    erase() {
        document.querySelectorAll("h1").forEach(function (elements) {
            elements.remove();
        });
    }
}
let buiscuit1 = new CreateBuiscuit("Cadbury", "Dairy Milk", 30, "Orange");
buiscuit1.write("This biscuit is very crunchy!");
let buiscuit2 = new CreateBuiscuit("Fantasy", "Dark Fantasy", 45, "Brown");
buiscuit2.write("This biscuit is very crunchy!");


// super 
class User {
    constructor(name, UserID, IdNo) {
        this.name = name;
        this.UserID = UserID;
        this.IdNo = IdNo;
    }
}

class Admin extends User {   // extends se ye parent class ki bhi parameters access kr paa rhaa
    constructor(name, UserID, IdNo, role) {
        super(name, UserID, IdNo); // Calls the parent class's constructor
        this.role = role;
    }
}
let Admin1 = new Admin("Harsh", "harsh@gmail.com", 1, "Software Dev");
let User1 = new User("Harsh", "harsh@gmail.com", 1);




// Prototypal Inheritance VS Classical Inheritance

// Classes bnaana and unhe extend krnaa Classical Inheritance hota haii jahaa dusri class parent class khuchh inherit kr rahii parents ki Ex: User And Admin we just saw:

// Prototypal Inheritance -- Only happens in JS. Isme object se object inherit hotaa hai.
let coffee = {
    color: "red",
    drink: function name() {
        console.log("Ya Interesting");
    }
}
let arabiancoffee = Object.create(coffee); // Inheriting the objects from the parent Object 
// Hum yahaa chahe to ab vo saved variable me changes bhi kr sktee hai.
arabiancoffee.taste = "Arabian";
arabiancoffee.drink();