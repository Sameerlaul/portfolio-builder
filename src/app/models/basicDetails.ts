export class BasicDetails {

    constructor(
        public name: string,
        public role: string,
        public email: string,
        public linkedInUrl: string,
        public fbUrl?: string,
        public instaUrl?: string,
        public githubUrl?: string,
        public tweeterUrl?: string,
        public skypeUrl?: string,
    ){}
}