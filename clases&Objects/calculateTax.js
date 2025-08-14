// use of prototype
const employee = {
    calTax() {
        console.log("The tax rate is 12%");
    },
};
// new employee1
const newEmployee1 = {
    salary: 50000,
};
// new employee2
const newEmployee2 = {
    salary: 50000,
};


// new employee3
const newEmployee3 = {
    salary: 50000,
};

// newemployee4
const newEmployee4 = {
    salary: 50000,
};

// now we are creating prototypes
newEmployee1.__proto__ = employee;
newEmployee2.__proto__ = employee;
newEmployee3.__proto__ = employee;
newEmployee4.__proto__ = employee;