// url
const URL = "https://catfact.ninja/fact"
const factPara = document.querySelector('#fact');
const btn = document.querySelector('#button');
const getFact = async () => {
    // featch meathod
    console.log("Fetching data please wait....");
    let response = await fetch(URL); // 1st promise return
    console.log(response); // JSON format
    // using json () meathod
    let data = await response.json(); // 2nd promise return
    factPara.innerText = data.fact;
};

// adding event listener
btn.addEventListener("click",getFact);
getFact();