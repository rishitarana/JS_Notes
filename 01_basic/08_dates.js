//Dates

let myDate = new Date()
console.group(myDate.toString())
console.log(myDate.toDateString())
console.log(myDate.toISOString())
console.log(myDate.toJSON())
console.log(myDate.toLocaleDateString())
console.log(typeof myDate)


// let myCreatedDate = new Date(2024,11,13)
// console.log(myCreatedDate.toDateString())

let myCreatedDate = new Date("2025-01-01")
console.log(myCreatedDate.toLocaleString())