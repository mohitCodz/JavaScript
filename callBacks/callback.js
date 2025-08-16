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
// don't pass it with ()