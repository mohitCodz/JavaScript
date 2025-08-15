// example showing how error hadling works
let a = 2;
let b = 2;
console.log("a = ",a);
console.log("b = ",b);
console.log ("a + b ", a + b);
console.log ("a - b ", a - b);
try {
    console.log ("a + b ", a + c); // error line
} catch(err) { // catch will handle our code and let the other code run
console.log(err); 
}
console.log ("a + b ", a + b);
console.log ("a + b ", a + b);