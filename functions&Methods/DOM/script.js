// Ques - create three divs with common name "box". Access them

let h2 = document.querySelector("h2");
console.dir(h2.innerText);

h2.innerText = h2.innerText + "from Mohit";

// this is the more efiitient way to solve this ques
let div = document.querySelectorAll(".box");
let idx = 0; // index
for(div of divs){
 div.innerText = `new unique value ${idx}`;
 idx++;
}


// div[0].innerText="Hello World";  // div[0]  we are accessing the first element 
// div[1].innerText="I am learning JavaScript!";  // div[1]  we are accessing the second element 
// div[2].innerText="Keep Coding";  // div[2]  we are accessing the third element 