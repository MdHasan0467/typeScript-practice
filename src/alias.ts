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