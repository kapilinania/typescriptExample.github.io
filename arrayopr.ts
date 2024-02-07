//array inbuild method here i am used 
//for loop for of and foreach loop here we are used

const fruits:string[]=["apple","ornage","bananna","mango"]

//add element in array
const updaedfruits = fruits.push("kapil");
console.log(updaedfruits);
console.log(fruits);

//removed lastdata form array
const lastData = fruits.pop();
console.log(lastData);
console.log(fruits);

//interationg over element

//for loop
for (let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}

//for of loop 
//we are get values
for(const fruit of fruits){
    console.log(fruit)
}

//for rach loop
fruits.forEach((curVal)=> console.log(curVal))


//for in loop 
//here we are get index
for(const fruitData in fruits){
    console.log(fruits[fruitData])
}