const user: {
    name:string,
    age: number,
    isMarried: boolean,
    wife?:string
} = {
    name: 'John',
    age: 40,
    isMarried: true,
    wife: 'sokina'
}

// Ekta property thakteo pare abar na thakteo pare.....
const user2: {
    name:string,
    age: number,
    isMarried: boolean,
    wife?:string
} = {
    name: 'John',
    age: 40,
    isMarried: false,
}

// Jodi kono property value fixed hoy.....Aita same type & same value e hobe...
const third: {
    company: 'WebTS Solution',
    name:string,
    age: number,
} = {
    // company: 'govt tech',  //! wrong
    company: 'WebTS Solution', //* Correct
    name: 'John',
    age: 40,
}