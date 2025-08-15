class toyotaCar {

    // constructor

    constructor(){

    }

    // meathod
    start() {
        console.log("start");
    }
    // meathod
    stop() {
        console.log("stop");
    }
    modelYear(year) {
        this.year = 2025; // storing
    }
};

// creating object
// now fortuner is made on the basis of toyotaCar
let fortuner = new toyotaCar();
let innova = new toyotaCar();
let glanza = new toyotaCar();