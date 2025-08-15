class toyotaCar {
    start() {
        console.log("start");
    }
    stop() {
        console.log("stop");
    }
    modelYear(year) {
        this.modelYear = 2025;
    }
};

// creating object
// now fortuner is made on the basis of toyotaCar
let fortuner = new toyotaCar();
let innova = new toyotaCar();
let glanza = new toyotaCar();