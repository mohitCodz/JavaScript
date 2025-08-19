// url
const URL = "https://catfact.ninja/fact"

const getFact = async () => {
    // featch meathod
    console.log("Fetching data please wait....");
    let response = await fetch(URL); // 1st promise return
    console.log(response); // JSON format
    // using json () meathod
    let data = await response.json(); // 2nd promise return
    console.log(data.fact); // data is an object with a 'fact' property
};