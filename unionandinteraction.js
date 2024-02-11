//here we are practice union and interaction in type script
//union 
//x = {123} y = {2 3 5} final output is {1,2,3,5}
//interaction only common part come
// x = {123} y = {2 3 5} final output {2,3}
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// let try to union 
//union in typescript we are denoate pipe symbol | this one and interction denoate we are used ampercent & /
var inputVal = function (values) {
};
inputVal(55);
inputVal("hello world");
inputVal(true);
//exaple1 
var userInput = function (values) {
    if (typeof values === 'number') {
        return values * 2;
    }
    else if (typeof values === 'string') {
        return values.toUpperCase();
    }
    else {
        throw new console.error("enter a valid input");
    }
};
console.log(userInput(10));
console.log(userInput("welcome to jodhpur"));
//? example 2
// todo list 
// ! wait wait firs time used
var todo = function (todoData) {
    if (typeof todoData === 'number') {
        return todoData.toExponential();
    }
    else if (typeof todoData === 'boolean') {
        if (todoData === true) {
            return "Yes";
        }
        else {
            return "No";
        }
    }
    else if (typeof todoData === "string") {
        return todoData.charAt(0).toUpperCase() + todoData.slice(1);
    }
};
console.log(todo(45));
console.log(todo(true));
console.log(todo("hy i am kapil"));
var employee = {
    name: "kapil",
    age: 29,
    emd_id: 45512,
    department: "it"
};
var user = {
    name: "kapil",
    age: 45
};
var locationData = {
    city: "jodhpur",
    country: "India"
};
var createuserProfile = function (user, location) {
    return __assign(__assign({}, user), location);
};
console.log(createuserProfile(user, locationData));
var myCompleteinfo = createuserProfile(user, locationData);
console.log(myCompleteinfo);
