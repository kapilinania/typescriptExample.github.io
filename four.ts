//Any and Unknown 
//any is most flexiable

let myNum:any = 5;
myNum ="kapil inania"
myNum = true

//useCase
// Dynamic data we are use  
// like api data and contact form data 

// Unknow type 
// it is safe alternative to any  
//if any variable type is unknow then varavle value kuch be ho saltee hai like boolean string number

let myNewnumber:unknown = 55
myNewnumber =true //here type checking and type safty
myNewnumber = 10;
// myNewnumber = "kapil";
if(typeof myNewnumber === "number"){
    console.log(myNewnumber + 20)
}
else if(typeof myNewnumber === "boolean"){
    console.log(myNewnumber);
}
console.log(myNewnumber)





