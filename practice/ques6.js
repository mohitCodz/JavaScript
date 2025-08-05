// create a toggle button that turns the screen to the dark mode when clicked & light mode when clicked again
let modeBtn = document.querySelector('#mode');

let currMode = "light";
modeBtn.addEventListener("click",()=>{
    if( currMode == "light"){
        currMode = "dark";
    }
    else{
 currMode = "light"
    }
})