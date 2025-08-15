// parent class

class Parent{
    hello(){
        console.log("Hello i am the parent class");
    }
}
// child class ( inherting the property form the parent class )
class Child extends Parent{}

// child class obj
let obj = new Child();