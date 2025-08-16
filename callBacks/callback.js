// function
function sum (a,b){
    console.log(a+b);
}
// another function
function calculator(a,b,sumCallBack){
    sumCallBack(a,b); 
}
// call
calculator(1,2,sum);