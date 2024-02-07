//array inbuild method here i am used 
//for loop for of and foreach loop here we are used
var fruits = ["apple", "ornage", "bananna", "mango"];
//add element in array
var updaedfruits = fruits.push("kapil");
console.log(updaedfruits);
console.log(fruits);
//removed lastdata form array
var lastData = fruits.pop();
console.log(lastData);
console.log(fruits);
//interationg over element
//for loop
for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
//for of loop 
//we are get values
for (var _i = 0, fruits_1 = fruits; _i < fruits_1.length; _i++) {
    var fruit = fruits_1[_i];
    console.log(fruit);
}
//for rach loop
fruits.forEach(function (curVal) { return console.log(curVal); });
//for in loop 
//here we are get index
for (var fruitData in fruits) {
    console.log(fruits[fruitData]);
}
