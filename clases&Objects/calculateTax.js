// use of prototype
const employee = {
    calTax(){
        console.log("The tax rate is 12%");
    },
};

const newEmployee = {
     salary: 50000,
};

// now we are using the function and meathods of the object1 ( employee ) in the object 2 (newEmployee)

newEmployee.__proto__ = employee;