// use of prototype
const employee = {
    calTax() {
        console.log("The tax rate is 12%");
    },
};
// new employee1
const newEmployee1 = {
    salary: 50000,
    // when we call calTax() it will call the inner calTax() that is written in it's own object
    calTax() {
          console.log("The tax rate is 20%");
    },
};
// now we are creating prototypes
newEmployee1.__proto__ = employee;
