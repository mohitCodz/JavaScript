// displaying how synchronous work 
console.log("one");
console.log("two");
console.log("three");
console.log("four");
// setTimeout is a function which runs some code after certain amount of time ( delay )
setTimeout(() => {
    console.log("five");
},5000); // after 5 second this will print five