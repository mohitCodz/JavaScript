// we can add multiple event listeners to an event
let btn1 = document.querySelector('#btn1'); 

btn1.addEventListener("click",() => {
    console.log("button 1 was clicked - 1");
})

btn1.addEventListener("click",() => {
    console.log("button 1 was clicked - 2");
})

const handler = () => {
    console.log("button 1 was clicked -3");
};
btn1.addEventListener("click",handler)

btn1.addEventListener("click",() => {
    console.log("button 1 was clicked -4");
})

btn1.removeEventListener("click",handler);