//opctiona and default parameter in typescript function 
//opctional perameter  
//argumenter and parameter difference

// const greetNew =(name:string,id:number=1):string =>{
//     return `Welcome to ${name} and id is ${id}`;
// }
// let user =  greetNew("kapil")
// console.log(user)

//opctional parameter
// after the parameter if we are used  ? then it is opctional parameter

const greetNew =(name:string,id?:number):string =>{
    if (id){
        return `Welcome to ${name}`;
    }
    else{
        return `Welcome to ${name} and id is ${id}`;
    }
        
     }
     let user =  greetNew("kapil")
     console.log(user)