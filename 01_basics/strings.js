//string is an object in js
const name = "yuvraj"
const level = 76
//old way of concatanating strings prefer not to use
//console.log(name + level + "pro max");

//String interpolation=String interpolation allows you to embed variables and expressions inside strings using template literals (backticks ` `)

//console.log(`Hello my name is ${name} and my level is ${level}`)

const GameName ="YuviO7"
//.length is a property of the javascript not a function interview question
//some of the functions of the strings in js
console.log(GameName.charAt(2));
console.log(GameName.indexOf("7"));
console.log(GameName.toLocaleUpperCase("uvi"));
console.log(GameName.length);
console.log(GameName.substring(0,3)); //ending index is never included

const newStringOne = "      Yuvraj   ";
console.log(newStringOne);
console.log(newStringOne.trim()); //to remove trailing spaces in the strings

//interview questions = most imp functions in the strings 

const url = "https://Yuvraj.com/Yuvraj%30gamer"

console.log(url.replace('%30','-'))
//see the spaces have been added in place of %30

console.log(url.includes("Yuvraj"))
//this checks if the given character is there or not

let emoji = "💖";  // Unicode: U+1F496
console.log(emoji.codePointAt(0));  // Output: 128150



