const greetings = "Hello world"
for(const greet of greetings){
    if(greet == " "){
        continue;
    }
    console.log(`${greet}`)
}

//Maps
//collection of keyvalue pairs 
// no duplictaes only unique values


const map=new Map()
map.set('IN',"india")
map.set('UN',"United nations")

console.log(map)

for(const key of map)(
    console.log(key)
)


for(const [key,value] of map)(
    console.log(key, ':-' , value)
)

//objects not iterable

// const myObj = {
//     'game1' : 'nfs',
//     'game2' : 'foot'
// }

// for(const [key,value] of myObj){
//     console.log(key, ':-' , value)
// }