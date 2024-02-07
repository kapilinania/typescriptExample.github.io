//here function declaration Invocation and Return type
//function calling 
// function declaration useing funciton keyword 
function greet(name:string,id:number){
    console.log(`Welcome ${name} to Jodhpur and Your Employee DI is ${id}`);
}
greet("kapil choudhary", 45784)

//arrow function 

const Greeting = (name:string,id:number) =>{
    console.log(`Welcome ${name} to Jodhpur and Your Employee DI is ${id}`);
}
Greeting("Kanika Singh", 754)

//function return type
function greetreturn(name:string,id:number):string{
    return `Welcome ${name} to Jodhpur and Your Employee DI is ${id}`;
}
greetreturn("kapil choudhary", 45784)

//isPalindrome("12321")

const isPalindrome = (palin:string):boolean=>{
    let myPlain = palin.split("").reverse().join();
    return myPlain === palin;
}
console.log(isPalindrome("12321"))

//taken a function that takes an array of numbers as a and it is return the average of those number

function calculateAverage(numbers: number[]): number {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i];
    }
    const average = sum / numbers.length;
    return average;
}

const numbers = [10, 20, 30, 40, 50, 60];
const avg = calculateAverage(numbers);
console.log("Average:", avg); // Output: 35


//find max value in the array 

function findMaxValue(maxValue:number[]):number{
    return Math.max(...maxValue);
}
const maxValue = [10,20,30,40,50,60];
const max = findMaxValue(maxValue)
console.log("Maximum value is ", max)