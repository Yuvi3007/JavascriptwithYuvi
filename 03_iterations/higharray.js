//for of loop is like an auto in cpp

const arr=[1,2,3,4,5];

for(const num of arr){
    //console.log(num);
}

const greetings = "Hello World!";
for(const greet of greetings){
    //console.log(`Each char is ${greet}`);
}

//maps in javascript=>
    /*Map objects are collections of key-value pairs. 
A key in the Map may only occur once; 
it is unique in the Map's collection.
*/ 

const map =new Map();
map.set('IN',"India");
map.set('FR',"France");
map.set('USA', "America");
//console.log(map);

//deconstructing of map => remember to add square brackets to access the values =>key and value

for(const[Key,value] of map){
    //console.log(Key, value);
}

//for of loop on object 
// Note => there are different ways of iterating over objects unlike maps they cant be accessed
//not iteratable like maps
/*const myObject ={
    "game1": "freefire",
    "game2":"mini militia"
}
for(const[Key,value] of myObject){
    //console.log(Key, value);
}
*/
//so how iteration can be done on object
//objects ke upar humesha for in loop 


const myObject ={
  js: "javascript",
  cpp: "C++",
  sc:"scala",
  go:"golang"
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const program =["js","rb",'sc','cpp','go']
for(const key in program){
    console.log(program[key]);
}