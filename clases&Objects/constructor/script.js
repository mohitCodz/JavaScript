// class

class Car {
    // constructor
    constructor(brandName,year,milage ) {
        console.log("Constructor is now creating the objcts");
        this.year = year;
        this.brandName = brandName;
        this.milage = milage;
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
    // milage
    milage(){
        this.milage = milage; // storing milage
    }
}
// creating object
let fortuner = new Car("Toyota", "2026",20); // constructor will invoke
let city = new Car("Honda", "2026",40); // constructor will invoke
let bmwM4 = new Car("BMW", "2027",31);// constructor will invoke