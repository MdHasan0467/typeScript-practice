type NoobDeveloper2 = {
    name: string;
}

type JuniorDeveloper2 = NoobDeveloper2 & {
    expertise: string;
    experience: number;
}

type SeniorDeveloper = JuniorDeveloper2 & {
    leaderShipExperience: number;
    leaderShipLevel : 'Junior' | 'Mid' | 'Senior';
}

const newDeveloper3 : NoobDeveloper2 | JuniorDeveloper2 = {
    name: 'Mojnu Miya'
}





const newDeveloper4 : NoobDeveloper2 | JuniorDeveloper2 = {
    name: 'Milon Miya',
    expertise : 'JavaScript',
    experience : 2
}


const newDeveloper5 : NoobDeveloper2 | JuniorDeveloper2 | SeniorDeveloper = {
    name: 'Milon Miya',
    expertise : 'TypeScript',
    experience : 2,
    leaderShipExperience : 1,
    leaderShipLevel: "Junior"
}