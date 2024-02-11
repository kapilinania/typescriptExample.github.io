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
var person = {
    name: 'kapil inania',
    age: 27,
    isStudent: true,
    class: "12th",
    address: {
        city: "jodhpur",
        country: "India"
    }
};
var person1 = {
    name: 'kanika inania',
    age: 21,
    isStudent: true,
    address: {
        city: "jodhpur",
        country: "India"
    }
};
var product = {
    name: "laptop",
    price: 1000,
    quantity: 2000
};
//calaculate total price
var calaculateTotalPrice = function (product) {
    return "  ".concat(product.name, "and total cost is = ").concat(product.price * product.quantity);
};
console.log(calaculateTotalPrice(product));
var user1 = {
    exerCisename: "Move hand clock wise",
    countDay: 18,
    username: "kapil choudhary",
    tranningPrice: 1500
};
var user2 = {
    exerCisename: "Move footer clock wise",
    countDay: 20,
    username: "kanika choudhary",
    tranningPrice: 1200
};
var user3 = {
    exerCisename: "neck twisted",
    countDay: 18,
    username: "komal choudhary",
    tranningPrice: 1500
};
var findUserdata = function (users) {
    return users.map(function (user) {
        return "Your name is ".concat(user.username, " and your amount is ").concat(user.tranningPrice * user.countDay);
    });
};
var usersData = findUserdata([user1, user2, user3]);
console.log(usersData);
