// url
const URL = "https://alexwohlbruck.github.io/cat-facts/"

const getFact = async () => {
    // featch meathod
    console.log("Fetching data please wait....");
    let response = await fetch(URL); // 1st promise return
    console.log(response); // the response will be in JSON format
    // using json () meathod
    let data = await response.json(); // 2nd promise return
    console.log(data); // displaying the data that is converted from JSON to JS Object
}