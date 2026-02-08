// java variables
// const lastname ="Thompson";
// const firstname ="Ada";
// const age =20;
// const height =6.9;
// let weight =60;
// const country ="Nigeria";
// let address ="Alakahia";
// let gender ="female";

// console.log(lastname)
// console.log(firstname)
// console.log(age)
// console.log(height)
// console.log(weight)
// console.log(country)
// console.log(address)
// console.log(gender)


//  concatenation- combining two or more strings together
// const firstname ="ADA";
// const lastname ="THOMPSON";
// const age =20;
// const country ="Nigeria";
// const fullname = `Hello good morning, my name is ${firstname} ${lastname} and I'm ${age} old from ${country}`;
// console.log(fullname);

//assignment 
//write a program that calculates the area of a rectangle given its length and width using assignment operators.
// let length = 2;
// const width = 4;
// const area = length * width;
// console.log(area);

// // //write a program that calculates the area of a circle given its radius using assignment and arithmetic operators.
// const pi = 3.14;
// let r = 2;
// const areaOfCircle = pi * r**r;
// console.log(areaOfCircle);

// // //write a program that converts temperature from Celsius to Fahrenheit using assignment and arithmetic operators.
// let celsius = 27;
// const fahrenheit = (celsius * 9/5) + 32;
// console.log(fahrenheit);

// assignment conditional and loops together
// write a program that takes in a user's age and outputs whether they are a child, teenager, adult

// loop through the numbers 1 to 50




// assignment arrays
// write a program that takes in a list of numbers, strings, booleans and nested arrays and 
// outputs the sum of all the numbers in the list using a for loop and the .length method.

const num= [1 + 2 + 3 + 4 + 5];
console.log(num)


for ( let num = 1; num <= 15 ; num++ ) {
    console.log(` ${num}`);
}

console.log(num.length)

// using arrays method 
// add the first items
// remove the last item
// add the last item
// remove the first item 
// get the index of one array
// join them with comma
// add two arrays together

let name =["ada", "marian", "boma" ,"john"]
// add the first items
name.unshift("Iyo")
console.log(name)
// remove the last items
name.pop()
console.log(name)

// add the last item
name.push("Grace")
console.log(name)

name.shift()
console.log(name);

console.log(name.indexOf("boma"));

const nameString = name.join(" , ");
console.log(name);

const morename = ["gift", "Special"];
const allname = name.concat(morename);
console.log(allname);

// Arrays of booleans

const booleans=[true, false, true];

// add the first items
booleans.unshift(true)
console.log(booleans)
// remove the last items
booleans.pop()
console.log()

// add the last item
booleans.push(false)
console.log(booleans)

booleans.shift()
console.log(booleans);

console.log(booleans.indexOf(false));





const nestaray =[9, 2, 3, ["ada", 1,5], true,false]


const morenestaray = ["felicia", "Special", [10], true];
const allnestaray = nestaray.concat(morename);
console.log(allnestaray);


