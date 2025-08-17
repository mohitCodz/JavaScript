// fucntion
function getData(dataId,getNextData) {
    // setTimeout to delay fro 2 second
    setTimeout(() => { 
        console.log("data", dataId);
        // condition
        if (getNextData){
            getNextData(); // if this funcitonn exists only then this function will call
        }
    },2000);
}
getData(1,()=>{
    getData(2)
}); // here we have passed the same function for the nextdata 