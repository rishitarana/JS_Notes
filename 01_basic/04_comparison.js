// console.log(2>1)
// console.log(2>=1)
// console.log(2<1)
// console.log(2==1)

// console.log("$">1)
// console.log("02">1)

console.log(null > 0)
console.log(null==0)
console.log(null>=0)

//the reason is that an equality check == and comparison ><>=<= works differently
//comparisons convert null to a number, treating it as 0;
//that is why (3)null>=0 is true and null>0 is false
console.log(undefined > 0)
console.log(undefined==0)
console.log(undefined>=0)

//===

console.log("2"===2)
console.log(2===2)  //datatype check
