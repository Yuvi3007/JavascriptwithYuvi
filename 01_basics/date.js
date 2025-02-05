//A JavaScript date is fundamentally specified as the time in milliseconds that has elapsed
//since the epoch, which is defined as the midnight at the beginning of January 1, 1970, UTC (equivalent to the UNIX epoch)
// date is an object

let myDate = new Date()
/*console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);*/

let mycreateDate = new Date(2023,0,24)
let myCreateDate = new Date(2023 ,0 , 23, 4 ,3);
/*console.log(myCreateDate.toLocaleTimeString());
console.log(mycreateDate.toLocaleString());*/

let Monthformat = new Date("06-30-2001");
console.log(Monthformat.toLocaleString());

