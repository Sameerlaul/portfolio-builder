import {
    faAngular,
    faNode,
    faGithub,
    faGit,
    faGitlab,
    faCss3,
    faHtml5,
    faJs,
    faNpm,
  } from '@fortawesome/free-brands-svg-icons';

  export class SkillsList {
      public skills;

      constructor() {
          this.skills = [
            {
                name: "Angular",
                logo: faAngular
            },
            {
                name: "Node",
                logo: faNode
            },
            {
                name: "Github",
                logo: faGithub
            },
            {
                name: "Git",
                logo: faGit
            },
            {
                name: "Gitlab",
                logo: faGitlab
            },
            {
                name: "CSS",
                logo: faCss3
            },
            {
                name: "HTML",
                logo: faHtml5
            },
            {
                name: "Javascript",
                logo: faJs
            },
            {
                name: "NPM",
                logo: faNpm
            }
          ]
      }
  }