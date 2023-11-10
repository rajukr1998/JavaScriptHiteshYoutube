const accountId = 144553
let accountEmail = "raju@google.com"
var accountPassword = "12345"
accountCity = "Gaya"
let accountState;

// accountId = 2 // not allowed

accountEmail = "hitesh@google.com"

accountPassword = "21212121"
accountCity = "Patna"
console.log(accountId);
/*
Prefer nit to use var
bacause of issue in block scope and functions scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])