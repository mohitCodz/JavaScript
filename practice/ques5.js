// take array input form user and print sum
let n = prompt("Enter an array"); // asking 
let arr=[];
for(let i = 1; i>=n;i++){
 arr[i-1]=i; // i-1 store the first value in the first index and so on 
}
console.log(arr); // printing the array