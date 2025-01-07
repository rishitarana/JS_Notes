const accountId = 134567
let accountEmail = "abc@gmail.com"
var accountPass = "abcd"
accountCity= "Jaipur"
let accountState;

accountId = 98765
//var - scope problem

/*
prefer not to use var
because of issue in block scope and functional scope
*/

accountEmail = "egf@gmail.com"
accountPass = "1234"
accountCity = "delhi"

console.log(accountId)

console.table([accountId,accountEmail,accountPass,accountCity,accountState])