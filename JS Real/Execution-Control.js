// Scope- Scope vo hotaa hai jahaa tk aap apne bnaaye hue variables and fucntions use ho sktee hai. 

// Scope 3 Types k hote hai JS me:

// Functional Scope, Global Scopes, BlockScopes.

// Functional Scope: Function k andar hi use ho sktii hai
function abcd () {
    var a = 2;    // Bs andar hi rhegaa
};

// Global Scopes: Pure code me kahi bhi use ho sktii hai.
var a = 5; // Kahaa bhi use ho staa haii

// BlockScopes: Curly Braces me hi use ho skte hai.
{
    var a = 7;  // Ye bs block k andar hi chalegaa
}


// Execution Content: Memory Creation and execution phase
// JS jab bhi function dekhta hai uske pehle vo bnaata hai excution phase and ye 2 phases me chaltaa haii memory phase and execution phase.

// Memory phase me jo saare variables and function rehte hai unko space me daala jaata hai.
// Execution Context ek hypothetical Scenario haii and Execution phase me code ek space k andar run hotaa hai.
// Ye sab ek abstract hai jo hota hai background me pr dikhtaa nhii haii.

// Lexical Scope and Dynamic Scope:
// Lexical Scope: Btaata hai ki aapka element physically kkahaa pe haii and kyaa kyaa access kr sktaa haii. 
function abcd() {  // 1st Function
    var b = 3;      // 1st Function ka variable hai to ye kahaa bhi access ho sktaa haii. 
    function defg() {  // 2nd Function
        console.log(b);  // 1st Function ka varible access ho rhaa bcoz vo belong krtaa haii main function pe.
    }
};

