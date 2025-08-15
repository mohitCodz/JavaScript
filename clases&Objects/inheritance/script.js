// class

class Car {

    // constructor
    constructor(){

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
let fortuner = new toyotaCar("2026", 27); // constructor will invoke
let innova = new toyotaCar("2026", 31); // constructor will invoke
let glanza = new toyotaCar("2027", 29);// constructor will invoke