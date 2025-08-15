// class parent
class Parent {
    // constructor 
    constructor(name) {
        console.log("Enter parent constructor"); // to see which constructor is called first
        this.species = "homo sapiens";
           this.name = name;
    }
    eat() {
        console.log("Eat food now");
    }
}
// child class
class Child extends Parent {
    // constructor
    constructor(name) {
          console.log("Enter child constructor"); // to see which constructor is called first
        // using the super keyword
        super(name); // to invoke parent class constructor
    }
    sleep() {
        super.eat();  // calling the eat meathod 
        console.log("Good Night");
    }
}
// object
let munna = new Child("mohit");
