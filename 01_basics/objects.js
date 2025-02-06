//concept of singleton=>yeh apni tarah ka ek hi object hai
//constructor se banega toh humesha singleton banega 
// how to declare object = {} bas itna hi hai
//object literal =>create=> keys and values are added in the objects 
//symbol ko kaise add krna hai in the object
//pehle initiate kiya
//interview ke hisab se imp
const mysym = Symbol("Key1")
//object mein add krne se pehle square bracket use krna 
//otherwise wont be able to access

const JsUser = {
name: "yuvraj",
age: 18,
location: "kharagpur",
email:"yuvraj@gmail.com",
isLoggedin : false,
lastLogin: ["Monday","Saturday"],
"full name":"Yuvraj Ingale",
[mysym] :"mykey1"

}
/*console.log(JsUser["email"]);// use this type square brackets to access the elements in the objects
console.log(JsUser["full name"]);
console.log(JsUser[mysym]);

JsUser.email="yuvraj@google.com";
console.log(JsUser.email);*/

//how to lock the object 
//Object.freeze(JsUser);
//niche wali value propogate nahi hogi seedha freeze ho jayegi
//JsUser.email="yuvraj@ms.com"
//console.log(JsUser);

//how to define function =>it is definedd as a simple variable 

JsUser.greetings = function(){
    //console.log("Hello guys!!!")
}
JsUser.greetwo =function(){
    //console.log(`This is ${this.name}`)// remember this by reference passing values
}
//console.log(JsUser.greetings());
//console.log(JsUser.greetwo());


//****************** 2nd part of objects ***************/

const tinderuser={}

tinderuser.id ="123abc"
tinderuser.name ="Yuvi"
tinderuser.isLoggedin =false

//console.log(tinderuser);

const regularUser={
    email:"nobody@gmail.com",
    fullname:{
        userfullname:{
            firstname : "Yuvraj",
            lastname:"Ingale"
        }
    }
}
//console.log(regularUser.fullname.userfullname.firstname);//agar in depth mein elements access krne hai to iski nesting kam ki ja sakti hai by using .values
//console.log(regularUser.fullname.userfullname.lastname);
 //merging of objects same like arrays
const obj1={1:"a", 2:"b"};
const obj2 ={3:"c",4:"d"};

//const obj3 ={obj1,obj2}
//spreading of objects this is used mostly by the most of programmers
const obj3 ={...obj1,...obj2}
//console.log(obj3);

//when values come from databases
// i want all the keys from  my objectand want ot insert them into my array
//console.log(Object.keys(tinderuser)); //this returns the array 
//console.log(Object.values(tinderuser));

//yeh wala kam which is destructuring we will do it mostly

const course={
    coursename :"js in hindi",
    price:"999",
    teacher:"Yuvi is here "
}

const{teacher}=course
console.log(teacher);//curly braces means object ko destructure kiya ja rha hai

