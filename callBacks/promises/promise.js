// creating a new promise
let promise = new Promise ()




















// // fucntion
// function getData(dataId, getNextData) {
//     // setTimeout to delay fro 2 second
//     setTimeout(() => {
//         console.log("data", dataId);
//         // condition
//         if (getNextData) {
//             getNextData(); // if this funcitonn exists only then this function will call
//         }
//     }, 2000);
// }
// // the code below is called callback hell ( multiple callbacks inside each other )
// getData(1, () => {
//     getData(2, () => {
//         getData(3, () => {
//             getData(4);
//         });
//     })
// }); // here we have passed the same function for the nextdata 