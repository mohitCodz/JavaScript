// fucntion
function getData(dataId,getNextData) {
    // setTimeout to delay fro 2 second
    setTimeout(() => { 
        console.log("data", dataId);
        getNextData(); // function calling 
    },2000);
}
getData(1,getData(2)); // here we have passed the same function for the nextdata -> getData(2) 