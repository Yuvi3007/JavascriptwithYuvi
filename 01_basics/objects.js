//concept of singleton=>yeh apni tarah ka ek hi object hai
//constructor se banega toh humesha singleton banega 

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
JsUser.email="yuvraj@ms.com"
//console.log(JsUser);

//how to define function =>it is definedd as a simple variable 

JsUser.greetings = function(){
    console.log("Hello guys!!!")
}
JsUser.greetwo =function(){
    console.log(`This is ${this.name}`)// remember this by reference passing values
}
console.log(JsUser.greetings());
console.log(JsUser.greetwo());
