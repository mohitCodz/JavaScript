// class

class Car {

    // constructor
    constructor(year,brandName){

    }

    //start meathod
    start(){
        console.log("Start");
    }
    // stop meathod
    stop(){
        console.log("Stop");
    }
      // model year meathod
      modelYear(){
        console.log(year);
        this.year = year; // storing the year 
      }
       // brand name
       brandName(){
        console.log(name);
        this.name = this.name; // storing the brand name
       }
}
// creating object
let fortuner = new Car("Toyota","2026"); // constructor will invoke
let innova = new Car("Honda","2026"); // constructor will invoke
let glanza = new Car("BMW","2027");// constructor will invoke