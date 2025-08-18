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
        }, 2000);
    });
}

// simple async-await
// async function getAllData() {
//     console.log("Getting data 1.......");
//     await getData(1);
//      console.log("Getting data 2.......");
//     await getData(2);
//      console.log("Getting data 3.......");
//     await getData(3);
//      console.log("Got all the data !");
// }

//we can't execute the async function we need to put this function inside any function so to solve this we use IIFE

// IIFE 
// simply put the async function inside ()();
(async function () {
    console.log("Getting data 1.......");
    await getData(1);
     console.log("Getting data 2.......");
    await getData(2);
     console.log("Getting data 3.......");
    await getData(3);
     console.log("Got all the data !");
})(); //IIFE
// automatic call