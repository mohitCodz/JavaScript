const getPromise = () =>{
new Promise ((resolve, reject)=>{

    resolve("Error Found");
});
}

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