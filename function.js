//here function declaration Invocation and Return type
//function calling 
// function declaration useing funciton keyword 
function greet(name, id) {
    console.log("Welcome ".concat(name, " to Jodhpur and Your Employee DI is ").concat(id));
}
greet("kapil choudhary", 45784);
//arrow function 
var Greeting = function (name, id) {
    console.log("Welcome ".concat(name, " to Jodhpur and Your Employee DI is ").concat(id));
};
Greeting("Kanika Singh", 754);
//function return type
function greetreturn(name, id) {
    return "Welcome ".concat(name, " to Jodhpur and Your Employee DI is ").concat(id);
}
greetreturn("kapil choudhary", 45784);
//isPalindrome("12321")
var isPalindrome = function (palin) {
    var myPlain = palin.split("").reverse().join();
    return myPlain === palin;
};
console.log(isPalindrome("12321"));
//taken a function that takes an array of numbers as a and it is return the average of those number
function calculateAverage(numbers) {
    var sum = 0;
    for (var i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i];
    }
    var average = sum / numbers.length;
    return average;
}
var numbers = [10, 20, 30, 40, 50, 60];
var avg = calculateAverage(numbers);
console.log("Average:", avg); // Output: 35
//find max value in the array 
function findMaxValue(maxValue) {
    return Math.max.apply(Math, maxValue);
}
var maxValue = [10, 20, 30, 40, 50, 60];
var max = findMaxValue(maxValue);
console.log("Maximum value is ", max);
