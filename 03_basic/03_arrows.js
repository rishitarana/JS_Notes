//Arrow Function - es6 2015  new features

//this - current context

const user = {
    username :"rishita",
    price : 999,

    welcomeMess: function(){
        console.log(`${this.username}, welcome`);
        console.log(this)
    }

}
user.welcomeMess()
// user.username = "sam" //context changed
// user.welcomeMess()

// console.log(this)
//node environment this refers to empty object

//browser global object - window


// function chai(){
//     let username= "ritu"
//     console.log(this)
// }
// chai()


// function chai(){
//     let username= "ritu"
//     console.log(this.username)
// }
// chai()



const chai = () => {
    let username= "ritu"
    console.log(this)
}
chai()
