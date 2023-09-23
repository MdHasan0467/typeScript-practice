type NoobDeveloper = {
    name: string;
}

type JuniorDeveloper = {
    name: string;
    expertise: string;
    experience: number;
}


const newDeveloper : NoobDeveloper | JuniorDeveloper = {
    name: 'Mojnu Miya'
}


const newDeveloper2 : NoobDeveloper | JuniorDeveloper = {
    name: 'Milon Miya',
    expertise : 'TypeScript',
    experience : 2
}