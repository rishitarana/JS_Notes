const coding = ["js", "ruby","java","python","cpp"]


//callback func - does'nt have any name
coding.forEach(function (val){
    console.log(val)
})

coding.forEach((item) => {
    console.log(item)
})


function printMe(item){
    console.log(item)
}
coding.forEach(printMe)