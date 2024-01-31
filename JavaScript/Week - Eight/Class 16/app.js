// alert("Hello Students");

// Arrays

var student1 = "Noman";
var student2 = "Ahmed";

var students = ["Noman", "Ahmed", "Ali"];

console.log(student1);

console.log(students);

// Index of Array (Start from 0)

console.log(students[1]); // Get Particular value from Array

// Data Type Store in Variable (All Data types)

// Array Adding and Remove

// Add in Arrays
students[3] = "Adil";
students[4] = "Abc";

var students = [];
students[students.length] = "Ahmed";
students[students.length] = "Ali";

console.log(students);

// Delete in Arrays (POP method) last one deleted

var students = ["Amin", "Ahmed", "Zain"];

students.pop();

console.log(students);

// Add in Arrays (Push method) add last one

var students = ["Amin", "Ahmed", "Zain"];

students.push("abc");

console.log(students);

// Delete in Arrays (Shift method) first one deleted

var students = ["Amin", "Ahmed", "Zain"];

students.shift();

console.log(students);

// Add in Arrays (Unshift method) add first one

var students = ["Amin", "Ahmed", "Zain"];

students.unshift("abc");

console.log(students);

// Splice method (Delete and add particular value)

var students = ["Amin", "Ahmed", "Zain"];

students.splice(1, 2); // target value and ending point
students.splice(1, 2, "abc", "xyz"); // target value and ending point and add value

console.log(students);

// Slice method (Copy of Array)

var students = ["Amin", "Ahmed", "Zain"];

var copyArr = students.slice(1, 2); // target index and after this copy all

console.log(copyArr);
console.log(students);
