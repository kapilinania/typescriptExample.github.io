// let firstNumber:number = 10
// let secondNumber:number = 20
// console.log(firstNumber+secondNumber)
//@ts-ignore
//ts configratrion file if any error then not made index.js file. to make config file in the console type tsc --init and go to tsconfig.json file and 
//make sure this is uncomment "noEmitOnError": true, . we can also write tsc and enter then we can see what is error in code
//to know typescript version tsc -v, tsc --v, tsc -version all three of then work well and syntax to run file is 
function sum(a, b) {
    return a + b;
}
console.log(sum(5, 50));
//fat arrow function
var add = function (a, b) {
    return a + b;
};
console.log(add(5, 20));
