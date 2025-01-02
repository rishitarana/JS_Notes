/*
Javascript is dynamically typed langauage which means that variables can hold
values of different types during runtime unlike other language such as typescript or java, 
where you have to define the datatype of a variable explicitly
*/

/*
Primitive Datatype

call by value - 
In call by value method of parameter passing, the values of actual parameters are copied to the function’s formal parameters.

There are two copies of parameters stored in different memory locations.
One is the original copy and the other is the function copy.
Any changes made inside functions are not reflected in the actual parameters of the caller.

7 types : String , Number , boolean , null , undefined , Symbol , BigInt

*/



/*Reference type(NON-Primitive)

Arrrays , Objects , Functions

call by reference

Both the actual and formal parameters refer to the same locations.
Any changes made inside the function are actually reflected in the actual parameters of the caller.
*/

const singers= ["arijit","mohit","jubin"];

//everything inside curly braces is object
let myObj = {
    name: "Rishita",
    age: "21",
}


const myFunction = function(){
    console.log("Hello world")
}

console.log(typeof myObj);
console.log(typeof myFunction)


//*********************************************

//Stack(Primitive),Heap(Non-Primitive)
//copy             //reference


//primitive

let myYoutubename = "rishitaranadotcom"
 let anotherName = myYoutubename;
 anotherName = "chaiorritu"

 console.log(myYoutubename)
 console.log(anotherName)


 //non-primitive

 let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
 }

 let userTwo = userOne
 userTwo.email = "abc@gmail.com"
 console.log(userOne.email)
console.log(userTwo.email)
