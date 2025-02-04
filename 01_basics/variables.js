const accountId = 14533
let accountEmail = "yuvraj@gmail.com"
var accountPassword ="12345"
accountCity ="Solapur"
// variable used in accountcity without declaring it

accountEmail ="bot@google.com"
accountPassword="2323437"
accountCity="Pune"

//accountId =2 // not allowed bcoz of earlier const
console.log(accountId);
/*
prefer not to use var 
because of issue in block scope and functional scope
*/

//bar bar console.log likhne ki jagah sirf apan console.table ka use krke
//sare ke sare variables print kr sakte hai

console.table([accountId,accountEmail,accountPassword,accountCity])

