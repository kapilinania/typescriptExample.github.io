//here i am learn object
//object data store in key value pair

const person:{
    name:string;
    age:number;
    isStudent:boolean;
    address:{city:string, country:string}
} = {
    name:'kapil inania',
    age:25,
    isStudent:true,
    address:{
        city:'Nagaur',
        country:'India'
    }
}

//here we are access object data
console.log(person.address.city)

//here we want to updated data
person.address.country = 'USA';
console.log(person.address.country);

const Product:{
    name:string;
    price:number;
    quantity:number;
}={
    name:'shooes',
    price:4500,
    quantity:1.5
}
console.log(Product.name)