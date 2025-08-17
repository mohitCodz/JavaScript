// creating a new promise
let promise = new Promise ((resolve, reject)=>{
    reject("Error Found");
});


// // fucntion
// function getData(dataId, getNextData) {
//     return new Promise((resolve, reject) => {
//         // setTimeout to delay fro 2 second
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success");
//             // condition
//             if (getNextData) {
//                 getNextData(); // if this funcitonn exists only then this function will call
//             }
//         }, 5000);
//     });

// }