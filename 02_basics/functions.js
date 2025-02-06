function sayMyName(){
    console.log("Y");
    console.log("U")
    console.log("V")
    console.log("R")
    console.log("A")
    console.log("j")
    }
    //sayMyName //=> this is not going to print anything because only reference is passed
   // sayMyName(); //=> this will print it as value with the reference is passed
    
    //what is parameter and arguments in the function 
    //type of data structure which is taken as input while defining the function is called as parameter => num1 & num2
    function addtwo(num1,num2){
        //console.log(num1+num2);
    }
    //addtwo(3,4) //when we call the function at that time value which is passed is called as arguments

    function sum(num3,num4){
        let result = num3+num4;
        return result;
    }
    const result=sum(3,6)
    //console.log("Result: ", result);


    // mostly in e commerce websites we face this type of scenario where
    //we have multiple arguments in the function call
    // use of REST Operator in JS

    //interview question
    function calculatecartprice(val1 , val2,...num1){
        return num1
    }
    //this will give first val1 and val2 includes 200 and 400 while we r returning num1 it will give 500 and 600
    //console.log(calculatecartprice(200,400,500, 600))// it will give an array of the arguments passed 
    const user={
        username:"Yuvi is here",
        Level: 76
    }
    //remember to write in backticks
    function handleObject(anyobject){
        console.log(`username is ${anyobject.username} and the level is ${anyobject.Level}`);
    }
    handleObject(user);