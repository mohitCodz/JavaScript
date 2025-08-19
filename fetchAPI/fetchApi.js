// url
const URL = "https://alexwohlbruck.github.io/cat-facts/"

const getFact = async () => {
    // featch meathod
    console.log("Fetching data please wait....");
    let response = await fetch(URL);
    console.log(response); // the 
}