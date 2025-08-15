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
        console.log("Viewing the data", DATA); // seeing the data
    }
}
// admin class
class Admin extends User {
    // meathod to edit data
    editData() {
        DATA = "New value";
    }
}
// object
let student1 = new User("Mohit", "abc@gmail.com");
let student2 = new User("Ram", "abc@gmail.com");
let admin1 = new Admin("admin","admin@gmail.com");