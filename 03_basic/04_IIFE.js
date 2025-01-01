//Immediately Invoked Function Expression(IIFE)
//the moment you write function you have to immediately invoke it
// 1.we don't want pollution from global scope
//2. to immediately invoke


//SYNTAX

//named IIFE
(function chai(){
    console.log(`database connected`);
})();

//semicolon is important in this case


//unamed IIFE
(() => {
    console.log(`db connected 2`);
})();


((age)=>{
    console.log(`i tried ${age}`);
})(56);


//HOW TO EXECUTE CALL STACK IN JAVASCRIPT


//Javascript execution context
//{} -> Global Execution context -> this(refers)
// function execution context
//eval execution context


// -> memory allocation phase (var,let)
// -> execution phase


//PHASES
//1) gloabl execution phase (this)
//2) memory phase ->val1 -> undefined
//                  val2 -> undefined
//                  addnum-> defination
//                  result1-> undefined
//                  result2 -> undefined               
//3) execution phase -> val1 <- 10, val2 <- 5 ,addNum->[new variable environment + execution thread](new executional context)(Sandbox)
// execution phase (after returning from below result 1 = 15)
// now result2 [N.V.E+thread]
//now result2=12
//as many times you get a sandbox you have to repeat 1 and 2 phases
//[new variable environment + execution thread]  -> Delete after work
// 1-> Memory phase          2->Execution Context
//     val1 -> undefined        num1 -> 10
//     val2 -> undefined        num2 -> 5
//     total -> undefined       total -> 15(return it to global executional context)
//4.
// 1-> Memory phase          2->Execution Context
//     val1 -> undefined        num1 -> 10
//     val2 -> undefined        num2 -> 2
//     total -> undefined       total -> 12(return it to global executional context) 

let val1 = 10
let val2 =5

function addNum(num1,num2){
    let total= num1+num2
    return total
}
let result1= addNum(val1,val2)
let result2 = addNum(10,2)


//HOW TO ADD JAVASCRIPT FILES TO BROWSER

//CALLSTACK

/*
______________
|Three()      |
|_____________|             
|Two()        |    //LIFO
|_____________|
|one()        |
|_____________|   
|global execut|
|_____________|

*/
