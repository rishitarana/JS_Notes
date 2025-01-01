let score = "true"

console.log(typeof score)
console.log(typeof (score))

let itBeNumber = String(score)
console.log(typeof itBeNumber)
console.log(itBeNumber)

/*

"33" => 33
"33abc" => NaN
*/

//  let score2= Number(score)
//  console.log(typeof score2)

console.log("1"+2)
console.log("1"+"2"+1)
console.log(1+"2")
console.log("1"+2+2)
console.log(1+2+"2")
console.log(+true)
console.log(+"")


let x=4
let y=x++
console.log( x , y)

let a=5
let b=++a
console.log(a , b)