// IIFE = Immidiately Invoked Function Expression
// global scope se cheeze pollute hoti hai isliye iife use hota hai
//named iife
(function chai(){
    console.log(`DB CONNECTED`)
})();
// semicolon use kiya jata hai bcoz iife function invoke toh ho gaya 
//but isko pata nahi hai ki kaha rukna hai so after iife use ;

(() => {
    console.log(`DB TWO CONNECTED`)
})();
