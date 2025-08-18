// function
function asyncFunc() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Some data1");
            resolve("Success");
        }, 4000);
    })
}
