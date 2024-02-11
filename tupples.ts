//what is tupples
//tupples or array both are almost same but where we are know it is fixed datstype of data come under where we are used tupples

const newArray = ["kapil", "ram","shyam", 45, true]
//in above example our array inside we are write name but we are write also number and boolean values soo fix this in tuppples

//person basic information
//tupples oreder or type both are matter 

type PersonInfo = readonly [string, number, boolean];

const displaydata = (person: PersonInfo) => {
    const [name, age, driving] = person;
    console.log(`Name is ${name}, and age is ${age}. Driving License: ${driving ? "yes" : "no"}`);
}

const person1: PersonInfo = ["kapil", 25, true];
// person1.push("welcome") //then here error come 
console.log(person1)

displaydata(person1);

// const person2:PersonInfo = ["kanika","18",false]
//above we are got errors 
//in tupples we  got our data in proper oreder

//best preactices
//we can only read i can not edit any 
//if we are using tupples then readonly is important

//exmples of tupples
// 1. ecommerse app store product information here we are creata 2 product and show their information 

type ProductData = readonly[string,number, number, boolean]

const product1:ProductData = ["shooes", 2000 , 20 ,true]
const product2:ProductData = ["jeans", 1200, 10, false]

const ecommerseProductDisplay = (products:ProductData[]) =>{
    for (let i=0; i<products.length; i++){
        const product = products[i]
        console.log(`Product ${i + 1}:`);
        console.log(`Name: ${product[0]}, Price: ${product[1]}, Quantity: ${product[2]}, Available: ${product[3]}`);

    }

}
console.log(ecommerseProductDisplay([product1,product2]))


//here i am doing student management system and keep track student grades

type SubjectGrade = [string,  number]

const math:SubjectGrade = ["maths", 82];
const Sci:SubjectGrade = ["Science", 92];
const English:SubjectGrade = ["Engslish", 72];

//here we are find average grade
const averageGrade = (subjects:SubjectGrade[]) =>{
    let totalGrade = 0;
    for(let j=0; j<subjects.length; j++){
        const lengthStore = subjects[j];
        console.log(`your length is ${lengthStore} and loop run is ${j}`)
        console.log(`total price is ${math[1] + Sci[1]+ English[1]}`)
        totalGrade += lengthStore[1];
        console.log("total grade is =", totalGrade);
    }
    return totalGrade/subjects.length;
}
console.log(averageGrade([math, Sci, English]))


//here i am working with aa weather application and store weather data in different cityes

type WeatherData = [string, number, string]

const firstCity:WeatherData = ["Jodhpur", 45, "Too hot"];
const secondCity:WeatherData = ["Delhi", 22, "Noraml"]
const thirdCity:WeatherData = ["Jaipur", 40, "hot"]

const displayWeatherData = (weatherInfo:WeatherData[]) =>{
    for (let i=0; i<weatherInfo.length; i++){
       const cityData = weatherInfo[i]
       console.log(`Your weather city is ${cityData[0]} then temp is ${cityData[1]} and i am feeing ${cityData[2]}`) 

    }
}
displayWeatherData([firstCity,secondCity,thirdCity])
