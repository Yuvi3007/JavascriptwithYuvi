//Numbers and Maths in javascript
const score =400
//console.log(score)

//specifically tells that the given object is number.

const balance = new Number (100)
//console.log(balance);

//some of the prototypes of the number 
//console.log(balance.toString().length);

//precision value use in e commerce

//console.log(balance.toFixed(2));

//basically it rounds off the number in the given precision

const otherNum=123.894
//console.log(otherNum.toPrecision(4));

//it gives the 0 separated in the local reading format of that country

const hundreds = 10000000
//console.log(hundreds.toLocaleString('en-IN'));


/// ****************Math*******************///
///powerful inbuilt library of javascript
/*console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.8));
console.log(Math.floor(4,9));

console.log(Math.min(4,3,6,8));//finding min value in the array 
console.log(Math.max(7,33,21,4,56,19)); //finding max value in the array */

//most used function of the math library => random
//random function always gives values between 0 to 1
//to avoid this following tricks are applied while making any type of the game or something

console.log(Math.random());
console.log((Math.random()*10) +1);
console.log((Math.random()*10) +1);

const min =10;
const max = 20;
// important formula
console.log(Math.floor(Math.random() *(max - min + 1)) + min);