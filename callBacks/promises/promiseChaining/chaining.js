// function
function asyncFunc() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Data 1");
            resolve("Success");
        }, 4000);
    })
}
console.log("Getting data 1............");
let p1 = asyncFunc();
p1.then((res) => {
    console.log(res);
});