// function
function asyncFunc() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Some data1");
            resolve("Success");
        }, 4000);
    })
}
let p1 = asyncFunc();
p1.then(()=>{
console.log(res);
});