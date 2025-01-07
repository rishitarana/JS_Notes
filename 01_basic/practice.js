// wish(after)
// evening(noon)

// function wish(today){
//     console.log("Good Morning")
//     today()
// }

// function after(day){
//     console.log("Good afternoon")
// }

// function evening(wishes){
//     console.log("Good evening")
//     wishes()
// }

// function noon(at){
//     console.log("Good Night")
// }


// function add(a,b){
//     console.log(10+20)
// }

// function sub(a,b){
//     console.log(20-10)
// }

// setTimeout(add,1*1000)
// setTimeout(sub,2*1000)


// function tv(callback){
//     setTimeout(()=> {
//         console.log("let's watch tv")
//         callback()
//     },1*1000)
// }


// function juice(callback){
//     setTimeout(()=> {
//         console.log("let's drink juice")
//         callback()
//     },3*1000)
// }


// function workout(callback){
//     setTimeout(()=> {
//         console.log("let's exercise")
//         callback()
//     },4*1000)
// }


// function sleep(callback){
//     setTimeout(()=> {
//         console.log("let's sleep")
//         callback()
//     },5*1000)
// }

// tv(()=>{
//     juice(()=>{
//         workout(()=>{
//             sleep(()=>{
//               console.log("you are completed")  
//             })
//         })
//     })
// })


const allUsers = [{
    name: "Riya",
    age: 14,
    gender: "female"
    },
    {
    name: "Rama",
    age: 14,
    gender: "Male"
    },
    {
    name: "Ramaya",
    age: 15,
    gender: "female"
    },
    {
    name: "Ramanjeet",
    age: 16,
    gender: "female"
    }
]



for(i=0;i<allUsers.length;i++){
    if(allUsers[i]["gender"]=="female"){
        console.log(allUsers[i]["name"])
    }

    if(allUsers[i]["age"]>12){
        console.log(allUsers[i]["name"])
    }


}


