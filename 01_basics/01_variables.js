
const accountID = 10253;
let accountEmail = "shivamsingh10253@gmail.com";
var password = "123";

/*
    Prefer not to use var
    because of issue in block scope and functional scope
*/

accountCity = "Delhi";
let accountState;

// accountID = 2 // cannot change because we assign the value in const type
// console.log(accountID);

// console.table([accountEmail, password, accountCity]);

// Here, we can change the value for let and var types of variables
accountEmail = "s10253@gmail.com";
password =  "1234";
accountCity = "Mumbai";

console.table([accountEmail, password, accountCity, accountState]);

