import chalk from "chalk";
import { resume } from '../data/resume';
import type { MenuOptionValue } from '../menu/menu';

export type SectionKey = Exclude<MenuOptionValue, 'exit'>;

const titles: Record<SectionKey, string> = {

    about: 'ABOUT ME',
    education: 'EDUCATION',
    experience: 'EXPERIENCE',
    projects: 'PROJECTS',
    skills: 'SKILLS',
    contact: 'CONTACT'

};

const renderers: Record<SectionKey, () => void > = {
    about: () =>{
        console.log(resume.profile.summary);
    },

    education: () => {
        resume.education.forEach((education) => {
            console.log(chalk.bold(education.qualification));
            console.log(education.institution);
            console.log(`${education.startDate} - ${education.endDate}`);
            console.log(chalk.gray(education.city));
            console.log();
        });
    },

    experience: () => {
        resume.experience.forEach((experience) => {
            console.log(chalk.bold(experience.position));
            console.log(experience.company);
            console.log(`${experience.startDate} - ${experience.endDate}`);
            console.log(chalk.gray(experience.location));
            console.log();
        });
    },

    projects: () => {
        resume.projects.forEach((project) => {
            console.log(chalk.bold(project.name));
            console.log(project.description);
            console.log(chalk.gray(project.technologies.join(', ')));
            if(project.url){
                console.log(chalk.cyan(project.url));
            }
            console.log();
        });
    },

    skills: () => {
        resume.skills.forEach((skill) => {
            console.log(chalk.bold(skill.category));
            console.log(skill.items.join(', '));
            console.log();
        })
    },

    contact: () => {
        console.log(resume.contact.email);
        console.log(resume.contact.linkedin);
    }
};

export function menuSection(option: SectionKey): void {
    console.log();
    console.log(chalk.bold.white(titles[option]));
    console.log();

    renderers[option]();

    console.log(chalk.gray('─'.repeat(70)));
    console.log();
}

