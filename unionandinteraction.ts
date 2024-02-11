//here we are practice union and interaction in type script
//union 
//x = {123} y = {2 3 5} final output is {1,2,3,5}
 //interaction only common part come
// x = {123} y = {2 3 5} final output {2,3}

// let try to union 
//union in typescript we are denoate pipe symbol | this one and interction denoate we are used ampercent & /

const inputVal=(values:string | number |boolean) => {

}
inputVal(55)
inputVal("hello world")
inputVal(true)

//exaple1 
const userInput =(values :string|number):string | number=>{
if (typeof values === 'number'){
    return values*2
}
else if(typeof values === 'string'){
    return values.toUpperCase()
}
else{
    throw new console.error("enter a valid input");
    
}

}
console.log(userInput(10));
console.log(userInput("welcome to jodhpur"));

//? example 2
// todo list 
// ! wait wait firs time used

const todo = (todoData: number | string | boolean) => {
    if (typeof todoData === 'number') {
        return todoData.toExponential();
    } else if (typeof todoData === 'boolean') {
        if (todoData === true) {
            return "Yes";
        } else {
            return "No";
        }
    } else if (typeof todoData === "string") {
        return todoData.charAt(0).toUpperCase() + todoData.slice(1);
    }
}

console.log(todo(45));
console.log(todo(true));
console.log(todo("hy i am kapil"));


//!here i am user union  

// type Person ={
//     name : string;
//     age:number
// }
// type Employee ={
//     emd_id: number;
//     department : string
// }
// type Empdetails = Person | Employee;
// const employee:Empdetails = {
//     name :"kapil",
//     age:29
// }

//here we are used interaction 
type Person ={
    name : string;
    age:number
}
type Employee ={
    emd_id: number;
    department : string
}
type Empdetails = Person & Employee;
const employee:Empdetails = {
    name:"kapil",
    age:29,
    emd_id:45512,
    department:"it"
}

//here i am cretae User Profile

type User = {
    name: string;
    age: number;
}

type Mylocation = {
    city: string;
    country: string;
}

const user: User = {
    name: "kapil",
    age: 45
};

const locationData: Mylocation = { // Renamed 'location' to 'locationData'
    city: "jodhpur",
    country: "India"
};

const createuserProfile = (user: User, location: Mylocation) => {
    return { ...user, ...location };
};

console.log(createuserProfile(user, locationData));

const myCompleteinfo: User & Mylocation = createuserProfile(user, locationData);
console.log(myCompleteinfo);


