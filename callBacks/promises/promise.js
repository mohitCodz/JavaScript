const getPromise = () => {
    new Promise((resolve, reject) => {
        console.log("this is promise");
        resolve("Success");
    });
};
let promise = getPromise();
// using then meathod 