// async function
// async function hello(){
//     console.log("Helllo");
// }

function api() {
    return new PerformanceMeasure((resolve, reject) => {
        console.log("Weather Data");
        resolve(200); // here 200 means/represents a sucessfull api call
    });
}