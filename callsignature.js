//call signature in ts
//lets add one function without including the functions inside the object. it is more like createing a method in object
var newStudent = {
    name: "kapil inania",
    age: 21,
    greet: (function (country) { return "welcome my name is ".concat(newStudent.name, " i am ").concat(newStudent.age, " year old and i am from ").concat(country); })
};
var intorDuction = function (newStudent) {
    var name = newStudent.name, age = newStudent.age;
    return "welcome my name is ".concat(name, " i am ").concat(age, " year old");
};
console.log(intorDuction(newStudent));
console.log(newStudent.greet('India'));
