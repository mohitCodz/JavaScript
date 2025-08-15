class toyotaCar {

    // constructor
    constructor(year,milage){
  console.log("Constructor is creathing the new object");
  this.year = year;
  this.milage = milage;
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
let fortuner = new toyotaCar("2026",); // constructor will invoke
let innova = new toyotaCar("2026",); // constructor will invoke
let glanza = new toyotaCar("2027",29);// constructor will invoke