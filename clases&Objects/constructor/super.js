// class parent
class Parent {
    // constructor 
    constructor() {
        console.log("Enter parent constructor"); // to see which constructor is called first
        this.species = "homo sapiens";
    }
    eat() {
        console.log("Eat food now");
    }
}
// child class
class Child extends Parent {
    // constructor
    constructor(name) {
          console.log("Enter parent constructor"); // to see which constructor is called first
        // using the super keyword
        super(); // to invoke parent class constructor
        this.name = name;
    }
    sleep() {
        console.log("Good Night");
    }
}
// object
let munna = new Child("ram");
