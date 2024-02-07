//boolean and Bigint Types 
//boolean either true and flase . it is basic primative types
var isMyname = true;
var workDone = false;
//function example 
function isEven(num1) {
    return num1 % 2 === 0;
}
console.log(isEven(14)); //true
function isDivisibleBy4And8(num2) {
    return num2 % 4 === 0 && num2 % 8 === 0;
}
console.log(isDivisibleBy4And8(32)); // true
// bigint type 
//larger number to regular number then we are used bigint type
//112n
// let maxNumber= Number.MAX_SAFE_INTEGER;
// let bigNumber:bigint = 9007199254740992n;
// console.log(bigNumber)
var anotherBigNumber = BigInt("9007199254740995n");
console.log(anotherBigNumber);
