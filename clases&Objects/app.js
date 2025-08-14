const student = {
  fullName: "Mohit", // full name
  marks: 90.5, // marks
  // printMarks () to print the marks 
  printMarks: function() {
    console.log("marks =", this.marks);
  },
};

student.printMarks();