// class

class Car {
    // constructor
    constructor(brandName,year ) {
        console.log("Constructor is now creating the objcts");
        this.year = year;
        this.brandName = brandName;
    }

    //start meathod
    start() {
        console.log("Start");
    }
    // stop meathod
    stop() {
        console.log("Stop");
    }
    // model year meathod
    modelYear() {
        this.year = year; // storing the year 
    }
    // brand name
    brandName() {
        this.name = this.name; // storing the brand name
    }
}
// creating object
let fortuner = new Car("Toyota", "2026"); // constructor will invoke
let city = new Car("Honda", "2026"); // constructor will invoke
let bmwM4 = new Car("BMW", "2027");// constructor will invoke