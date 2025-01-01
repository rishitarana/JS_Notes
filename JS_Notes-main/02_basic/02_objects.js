//singelton - when we declare as literalls singelton is not formed 
//if formed from constructor then it is made


//object literals


const mySym = Symbol("key1")

const jsuser = {
//String

    //key: value
    name: "Rishita", //any datatype
    age: 18,
    location: "Jaipur",
    //to be used as symbol [] otherwise considered String
    [mySym]: "myKey1",
    email: "rishita@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(jsuser.email)

console.log(jsuser["email"])
console.log(jsuser[mySym])

//if in case "name": "ritu"
//only way to access it is through jsuer["name"]
//can't be accessed through jsuser.name

//Symbol


// jsuser.email = "ritu@gmail.com"
// Object.freeze(jsuser)
// jsuser.email= "rishita@gmail.com"
// console.log(jsuser)


 jsuser.greeting = function(){
    console.log("Hello JS user");
 }
jsuser.greetingTwo=function(){
    console.log(`hello js user, ${this.name}`);
}
 console.log(jsuser.greeting())
 console.log(jsuser.greetingTwo())