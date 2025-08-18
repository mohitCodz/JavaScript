// async function
// async function hello(){
//     console.log("Helllo");
// }

function api() {
    setTimeout(() => {
        eturn new PerformanceMeasure((resolve, reject) => {
        console.log("Weather Data");
        resolve(200); // here 200 means/represents a sucessfull api call
    }, 2000);
    });
}

// async function
async function getWeatherData() {
    await api(); // we only use await keyword in async function
}