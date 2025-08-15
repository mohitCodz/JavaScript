// parent class
class Parent {
    
    hello() {
        console.log("Hello i am the parent class");
    }
    bye() {
        console.log("bye!")
    }
    eat(){
        console.log("eat now");
    }
}
// child class ( inherting the property form the parent class )
class Child extends Parent {
    relax() {
        console.log("I'm a child and i am relaxing");
    }
}
// adult
class Adult extends Parent {
    work() {
        console.log("I'm adult and i am working");
    }
}

// child class obj
let chunnu = new Child(); 
// adult class obj
let ram = new Adult();