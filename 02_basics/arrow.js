//this keyword tells current context ke bare mein

const user={
    username:"Yuvi",
    price:999,
//braces ke andar ka apna current context hai
//context ka simple matlab hai values
    welcomeMessage:function(){
        //console.log(`${this.username}, welcome to website`);
    }
}

//user.welcomeMessage()
//also remember this that we can use this only in objects not in functions
/*function chai(){
    let username ="Yuvraj"
    console.log(this.username);
}
chai()*/

// Arrow function below
//it gives values like undefined and empty curly braces
const chai = () => {
    let name ="ram"
    console.log(this.name);
}

//chai()
//without curly braces also it can be run
const addtwo = (num1,num2) => {
    return num1 + num2
}
// console.log(addtwo(3,5));

//another way is that without curly braces 

const addTwo=(num3,num4) =>(num3+num4)
console.log(addTwo(8,9));