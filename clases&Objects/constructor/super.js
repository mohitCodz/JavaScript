// class parent
class Parent {
    // constructor 
    constructor() {
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
        // using the super keyword
        super(); // to invoke parent class constructor
        this.name = name;
    }
    sleep() {
        console.log("Good Night");
    }
}
// obj
let munna = new Child("ram");
