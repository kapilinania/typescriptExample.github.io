//javascript only objects and ts in object types

//type used mostly in fucntion 
// interface used in objects types
//it allows you to define a contractr for an objects shape
//it most work is type checking 

interface Newwelcome {
    name:string;
    age:number
}
const welcome:Newwelcome ={
    name:"kapil",
    age:12,
}

//example 1

interface ProductData {
    name:string;
    price:number;
    quantity:number;
}
const product:ProductData ={
    name:"T-shirt",
    price:1500,
    quantity:45
}

const calculateTotalPrice = (values:ProductData) =>{
    return `Total Price and quantity is ${values.price * values.quantity}`
}
console.log(calculateTotalPrice(product))