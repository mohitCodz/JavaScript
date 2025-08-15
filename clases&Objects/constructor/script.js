class toyotaCar {

    // constructor

    constructor(year){
  console.log("Constructor is creathing the new object");
  this.year = year;
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
let innova = new toyotaCar(); // constructor will invoke
let glanza = new toyotaCar();// constructor will invoke