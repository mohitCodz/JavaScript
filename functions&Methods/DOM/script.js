// Ques - create three divs with common name "box". Access them & add some unique text 

let h2 = document.querySelector("h2");
console.dir(h2.innerText);

h2.innerText = h2.innerText + "from Mohit";

// this is the more efiitient way to solve this ques
let divs = document.querySelectorAll(".box"); // Use 'divs' for the collection
let idx = 1;
for (let div of divs){ // 'div' is the current item
  div.innerText = `new unique value ${idx}`;
  idx++;
}


// div[0].innerText="Hello World";  // div[0]  we are accessing the first element 
// div[1].innerText="I am learning JavaScript!";  // div[1]  we are accessing the second element 
// div[2].innerText="Keep Coding";  // div[2]  we are accessing the third element 