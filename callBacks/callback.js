// function
function sum (a,b){
    console.log(a+b);
}
// another function
function calculator(a,b,sumCallBack){
    sumCallBack(a,b); 
}
// call
calculator(1,2,sum); // here sum ia passsing as an argument to another function ( calculator ) this is called callback
// don't pass it with (). only pass it with the function name

// another example using arrow function

// function
function sum (a,b){
    console.log(a+b);
}
// another function
function calculator(a,b,sumCallBack){
    sumCallBack(a,b); 
}
// call
calculator(1,2,(a,b)=>{
     console.log(a+b);
}); // here sum ia passsing as an argument to another function ( calculator ) this is called callback
// don't pass it with (). only pass it with the function name