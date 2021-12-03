interface skill {
    name: string,
    logo: string
}
export class WorkDetails {

    constructor(
        public yearsOfExp: number,
        public userSkills: skill[],
        public userResponsibilities: string[],
    ){}
}