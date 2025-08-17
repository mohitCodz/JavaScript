const getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("this is promise");
        resolve("Success");
    });
};
let promise = getPromise();

// using then meathod 
// if the promise is fullfield then this will be exacuted
promise.then((res) => {
    setTimeout(() => {
        console.log("Promise is fullfield");
    }, 5000);
});

// catch meathod