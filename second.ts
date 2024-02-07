// Type Annotations
// Type annotations are expressed by using :
let mathsNum: number = 10;
let firstName: string = "Kapil Inania"; // Corrected the spelling of "Inania"

// This is type annotation
console.log(mathsNum.toString()); // Corrected to call toString as a function

let sum1 = mathsNum + 20;
console.log(sum1);

//Number Types
let pi:number = 3.14;
let negitiveNumber:number = -45;
let sciNumber:number = 500;
let countNumber:number = negitiveNumber + 45;
console.log(countNumber);
//Number re present integers and floating-point numbers
let sqrtNumber:number = Math.sqrt(16);
console.log(sqrtNumber)
let nanValue:number = NaN;

//string datatype

let myFullname:string="kapil";
let newName:string="Kapil Choudhary";
console.log(myFullname)

//task
let message:string="Hello Welcome kapil";

//concatation 
let newNamedata = myFullname + newName
console.log(newNamedata)

//find length 

let sentance:string = "welcome to jodhur";
console.log("Your Length is " +sentance.length)

//uppercase and lowercase
let uppercaseText:string=sentance.toUpperCase();
let lowercaseText:string=message.toLowerCase();
console.log(uppercaseText)
console.log(lowercaseText)

//todo Substring data 
let longTextdata:string = "welcome to Typescript and this is my second file";
console.log("After Substring =" + longTextdata.substring(10))
console.log("Main String = " +longTextdata )

//prduct prise data
let productName:string = "Shoes";
let productPrise:number = 5000;
console.log(`my product name is ${productName} and Prise is ${productPrise}`);

