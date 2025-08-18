// function - suppose this as an api -we only deal with promises
function asyncFunc() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data 1");
            resolve("Success");
        }, 4000);
    })
}
// function - suppose this as an api -we only deal with promises
function asyncFunc() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data 2");
            resolve("Success");
        }, 4000);
    })
}

// dealing with promises
console.log("Getting data 1............");
let p1 = asyncFunc();
p1.then((res) => {
    console.log(res);
});