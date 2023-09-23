//! Type declare er somoy always naming convention first letter Capital letter hobe
type PersonType = {
    name?: string;
    age?: number;
    profession?: string;
    address?: string;
}

const person: PersonType = {
    name: 'John',
    profession: 'teacher',
    address: 'New York'
}

const person2: PersonType = {
    name: 'Dale',
    age: 36,
    profession: 'worker',
    address: 'Dubai'
}


type PersonMarriedType = boolean;
const isPersonMarried: PersonMarriedType = false;


type CourseType = string;
const courseName: CourseType = 'TypeScript';


type OperationType = (x:number, y:number)=> number;

const calculate = (
    num1 : number, //? 10
    num2 : number, //? 20
    operation : OperationType //? (x,y) => x+y  ||  (10,20)=> 10+20
    ) => {
    return operation(num1, num2);
}

calculate(10,20, (x,y)=> x+y)
calculate(10,20, (x,y)=> x-y)
calculate(10,20, (x,y)=> x*y)
calculate(10,20, (x,y)=> x/y)