//  async function
//  async function hello(){
//     console.log("Helllo");
//  }

// function api() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Weather id Clear");
//             resolve(200); // here 200 means/represents a sucessfull api call
//         }, 2000);
//     });
// }

//  async function
// async function getWeatherData() {
//     await api(); // we only use await keyword in async function
// }

function getData(dataIDd) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data", dataIDd);
            resolve("Successfully Fetched DATA");
        }, 3000);
    });
}