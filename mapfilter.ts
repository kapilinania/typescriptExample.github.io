//here we are used map and filter method
//map method
//it is crate new array 
//doubleing rach number
const doubleArrayData: number[] = [1, 2, 3, 4, 5];
const doubleDataVal: number[] = doubleArrayData.map((curVal: number) => curVal * 2);
console.log(doubleDataVal);

// Converting numbers to strings
const numberToString = doubleDataVal.map((curElm) => curElm.toString());

// Checking the type of the first element in the array
console.log(typeof numberToString[0]); // This will output 'string'
console.log(numberToString)

//fiter method
const fiterMethod = doubleDataVal.filter((curElm) => curElm>3);
console.log(fiterMethod)

//filter even numbers
const evenNumber = doubleDataVal.filter((curElemnt:number)=> curElemnt%10 ===0)
console.log(evenNumber)

let arrayName:string[] = ["ram","shyam","geeta"]

// for(let i:number=0; i<arrayName.length; i++){
//     console.log(arrayName[i].toUpperCase())
// }

for(let i:number=0; i<fiterMethod.length; i++){
    console.log(Math.sqrt(fiterMethod[i]) )
    console.log(`square value is ${i} = `,fiterMethod[i]*fiterMethod[i])
}