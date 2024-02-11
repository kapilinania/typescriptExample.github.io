//reuseable componate
//help of generics in typescript allow you to create reusable componament
//generic than can work woth multipal data types
// function logAndReturn(value: number | string): number | string {
//     console.log(value);
//     return value;
// }

// const numberResult: string | number = logAndReturn(42);
// const stringResult: string | number = logAndReturn("Hello, I am kapil");
// const booleanResult: string | number = logAndReturn(true);

// console.log(numberResult);
// console.log(stringResult);
// console.log(booleanResult);


function logAndReturn<T>(value: T): T {
    console.log(value);
    return value;
}

const numberResult: number = logAndReturn(42);
const stringResult: string = logAndReturn("Hello, I am kapil");
const booleanResult: boolean = logAndReturn(true);

console.log(numberResult);
console.log(stringResult);
console.log(booleanResult);

const addTwo = (a,b)=>{
    return a+b;
}
addTwo(3,5)
