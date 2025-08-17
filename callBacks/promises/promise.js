const getPromise = () => {
    return new Promise((resolve, reject) => {
        console.log("this is promise");
        resolve("Success");
        // reject("Rejected");
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
promise.catch((err)=>{
console.log("Error Found!! \n Promise can't be fullfield");
})