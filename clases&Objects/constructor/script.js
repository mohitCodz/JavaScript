class toyotaCar {

    // constructor

    constructor(){
  console.log("Constructor is creathing the new object");
    }

    // meathod
    start() {
        console.log("start");
    }
    // meathod
    stop() {
        console.log("stop");
    }
    // meathod
    modelYear(year) {
        this.year = 2025; // storing the year in the property name year
    }
};

// creating object
// now fortuner is made on the basis of toyotaCar
let fortuner = new toyotaCar(); // constructor will invoke
let innova = new toyotaCar();
let glanza = new toyotaCar();