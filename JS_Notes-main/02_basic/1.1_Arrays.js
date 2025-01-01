//Arrays

// similar datatype
//zero- indexed
//shallow copies - do not share same reference points
//deep copies

//Number type
const myArr=[1,2,3,4,5]

//String Type
const myHeroes = ["ranbir","raj"]
// console.log(myHeroes[0])

//Array Methods

// myArr.push(6)
// myArr.pop()
// myArr.unshift(9) //add to first index
// myArr.shift() //removes first

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(9))

// const newArr= myArr.join() //bind the array and convert into string

// console.log(myArr)
// console.log(newArr)


//slice , splice

// console.log("A ",myArr);
// const myn1 = myArr.slice(1,3) //exclusive 3 
// console.log(myn1);
// console.log("B ",myArr)

// const myn2 = myArr.splice(1,3) //inclusive 3 
// console.log(myn2);


//*******************************************//



const avengers = ["iron","spider","thor","amer"]
const dc= ["flash","super","bat"]


// avengers.push(dc)
// console.log(avengers)
// console.log(avengers[4][1])

//concat - join
//spread operator

const new1 = avengers.concat(dc)

console.log(new1)

const allnew = [...avengers,...dc]
console.log(allnew)

//flat - join sub-arrays also
const another = [1,2,3,[4,5,6],7,[6,7[4,5]]]
const real = another.flat(Infinity)
console.log(real)


console.log(Array.isArray("Rishita"))
console.log(Array.from("Rishita"))
console.log(Array.from({name: "hitesh"}))

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
