
const cars= ["maruti","ford","innova"]

const color = []

color.push("red")
color.push("blue")
color.push("pink")

console.log(color)

const fruit= new Array(["orange","apple"],["grapes"])

//at()
console.log(fruit.at(0))

//concat()

console.log(fruit.concat(color,cars))

//copyWithin()

const vehicle= ["maruti","ford","innova","bike","scooty"]
// console.log(vehicle.copyWithin(1,0))
// console.log(vehicle.copyWithin(2,0,2))
//[ 'maruti', 'ford', 'maruti', 'ford' ]

//entries

const list=vehicle.entries();

// let text=""
// for(let x of list){
//     text+=x+"\n";
// }

// console.log(text)

for (let x of list) {
    console.log(x);
}

//every()

const ages = [32,33,26,40]

function checkage(age){
    return age>18;
}

console.log(ages.every(checkage))

//fill

const names = ["ram" ,"shyam","rohan"]
names.fill("pankaj",1,2)
console.log(names)


//filter

const num = [32, 33, 16, 40];
const result= num.filter(checkAdult)

function checkAdult(age){
    return age>=18;
}

console.log(result)


const ages1 = [3, 30, 18, 20];


// let result1=ages1.findIndex(checkage)
// let result1=ages1.findLast(checkage)
let result1=ages1.findLastIndex(checkage)

function checkage(age){
    return age>18
}

console.log(result1)



const myArr = [1, 2, 3, 4, 5, 6];
const newArr = myArr.flatMap(x => [x, x * 10]);
console.log(newArr)

