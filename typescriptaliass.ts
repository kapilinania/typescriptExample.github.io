// const person:{
//     name:string;
//     age:number,
//     isStudent:boolean,
//     address:{city:string; country:string}
// } = {
//     name:'kapil inania',
//     age:27,
//     isStudent:true,
//     address:{
//         city:"jodhpur",
//         country:"India"
//     }
// }

//type alias in typescrit
// we can cratea a type and we can use in different
//syntax
// const person:{
//     name:string;
//     age:number;
//     isStudent:boolean;
//     address:{city:string; country:string}
// } = {
//     name:'kapil inania';
//     age:27;
//     isStudent:true;
//     address:{
//         city:"jodhpur";
//         country:"India"
//     }
// }

//do not repleat yourself
//syntac first latter always capital 
type Person = {
    name:string;
    age:number;
    class?:string;  //opctional perameter
    isStudent:boolean;
    address:{city:string; country:string}
}

const person:Person = {
    name:'kapil inania',
    age:27,
    isStudent:true,
    class:"12th",
    address:{
        city:"jodhpur",
        country:"India"
    }
}

const person1:Person = {
    name:'kanika inania',
    age:21,
    isStudent:true,
    address:{
        city:"jodhpur",
        country:"India"
    }
}

type Product = {
    name:string;
    price:number;
    quantity:number;
}

const product:Product
= {
    name:"laptop",
    price:1000,
    quantity:2000
}

//calaculate total price

const calaculateTotalPrice = (product:Product)=>{
    return `  ${product.name}and total cost is = ${product.price* product.quantity}`
}
console.log(calaculateTotalPrice(product))


type BurnCalculory = {
    exerCisename: string;
    countDay: number;
    username: string;
    tranningPrice: number;
}

const user1: BurnCalculory = {
    exerCisename: "Move hand clock wise",
    countDay: 18,
    username: "kapil choudhary",
    tranningPrice: 1500
}

const user2: BurnCalculory = {
    exerCisename: "Move footer clock wise",
    countDay: 20,
    username: "kanika choudhary",
    tranningPrice: 1200
}

const user3: BurnCalculory = {
    exerCisename: "neck twisted",
    countDay: 18,
    username: "komal choudhary",
    tranningPrice: 1500
}

const findUserdata = (users: BurnCalculory[]) => {
    return users.map(user => {
        return `Your name is ${user.username} and your amount is ${user.tranningPrice * user.countDay}`;
    });
}

const usersData = findUserdata([user1, user2, user3]);
console.log(usersData);
