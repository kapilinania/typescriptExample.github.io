//here we are used map and filter method
//map method
//it is crate new array 
//doubleing rach number
var doubleArrayData = [1, 2, 3, 4, 5];
var doubleDataVal = doubleArrayData.map(function (curVal) { return curVal * 2; });
console.log(doubleDataVal);
// Converting numbers to strings
var numberToString = doubleDataVal.map(function (curElm) { return curElm.toString(); });
// Checking the type of the first element in the array
console.log(typeof numberToString[0]); // This will output 'string'
console.log(numberToString);
//fiter method
var fiterMethod = doubleDataVal.filter(function (curElm) { return curElm > 3; });
console.log(fiterMethod);
//filter even numbers
var evenNumber = doubleDataVal.filter(function (curElemnt) { return curElemnt % 10 === 0; });
console.log(evenNumber);
var arrayName = ["ram", "shyam", "geeta"];
// for(let i:number=0; i<arrayName.length; i++){
//     console.log(arrayName[i].toUpperCase())
// }
for (var i = 0; i < fiterMethod.length; i++) {
    console.log(Math.sqrt(fiterMethod[i]));
    console.log("square value is ".concat(i, " = "), fiterMethod[i] * fiterMethod[i]);
}
