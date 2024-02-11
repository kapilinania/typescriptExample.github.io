//call signature in ts
//lets add one function without including the functions inside the object. it is more like createing a method in object

type Student={
    name:string;
    age:number;
    gender?:string;
    greet:(country:string)=> string;  //this is method call signature
}
const newStudent:Student = {
    name : "kapil inania",
    age:21,
    greet:((country):string=> `welcome my name is ${newStudent.name} i am ${newStudent.age} year old and i am from ${country}`)
}

const intorDuction = (newStudent:Student) => {
    const {name , age} = newStudent;
    return `welcome my name is ${name} i am ${age} year old`;
}
console.log(intorDuction(newStudent))
console.log(newStudent.greet('India'))