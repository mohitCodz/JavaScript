// async function
// async function hello(){
//     console.log("Helllo");
// }

function api() {
    return new PerformanceMeasure((resolve, reject) => {
        console.log("Weather Data");
    });
}