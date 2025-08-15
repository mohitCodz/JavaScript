// parent class
class Parent{
    hello(){
        console.log("Hello i am the parent class");
    }
    bye(){
        console.log("bye!")
    }
}
// child class ( inherting the property form the parent class )
class Child extends Parent{
    relax(){
        console.log("I'm a child and i am relaxing");
    }
}

// child class obj
let chunnu = new Child(); 