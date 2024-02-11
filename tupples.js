//what is tupples
//tupples or array both are almost same but where we are know it is fixed datstype of data come under where we are used tupples
var newArray = ["kapil", "ram", "shyam", 45, true];
var displaydata = function (person) {
    var name = person[0], age = person[1], driving = person[2];
    console.log("Name is ".concat(name, ", and age is ").concat(age, ". Driving License: ").concat(driving ? "yes" : "no"));
};
var person1 = ["kapil", 25, true];
// person1.push("welcome") //then here error come 
console.log(person1);
displaydata(person1);
var product1 = ["shooes", 2000, 20, true];
var product2 = ["jeans", 1200, 10, false];
var ecommerseProductDisplay = function (products) {
    for (var i = 0; i < products.length; i++) {
        var product = products[i];
        console.log("Product ".concat(i + 1, ":"));
        console.log("Name: ".concat(product[0], ", Price: ").concat(product[1], ", Quantity: ").concat(product[2], ", Available: ").concat(product[3]));
    }
};
console.log(ecommerseProductDisplay([product1, product2]));
var math = ["maths", 82];
var Sci = ["Science", 92];
var English = ["Engslish", 72];
//here we are find average grade
var averageGrade = function (subjects) {
    var totalGrade = 0;
    for (var j = 0; j < subjects.length; j++) {
        var lengthStore = subjects[j];
        console.log("your length is ".concat(lengthStore, " and loop run is ").concat(j));
        console.log("total price is ".concat(math[1] + Sci[1] + English[1]));
        totalGrade += lengthStore[1];
        console.log("total grade is =", totalGrade);
    }
    return totalGrade / subjects.length;
};
console.log(averageGrade([math, Sci, English]));
var firstCity = ["Jodhpur", 45, "Too hot"];
var secondCity = ["Delhi", 22, "Noraml"];
var thirdCity = ["Jaipur", 40, "hot"];
var displayWeatherData = function (weatherInfo) {
    for (var i = 0; i < weatherInfo.length; i++) {
        var cityData = weatherInfo[i];
        console.log("Your weather city is ".concat(cityData[0], " then temp is ").concat(cityData[1], " and i am feeing ").concat(cityData[2]));
    }
};
displayWeatherData([firstCity, secondCity, thirdCity]);
