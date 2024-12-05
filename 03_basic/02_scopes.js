//var ??  avoid var

// {} - scope

var c=300
var a=400   // gloabl scope
if(true){
    let a=10   // local scope
    const b = 20
    var c=30
    console.log("Inner: " , a)  //local scope
}

// a and b outside the scope gives error but c gets printed
//also c defined outside the scope changes value inside the scope which is a problem
// console.log(c)

//global scope
console.log(a)


//************************/

//basic in scope
//nested scope

function one(){
    const username= "Rishita"
    
    function two(){
        const website= "Youtube"
        console.log(username);
        console.log(website)
    }
    // console.log(website)

    two()
}
one()


///********************************************///

function addone(num){
    return num+1

}
addone(5)


//expression
//declaration and holding in variable - hoisting 
const addTwo = function(num){
    return num + 2
}

addTwo(5)  // if this is declared above function then gives an error
