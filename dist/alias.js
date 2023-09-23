"use strict";
const person = {
    name: 'John',
    profession: 'teacher',
    address: 'New York'
};
const person2 = {
    name: 'Dale',
    age: 36,
    profession: 'worker',
    address: 'Dubai'
};
const isPersonMarried = false;
const courseName = 'TypeScript';
const calculate = (num1, //? 10
num2, //? 20
operation //? (x,y) => x+y  ||  (10,20)=> 10+20
) => {
    return operation(num1, num2);
};
calculate(10, 20, (x, y) => x + y);
calculate(10, 20, (x, y) => x - y);
calculate(10, 20, (x, y) => x * y);
calculate(10, 20, (x, y) => x / y);
