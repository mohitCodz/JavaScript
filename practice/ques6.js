// create a toggle button that turns the screen to the dark mode when clicked & light mode when clicked again
let modeBtn = document.querySelector('#mode');
let body = document.querySelector("body")

let currMode = "light";
modeBtn.addEventListener("click",()=>{
    if( currMode == "light"){
        currMode = "dark";
       body.style.backgroundColor = "black";
    }
    else{
 currMode = "light";
body.style.backgroundColor = "white";
    }
    console.log(currMode);
})