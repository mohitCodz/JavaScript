// take array input form user and print sum
let n = prompt("Enter an array"); // asking user for input 
let arr=[];
for(let i = 1; i>=n;i++){
 arr[i-1]=i; // i-1 store the first value in the first index and so on 
}
console.log(arr); // printing the array

// finding the sum of all numbers using reduce meathod

const output=arr.reduce((result,current)=>{
    return result + current;
})