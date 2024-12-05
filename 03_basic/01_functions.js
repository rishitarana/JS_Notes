//a block of code designed to perform a particular task
//it is executed when someone invokes it (call it)

//this is a func to print my name 
function myName(){
    console.log("Rishita")
    console.log("Rana")
}

//reference - myName 

//execute - myName()

myName()

//this is a function to multiply two digits

function multiply(a,b){
    console.log("this is the product = "+a*b)
}

multiply(2,3)

//this is a function to add two numbers
//(a,b) are parameters
function add(a,b){
    console.log("this is my sum = " + a+b)
}

add(2,"a")


function add(a,b,c){
    console.log("this is my sum = " + a+b+c)
}

add(2,2,"3")

//subtraction

function sub(a,b){
    return a-b
    //console.log("rishita") this will never get printed
}

let x= sub(5,4)
console.log("this is subtraction = " + x)


function loginUserMessage(username){

    if(username == undefined){
        console.log("please enter a username")
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("rishita"))
console.log(loginUserMessage())


//************** */


//(...)--> is called rest and spread operator 
//depend on use case what to use

//here we use rest operator
function calculateCartPrice(...num1){
    return num1
}

console.log(calculateCartPrice(100,200,300))

//how to pass object in a function and use it

const user = {
    username: "ritu",
    price: 989
}

function handleObject(anyObject){
    console.log(`username is : ${anyObject.username} and price is ${anyObject.price}`)
}

//handleObject(user)

handleObject({
    username:"shopping",
    price: "399"
})


const myNewArray = [200,700,600,900]
function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));



const car = {
    model : "ford",
    making : 2015
}

function myCar(){
    console.log(`my car ${car.model} was built in ${car.making}`)
}

myCar(car)