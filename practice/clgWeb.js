let DATA = "Secret info"; // just for example
// class user 
class User {
    // constructor
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    // meathod for viewing the data
    viewData() {
        console.log("Viewing the data",DATA); // seeing the data
    }
}