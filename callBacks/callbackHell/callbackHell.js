// fucntion
function getData(dataId,getNextData) {
    setTimeout(() => { // delay for 2 second
        console.log("data", dataId);
        getNextData(); // function calling 
    },2000);
}