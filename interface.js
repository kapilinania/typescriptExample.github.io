//javascript only objects and ts in object types
var welcome = {
    name: "kapil",
    age: 12,
};
var product = {
    name: "T-shirt",
    price: 1500,
    quantity: 45
};
var calculateTotalPrice = function (values) {
    return "Total Price and quantity is ".concat(values.price * values.quantity);
};
console.log(calculateTotalPrice(product));
