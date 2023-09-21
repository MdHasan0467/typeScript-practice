// Declare a tuple type
let x: [string, number] = ['hasan', 10];


// Declare a tuple type
let y: [string, number];
// Initialize it
y = ["hello", 10];     //* OK
// Initialize it incorrectly
y = [10, "hello"];     //! Error